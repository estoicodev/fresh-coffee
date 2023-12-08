import { prisma } from "@/lib/prisma"
import { categories } from "./data/categories"
import { products } from "./data/products"

const main = async () : Promise<void> => {
  try {
    await prisma.category.createMany({
      data: categories,
    })
    await prisma.product.createMany({
      data: products,
    })

  } catch (error) {
    console.error("ERROR: ", error)
  }
}

main()