import { NextResponse } from 'next/server';
import axios from 'axios';

const PAYMONGO_SECRET_KEY = process.env.PAYMONGO_SECRET_KEY || '';

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the request body
    console.log('[create-payment-intent] Request body:', body);

    const response = await axios.post(
      'https://api.paymongo.com/v1/payment_intents',
      {
        data: {
          attributes: {
            amount: body.amount,
            currency: 'PHP',
            payment_method_allowed: ['gcash'],
            return_url: 'https://your-app.com/success',
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

    console.log('[create-payment-intent] PayMongo response:', response.data);
    return NextResponse.json(response.data); // Send JSON response
  } catch (error: any) {
    console.error('[create-payment-intent] Error:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Failed to create PaymentIntent' }, { status: 500 });
  }
}
