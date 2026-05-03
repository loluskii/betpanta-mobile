const VERSION_KEY = "bp_app_version";
const VERSION_FILE = "/version.json";

/** Clear all localStorage except auth state, then wipe stores and service worker cache */
export function clearAppCache(): void {
  const keep = ["betpanta-auth"];
  Object.keys(localStorage)
    .filter((k) => !keep.includes(k))
    .forEach((k) => localStorage.removeItem(k));

  if ("caches" in window) {
    caches.keys().then((names) => names.forEach((n) => caches.delete(n)));
  }
}

/** Fetch /version.json and clear cache when a new version is detected */
export async function checkVersion(): Promise<boolean> {
  if (process.env.NODE_ENV === "development") return false;
  try {
    const res = await fetch(VERSION_FILE);
    const { version } = await res.json();
    const stored = localStorage.getItem(VERSION_KEY);
    if (!stored || stored !== version) {
      clearAppCache();
      localStorage.setItem(VERSION_KEY, version);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
