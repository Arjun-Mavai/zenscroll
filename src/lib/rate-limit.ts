import { NextResponse } from "next/server";

const rateLimitMap = new Map();

interface RateLimitConfig {
  limit: number; // Max requests
  windowMs: number; // Time window in milliseconds
}

export function rateLimit(ip: string, config: RateLimitConfig) {
  const now = Date.now();
  const windowStart = now - config.windowMs;

  const requestTimestamps = rateLimitMap.get(ip) || [];
  const requestsInWindow = requestTimestamps.filter((timestamp: number) => timestamp > windowStart);

  if (requestsInWindow.length >= config.limit) {
    return true; // Rate limited
  }

  requestTimestamps.push(now);
  rateLimitMap.set(ip, requestTimestamps);
  
  // Cleanup old entries
  if (rateLimitMap.size > 10000) {
      rateLimitMap.clear(); // Simple GC
  }
  
  return false; // Allowed
}
