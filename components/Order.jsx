import { formatCurrency } from "@/helpers"
import useStore from "@/hooks/useStore"
import axios from "axios"
import Image from "next/image"

const Order = ({ order }) => {
  const { id, name, order: items, total, number } = order
  const { notifySuccess, notifyError } = useStore()

  const completeOrder = async (id) => {
    try {
      await axios.post(`/api/orders/${id}`)
      notifySuccess('Order completed successfully!')
    } catch (error) {
      notifyError('Error completing order!')
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg p-10 space-y-5">
      <h3 className="text-2xl font-bold">Order: {number}</h3>
      <p className="text-lg font-bold">Client: {name}</p>
      <div>
        {items.map((item) => (
          <div key={item.id} className="flex flex-col ssm:flex-row py-3 border-b last-of-type:border-0 items-center">
            <div className="w-full ssm:w-32">
              <Image
                className="rounded mx-auto ssm:m-0"
                src={`/assets/img/${item.image}.jpg`}
                width={400}
                height={400}
                alt={item.name}
              />
            </div>
            <div className="py-5 ssm:px-5 space-y-2">
              <h4 className="text-xl text-amber-500 font-bold">{item.name}</h4>
              <p className="text-lg font-bold">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center sm:justify-between sm:items-center my-10 gap-y-5">
        <p className="font-black text-amber-500 text-3xl">
          Total: {formatCurrency(total)}
        </p>
        <button
          className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded"
          type="button"
          onClick={() => completeOrder(id)}
        >
          Complete order
        </button>
      </div>
    </div>
  )
}

export default Order
