import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const cookieStore = await cookies();
  
  // Clear the auth_token cookie by setting it with maxAge 0 or past expiration
  cookieStore.delete('auth_token');

  return NextResponse.json({ success: true });
}
