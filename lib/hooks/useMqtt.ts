"use client";

/**
 * MQTT real-time hook — mirrors sporty-clone's useMqtt.js composable.
 * Connects to the sportsbook MQTT broker over WSS and provides:
 *   - subscribe(topic) / unsubscribe(topic)
 *   - onOddsChange callback
 *   - onBetStop callback
 *   - onScoreUpdate callback
 *
 * Topic conventions (mirror sporty-clone):
 *   sports/{sportId}/match/{matchId}          → odds / score updates
 *   sports/{sportId}/match/{matchId}/betstop  → market suspension
 */

import { useEffect, useRef, useCallback } from "react";
import mqtt, { type MqttClient, type IClientOptions } from "mqtt";
import { useUIStore } from "@/store/uiStore";

export interface OddsChangePayload {
  matchId: string;
  marketId: string;
  selectionKey: string;
  odds: number;
}

export interface BetStopPayload {
  matchId: string;
  marketId?: string;
  suspended: boolean;
}

export interface ScoreUpdatePayload {
  matchId: string;
  homeScore: number;
  awayScore: number;
  minute: number;
  period: string;
}

interface UseMqttOptions {
  onOddsChange?: (payload: OddsChangePayload) => void;
  onBetStop?: (payload: BetStopPayload) => void;
  onScoreUpdate?: (payload: ScoreUpdatePayload) => void;
}

const MQTT_URI = process.env.NEXT_PUBLIC_MQTT_URI ?? "";
const MQTT_OPTIONS: IClientOptions = {
  port: Number(process.env.NEXT_PUBLIC_MQTT_PORT ?? 443),
  username: process.env.NEXT_PUBLIC_MQTT_USERNAME ?? "",
  password: process.env.NEXT_PUBLIC_MQTT_PASSWORD ?? "",
  reconnectPeriod: 5000,
  keepalive: 30,
  clean: true,
};

export function useMqtt({ onOddsChange, onBetStop, onScoreUpdate }: UseMqttOptions = {}) {
  const clientRef = useRef<MqttClient | null>(null);
  const subscriptionsRef = useRef<Set<string>>(new Set());

  const subscribe = useCallback((topic: string) => {
    if (!clientRef.current?.connected) return;
    if (subscriptionsRef.current.has(topic)) return;
    clientRef.current.subscribe(topic, { qos: 1 });
    subscriptionsRef.current.add(topic);
  }, []);

  const unsubscribe = useCallback((topic: string) => {
    if (!clientRef.current?.connected) return;
    clientRef.current.unsubscribe(topic);
    subscriptionsRef.current.delete(topic);
  }, []);

  const subscribeToMatch = useCallback(
    (sportId: string | number, matchId: string | number) => {
      subscribe(`sports/${sportId}/match/${matchId}`);
      subscribe(`sports/${sportId}/match/${matchId}/betstop`);
    },
    [subscribe]
  );

  const unsubscribeFromMatch = useCallback(
    (sportId: string | number, matchId: string | number) => {
      unsubscribe(`sports/${sportId}/match/${matchId}`);
      unsubscribe(`sports/${sportId}/match/${matchId}/betstop`);
    },
    [unsubscribe]
  );

  useEffect(() => {
    if (!MQTT_URI) return; // skip in local dev when no broker is configured

    const client = mqtt.connect(MQTT_URI, MQTT_OPTIONS);
    clientRef.current = client;

    client.on("message", (topic: string, payload: Buffer) => {
      let data: Record<string, unknown>;
      try {
        data = JSON.parse(payload.toString());
      } catch {
        return;
      }

      // Use requestAnimationFrame to batch DOM updates (mirrors sporty-clone pattern)
      requestAnimationFrame(() => {
        if (topic.endsWith("/betstop")) {
          onBetStop?.(data as unknown as BetStopPayload);
        } else if ("homeScore" in data) {
          onScoreUpdate?.(data as unknown as ScoreUpdatePayload);
        } else {
          onOddsChange?.(data as unknown as OddsChangePayload);
        }
      });
    });

    client.on("error", (err: Error) => {
      if (process.env.NODE_ENV === "development") console.warn("[MQTT]", err.message);
    });

    return () => {
      client.end(true);
      clientRef.current = null;
      subscriptionsRef.current.clear();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { subscribe, unsubscribe, subscribeToMatch, unsubscribeFromMatch };
}
