/**
 * AES-128 / SHA-256 request signing — mirrors the sporty-clone fetch-wrapper pattern.
 * Every outbound API request gets three headers:
 *   SBE-Client-ID       → operator ID
 *   SBE-API-KEY         → SHA-256(clientId:appKey) hex
 *   SBE-API-SIGNATURE   → AES-CBC(timestamp, key, iv) — ivHex + ciphertextHex
 */
import CryptoJS from "crypto-js";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID ?? "1";
const APP_KEY = process.env.NEXT_PUBLIC_APP_KEY ?? "BETPANTA";

export function getClientId(): string {
  return CLIENT_ID;
}

export function generateApiKey(): string {
  return CryptoJS.enc.Hex.stringify(CryptoJS.SHA256(`${CLIENT_ID}:${APP_KEY}`));
}

export function generateSignature(): string {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const iv = CryptoJS.lib.WordArray.random(16);
  const key = CryptoJS.enc.Hex.parse(generateApiKey());

  const encrypted = CryptoJS.AES.encrypt(timestamp, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return iv.toString(CryptoJS.enc.Hex) + encrypted.ciphertext.toString(CryptoJS.enc.Hex);
}

export function getAuthHeaders(): Record<string, string> {
  return {
    "SBE-Client-ID": CLIENT_ID,
    "SBE-API-KEY": generateApiKey(),
    "SBE-API-SIGNATURE": generateSignature(),
  };
}
