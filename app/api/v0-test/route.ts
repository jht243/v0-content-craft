import { NextResponse } from 'next/server';

export async function POST() {
  try {
    if (!process.env.V0_API_KEY) {
      return NextResponse.json({ error: "V0_API_KEY is not set on the server." }, { status: 500 });
    }

            const v0Response = await fetch('https://api.v0.dev/v1', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.V0_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: "A simple heading saying 'Hello World'",
        framework: "next",
        language: "tsx"
      })
    });

    if (!v0Response.ok) {
      const errorText = await v0Response.text();
      return NextResponse.json(
        { 
          error: "v0 API returned an error.",
          status: v0Response.status,
          details: errorText 
        }, 
        { status: 500 }
      );
    }
    
    const data = await v0Response.json();
    return NextResponse.json(data);

  } catch (error: any) {
    return NextResponse.json({ error: "An unexpected error occurred.", details: error.message }, { status: 500 });
  }
}
