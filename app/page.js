"use client"
import Loading from "@/components/Loading"
import MainContainer from "@/components/MainContainer"
import Product from "@/components/Product"
import useStore from "@/hooks/useStore"

export default function Home() {
  const { currentCategory } = useStore()

  return (
    <>
      {Object.values(currentCategory).length === 0
        ? (
          <div className="flex justify-center items-center min-h-[90vh]">
            <Loading />
          </div>
        )
        : (
          <MainContainer>
            <h1 className="text-2xl font-black">{currentCategory?.name}</h1>
            <p className="text-lg mt-4 mb-8">Choose and customize your order</p>
      
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
              {
                currentCategory?.products?.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              }
            </div>
          </MainContainer>
        )
      }
    </>
  )
}
