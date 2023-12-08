import MainContainer from "@/components/MainContainer"
import TotalOrder from "@/components/TotalOrder"

export const metadata = {
  title: "Total",
  description: 'Total of the order',
}

export default function Page() {
  return (
    <MainContainer>
      <h1 className="text-2xl font-black">
        Total and Confirm your order
      </h1>
      <p className="text-lg mt-4 mb-8">Confirm your order below</p>

      <TotalOrder />

    </MainContainer>
  )
}