import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, description, remarks } = body;

    const PAYMONGO_API_KEY = process.env.PAYMONGO_SECRET_KEY;

    // Request payload for PayMongo
    const payload = {
      data: {
        attributes: {
          amount, // Amount in centavos (e.g., 10000 = 100 PHP)
          currency: "PHP",
          description,
          remarks,
        },
      },
    };

    // API request to PayMongo
    const response = await axios.post(
      "https://api.paymongo.com/v1/links",
      payload,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(PAYMONGO_API_KEY || "").toString("base64")}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Extract and return the checkout link
    const link = response.data.data.attributes.checkout_url;
    return NextResponse.json({ checkout_url: link });

  } catch (error: any) {
    console.error("Error creating payment link:", error.response?.data || error.message);
    return NextResponse.json(
      { error: "Failed to create payment link", details: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
