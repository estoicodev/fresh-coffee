"use client"
import Loading from '@/components/Loading'
import MainContainer from '@/components/MainContainer'
import Order from '@/components/Order'
import axios from 'axios'
import useSWR from 'swr'

export default function AdminPage() {
  const path = '/api/orders'
  const fetcher = () => axios(path).then(res => res.data)
  const { data, error, isLoading } = useSWR(path, fetcher, { refreshInterval: 100 })

  return (
    <>
    <MainContainer>
      <h1 className="text-2xl font-black">Administration Panel</h1>
      <p className="text-lg mt-4 mb-8">Manage your orders</p>
      {isLoading
        ? (
          <div className="flex justify-center items-center mt-8">
            <Loading />
          </div>
          )
        : data && data.length
            ? data.map((order, index) => (
              <Order key={order.id} order={{...order, number: index + 1}} />
            ))
            : <p className='text-center text-2xl font-bold italic mt-8'>No orders yet...</p>
      }
      {error != undefined &&
        <p className="text-red-500 text-center text-xl font-bold italic mt-8">
          An error occurred with the orders...
        </p>
      }
    </MainContainer>
    </>
  )
}
