"use client"
import { formatCurrency } from "@/helpers"
import useStore from "@/hooks/useStore"
import { useCallback } from "react"

const TotalOrder = () => {
  const { order, name, setName, total, addOrder } = useStore()

  const checkOrder = useCallback(() => {
    return order.length === 0 || name.length === 0
  }, [order, name])

  return (
    <form className="w-full md:w-1/2 lg:w-1/3" onSubmit={(e) => addOrder(e)}>
      <label htmlFor="name" className="block text-xl text-slate-800 mb-2">
        Name
      </label>
      <input
        id="name"
        name="name"
        className="w-full text-lg px-3 py-2 bg-gray-100 mb-8 outline-amber-400"
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <p className="text-xl mb-6">Total to pay: {' '} <span className="text-2xl font-black">{formatCurrency(total)}</span></p>

      <input
        type="submit"
        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded w-full uppercase cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
        value="Confirm order"
        disabled={checkOrder()}
        />

      
    </form>
  )
}

export default TotalOrder
