"use client"
import useStore from "@/hooks/useStore"
import Image from "next/image"
import Category from "./Category"

const SidebarMenu = () => {
  const { categories } = useStore()
  return (
    <div className="pt-5">
      <Image
        src="/assets/img/logo.svg"
        width={150} height={150}
        alt="Fresh Coffee Logo"
        priority={true}
        className="mx-auto"
      />
      <div className="mt-7">
        {
          categories.map(category => (
            <Category key={category.id} category={category} />
          ))
        }
      </div>
    </div>
  )
}

export default SidebarMenu