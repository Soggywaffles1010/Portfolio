import { NextResponse } from 'next/server';
import axios from 'axios';

const PAYMONGO_SECRET_KEY = process.env.PAYMONGO_SECRET_KEY || '';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('[attach-payment] Request body:', body);

    const { intentId, paymentMethodId, clientKey } = body;

    if (!intentId || !paymentMethodId) {
      console.error('[attach-payment] Missing parameters:', { intentId, paymentMethodId });
      return NextResponse.json({ error: 'Missing PaymentIntent ID or PaymentMethod ID' }, { status: 400 });
    }

    // Provide the required `return_url` parameter
    const returnUrl = 'https://your-app.com/success'; // Replace with your actual success URL

    const response = await axios.post(
      `https://api.paymongo.com/v1/payment_intents/${intentId}/attach`,
      {
        data: {
          attributes: {
            payment_method: paymentMethodId,
            return_url: returnUrl, // This is mandatory for GCash
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

    console.log('[attach-payment] PayMongo response:', response.data);
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('[attach-payment] Error:', error.response?.data || error.message);
    return NextResponse.json(
      {
        error: error.response?.data || 'Failed to attach PaymentMethod',
      },
      { status: 500 }
    );
  }
}
