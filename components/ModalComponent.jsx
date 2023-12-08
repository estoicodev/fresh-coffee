import useStore from "@/hooks/useStore"
import Image from "next/image"
import Modal from 'react-modal'
import { formatCurrency } from '@/helpers'
import { useEffect, useState } from "react"

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const ModalComponent = () => {
  const { product, show, closeModal, handleClickAddProduct, order } = useStore()
  const [quantity, setQuantity] = useState(1)
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    if(order?.some(p => p.id === product.id)) {
      const { quantity } = order.find(p => p.id === product.id)
      setQuantity(quantity)
      setEdit(true)
    } else {
      setEdit(false)
    }
  }, [product, order])

  return (
    <Modal
    isOpen={show}
    onRequestClose={closeModal}
    style={modalStyles}
  >
    <div className="max-h-screen overflow-y-auto px-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{edit ? "Edit": "Add"} Product</h2>
        <button
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          onClick={closeModal}
        >
          X
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-7">
        <div className="md:w-1/2">
          <Image
            className="w-full object-cover mx-auto rounded"
            src={`/assets/img/${product.image}.jpg`}
            alt={product.name}
            width={256}
            height={256}
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-xl font-black select-none">{product.name}</h3>
          <p className="text-2xl mt-4 text-amber-500 font-black select-none">{formatCurrency(product.price)}</p>
          <div
            className="flex flex-wrap gap-4 justify-center py-2 pt-3 mt-6"
          >
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-8 h-8 cursor-pointer"
                onClick={() => {
                  if (quantity === 1) return
                  setQuantity(quantity - 1)
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <p className="text-xl select-none">{quantity}</p>

              <svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-8 h-8 cursor-pointer"
                onClick={() => {
                  if (quantity === 5) return
                  setQuantity(quantity + 1)
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <button
              type="button"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded w-full uppercase select-none"
              onClick={() => {
                handleClickAddProduct({
                  ...product,
                  quantity
                })
              }}
            >
              {edit ? "Save changes" : "Add to Order"}              
            </button>
          </div>
        </div>
      </div>
    </div>
  </Modal>
)
}

export default ModalComponent
