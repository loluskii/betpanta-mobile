/** Page-level performance tracking */
export const performanceMetrics = {
  startTime: 0,
  metrics: {} as Record<string, { start: number; end: number | null; duration: number | null }>,

  start() {
    this.startTime = performance.now();
    this.metrics = {};
  },

  mark(name: string) {
    if (!this.metrics[name]) {
      this.metrics[name] = { start: performance.now(), end: null, duration: null };
    } else {
      this.metrics[name].end = performance.now();
      this.metrics[name].duration = this.metrics[name].end! - this.metrics[name].start;
    }
  },

  log() {
    if (process.env.NODE_ENV !== "development") return;
    const total = performance.now() - this.startTime;
    console.group("Performance Metrics");
    console.log("Total:", total.toFixed(2), "ms");
    console.table(
      Object.fromEntries(
        Object.entries(this.metrics)
          .filter(([, m]) => m.duration != null)
          .map(([name, m]) => [name, { duration: m.duration!.toFixed(2) + "ms", pct: ((m.duration! / total) * 100).toFixed(1) + "%" }])
      )
    );
    console.groupEnd();
  },
};

/** Per-API-call timing */
export const apiPerformance = {
  metrics: {} as Record<string, { start: number; end: number | null; duration: number | null }>,

  start(name: string) {
    this.metrics[name] = { start: performance.now(), end: null, duration: null };
  },

  end(name: string) {
    if (this.metrics[name]) {
      this.metrics[name].end = performance.now();
      this.metrics[name].duration = this.metrics[name].end! - this.metrics[name].start;
    }
  },

  log() {
    if (process.env.NODE_ENV !== "development") return;
    console.group("API Performance");
    console.table(
      Object.fromEntries(
        Object.entries(this.metrics).map(([k, m]) => [k, m.duration != null ? m.duration.toFixed(2) + "ms" : "pending"])
      )
    );
    console.groupEnd();
  },
};
