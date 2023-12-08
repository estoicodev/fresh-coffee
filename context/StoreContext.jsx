"use client"
import { createContext } from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState({})
  const [product, setProduct] = useState({})
  const [order, setOrder] = useState([])
  const [show, setShow] = useState(false)
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [total, setTotal] = useState(0)

  const router = useRouter()

  useEffect(() => {
    const fetchCategories = async () => {
    const { data } = await axios.get("/api/categories")
    setCategories(data)
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    if (categories.length > 0) {
      setCurrentCategory(categories[0])
    }
  }, [categories])

  useEffect(() => {
    const total = order.reduce((acc, val) => acc + val.price * val.quantity, 0)
    setTotal(total)
  }, [order])


  const handleClickCategory = (id) => {
    const category = categories.find(category => category.id === id)
    router.push('/')
    setCurrentCategory(category)
  }

  const handleClickProduct = (product) => {
    setProduct(product)
    setShow(true)
  }

  const openModal = () => {
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
  }

  const notifySuccess = (message) => toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notifyError = (message) => toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const handleClickAddProduct = ({categoryId, ...product}) => {
    const orderFindIndex = order.findIndex(p => p.id === product.id)
    if (orderFindIndex != -1) {
      const newOrder = [...order]
      newOrder[orderFindIndex].quantity = product.quantity
      setOrder(newOrder)
      closeModal()
      notifySuccess('Edited product successfully!')
    } else {
      setOrder([
        ...order,
        product,
      ])
      closeModal()
      notifySuccess('Added to order successfully!')
    }
  }

  const handleChangeStep = (step) => {
    setStep(step)
  }

  const handleEditQuantity = (id) => {
    const product = order.find(p => p.id === id)
    handleClickProduct(product)
  }

  const handleDeleteProduct = (id) => {
    const newOrder = order.filter(p => p.id != id)
    setOrder(newOrder)
    notifySuccess('Deleted product successfully!')
  }

  const resetApp = () => {
    setTimeout(() => {
      router.push('/')
      setCurrentCategory(categories[0])
      setOrder([])
      setName("")
      setStep(1)
      setTotal(0)
    }, 3000)
  }

  const addOrder = async (e) => {
    e.preventDefault()

    try {
      await axios.post("/api/orders", {
        name,
        total,
        order,
      })
      notifySuccess('Order confirmed successfully!')
      resetApp()
    } catch (error) {
      console.error("Error adding order", error)
    }
  }

  return (
    <StoreContext.Provider value={{
      router,
      categories,
      currentCategory,
      handleClickCategory,
      product,
      show,
      order,
      handleClickProduct,
      openModal,
      closeModal,
      handleClickAddProduct,
      step,
      handleChangeStep,
      handleEditQuantity,
      handleDeleteProduct,
      name,
      setName,
      total,
      addOrder,
      notifySuccess,
      notifyError,
    }}>
      {children}
    </StoreContext.Provider>
  )
}
