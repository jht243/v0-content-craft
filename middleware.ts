import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // For preflight OPTIONS requests, respond with the necessary CORS headers.
  if (request.method === 'OPTIONS') {
    const response = new NextResponse(null, { status: 200 })
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    response.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, x-vercel-protection-bypass'
    )
    return response
  }

  // For other requests, let them pass through and add the CORS headers to the response.
  const response = NextResponse.next()
  response.headers.set('Access-Control-Allow-Origin', '*')

  return response
}

// Apply this middleware to all API routes.
export const config = {
  matcher: '/api/:path*',
}
