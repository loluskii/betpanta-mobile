import axios from "axios";
import Cookies from "js-cookie";
import { getAuthHeaders } from "./signing";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

/** Attach signing headers + Bearer token on every request */
apiClient.interceptors.request.use((config) => {
  // AES/SHA-256 signing — SBE-Client-ID, SBE-API-KEY, SBE-API-SIGNATURE
  Object.assign(config.headers, getAuthHeaders());

  // Bearer token — stored in cookie (preferred) or localStorage fallback
  const token =
    Cookies.get("BP-TOKEN") ??
    (typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("betpanta-auth") ?? "{}")?.state?.token
      : null);

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

/** Auto-logout on 401 / 403, surface errors cleanly */
apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if ([401, 403].includes(err.response?.status) && typeof window !== "undefined") {
      Cookies.remove("BP-TOKEN");
      localStorage.removeItem("betpanta-auth");
      window.location.href = "/";
    }
    const message =
      err.response?.data?.message ?? err.response?.data ?? err.message ?? "Unknown error";
    return Promise.reject(new Error(String(message)));
  }
);

/** Separate unauthenticated client for public endpoints (no signing overhead) */
export const publicClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});
