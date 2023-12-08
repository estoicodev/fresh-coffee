"use client"
import useStore from '@/hooks/useStore'
import Image from 'next/image'

const Category = ({ category }) => {
  const { id, name, icon} = category
  const { handleClickCategory, currentCategory } = useStore()

  return (
    <button
      className={`${currentCategory?.id === id ? "bg-amber-400" : ""} w-full flex items-center border-b gap-4 p-5 hover:bg-amber-400 cursor-pointer`}
      type="button"
      onClick={() => handleClickCategory(id)}
    >
      <Image
        src={`/assets/img/icono_${icon}.svg`}
        width={60} height={60}
        alt={name}
        priority={true}
      />
      <div
        className='text-lg md:text-xl font-bold'
      >
        {category.name}
      </div>
    </button>
)
}

export default Category
