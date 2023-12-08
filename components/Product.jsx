import { formatCurrency } from "@/helpers"
import useStore from "@/hooks/useStore"
import Image from "next/image"

const Product = ({ product }) => {
  const { handleClickProduct } = useStore()

  return (
    <div key={product.id} className="border pb-3 rounded overflow-hidden flex flex-col">
      <Image
        className="w-full mx-auto"
        src={`/assets/img/${product.image}.jpg`}
        alt={product.name}
        width={256}
        height={256}
      />
      <div className="flex flex-col p-5">
        <h3 className="text-xl font-black">{product.name}</h3>
        <p className="text-2xl mt-4 text-amber-500 font-black">{formatCurrency(product.price)}</p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center p-5 pt-3">
        <button
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded w-full uppercase"
          onClick={() => handleClickProduct(product)}
        >
          View Details
        </button>
      </div>
    </div>
  )
}

export default Product
