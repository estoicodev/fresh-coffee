import useStore from '@/hooks/useStore'
import { usePathname } from 'next/navigation'

const steps = [
  {
    step: 1,
    name: 'Menú',
    url: '/',
  },
  {
    step: 2,
    name: 'Resume',
    url: '/resume',
  },
  {
    step: 3,
    name: 'Total',
    url: '/total',
  },
]

const styleProgressBar = {
  "/": 'w-[15%] md:w-[5%]',
  "/resume": 'w-[50%]',
  "/total": 'w-[100%]',
}

const Steps = () => {
  const pathname = usePathname()
  const { handleChangeStep, router } = useStore()

  return (
    <div className='md:h-[10vh] pt-10 md:pt-0 px-5 lg:px-12'>
      <div className="flex justify-between">
        {
          steps.map(step => (
            <button
              type='button'
              key={step.step}
              className="text-black font-bold text-2xl py-3 px-1 rounded"
              onClick={() => {
                router.push(step.url)
                handleChangeStep(step.step)
              }}
            >
              {step.name}
            </button>
          ))
        }
      </div>
      <div className='bg-gray-100'>
        <div className={`rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white ${styleProgressBar[pathname]}`}></div>
      </div>
    </div>
  )
}

export default Steps
