"use client"
import { formatCurrency } from "@/helpers"
import useStore from "@/hooks/useStore"
import Image from "next/image"

const Resume = () => {
  const { order, handleEditQuantity, handleDeleteProduct } = useStore()
  return (
    <>
      {
        order.length === 0
        ? (
          <div className="flex justify-center items-center">
            <h1 className="text-xl font-bold">No products added...</h1>
          </div>
        )
        : (
          <div className="flex flex-col items-center">
            {
              order.map(({ id, name, price, quantity, image }) => (
                <div className="w-full flex flex-col sm:flex-row items-center pb-10 sm:pt-5 border-b border-gray-200" key={id}>
                  <div className="w-full max-w-2xl mx-auto flex flex-col gap-y-5 gap-x-4 sm:flex-row items-center">
                    <Image
                      src={`/assets/img/${image}.jpg`}
                      alt={name}
                      className="w-full h-full rounded sm:w-40 sm:h-40 sm:rounded-full"
                      width={80}
                      height={80}
                    />
                    <div className="flex flex-col ml-2 gap-y-2 flex-1">
                      <h2 className="text-xl font-bold">{name}</h2>
                      <h3 className="text-lg font-bold text-gray-700"><span className="text-gray-800 font-black">Quantity:</span> {quantity}</h3>
                      <h3 className="text-lg font-bold text-gray-700"><span className="text-gray-800 font-black">Total:</span> {formatCurrency(price)}</h3>
                      <h3 className="text-lg font-black text-gray-700"><span className="text-gray-900">Subtotal:</span> {formatCurrency(price * quantity)}</h3>
                    </div>
                    <div className="flex md:flex-col lg:flex-row gap-8">
                      <button
                        className="flex gap-x-2 items-center bg-sky-700 px-5 py-2 text-white rounded-md font-bold text-lg shadow-md w-full hover:bg-sky-800"
                        onClick={() => handleEditQuantity(id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                        Edit
                      </button>
                      <button
                        className="flex gap-x-2 items-center bg-red-500 px-5 py-2 text-white rounded-md font-bold text-lg shadow-md w-full hover:bg-red-600"
                        onClick={() => handleDeleteProduct(id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
      
    </>
  )
}

export default Resume
