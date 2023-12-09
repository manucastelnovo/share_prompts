import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  
  const post = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 1,
      name: "Manu C",
    },
  ];
  return new Response(JSON.stringify(post));
}
