import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";

export async function GET(req) {
  try {
    const categories = await prisma.category.findMany({
      include: {
        products: true,
      },
    })
    return NextResponse.json(categories)
  } catch (error) {
    return new NextResponse(error, { status: 500 })
  }
}
