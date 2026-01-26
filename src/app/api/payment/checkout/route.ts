import { NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/lemonsqueezy';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get('auth_token')?.value;

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // In a real app, fetch user email from DB using userId
    // For now, we will assume the client sends it or we fetch it.
    // Let's rely on client for this demo speed, BUT verification is key in prod.
    const { email } = await request.json();

    const checkoutUrl = await createCheckoutSession(userId, email || "customer@example.com");

    if (!checkoutUrl) {
         return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 });
    }

    return NextResponse.json({ url: checkoutUrl });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
