import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Query parameter required" }, { status: 400 });
  }

  // Mock search results
  const results = [
    {
      id: "1",
      name: query,
      verified: true,
      bankName: "Example Bank",
      accountNumber: "****1234",
    },
  ];

  return NextResponse.json({ results });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { businessName } = body;

  if (!businessName) {
    return NextResponse.json({ error: "Business name required" }, { status: 400 });
  }

  // Mock verification response
  return NextResponse.json({
    verified: true,
    businessName,
    bankDetails: {
      bankName: "Example Bank",
      accountNumber: "****1234",
      routingNumber: "****5678",
    },
  });
}
