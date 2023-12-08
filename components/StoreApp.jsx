"use client"
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { usePathname } from 'next/navigation'
import ClientLayout from '@/layouts/ClientLayout'

Modal.setAppElement('#root')

const StoreApp = ({ children }) => {
  const pathname = usePathname()

  return (
    <div className='md:flex' id="root">

      {pathname != "/admin"
        ? <ClientLayout>
          {children}
        </ClientLayout>
        : children
      }

      <ToastContainer />

    </div>
  )
}

export default StoreApp
