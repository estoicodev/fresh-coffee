import MainContainer from "@/components/MainContainer"
import ResumeOrder from "@/components/ResumeOrder"


export const metadata = {
  title: "Resume",
  description: 'Resume of the order',
}

export default function Page() {
  return (
    <MainContainer>
      <h1 className="text-2xl font-black">
        Resume
      </h1>
      <p className="text-lg mt-4 mb-8">Check your order</p>

      <ResumeOrder />
    </MainContainer>
  )
}