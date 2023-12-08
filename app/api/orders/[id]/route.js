import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req, { params }) {
  try {
    const orderUpdated = await prisma.order.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        state: true,
      },
    })
    return NextResponse.json(orderUpdated)
  } catch (error) {
    console.error(error)
    return new NextResponse(error, { status: 500 })
  }
}