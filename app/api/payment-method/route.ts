import { NextResponse } from 'next/server';
import axios from 'axios';

const PAYMONGO_SECRET_KEY = process.env.PAYMONGO_SECRET_KEY || '';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('[payment-method] Request body:', body);

    const response = await axios.post(
      'https://api.paymongo.com/v1/payment_methods',
      {
        data: {
          attributes: {
            type: 'gcash',
          },
        },
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(PAYMONGO_SECRET_KEY).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('[payment-method] PayMongo response:', response.data);
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('[payment-method] Error:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Failed to create PaymentMethod' }, { status: 500 });
  }
}
