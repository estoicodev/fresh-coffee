import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(req) {
  try {
    const orders = await prisma.order.findMany({
      where: {
        state: false,
      },
    })
    return NextResponse.json(orders)
  } catch (error) {
    return new NextResponse(error, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, total, order } = body
    const orderCreated = await prisma.order.create({
      data: {
        name,
        total,
        order,
      },
    })
    return NextResponse.json(orderCreated, { status: 201 })
  } catch (error) {
    console.error(error)
    return new NextResponse(error, { status: 500 })
  }
}
