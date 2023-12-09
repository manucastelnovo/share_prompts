import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  console.log('entre en el get a la mierda')
  const users = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 1,
      name: "Manu C",
    },
  ];
  return new Response(JSON.stringify(users));
}
