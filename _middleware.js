// api/_middleware.js
import { next } from '@vercel/edge';

export const config = {
  matcher: ['/(.*)'],
};

export default function middleware(req) {
  // Log semua request untuk debugging
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  
  // Add security headers
  const res = next();
  
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  return res;
}