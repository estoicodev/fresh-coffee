import ModalComponent from "@/components/ModalComponent"
import SidebarMenu from "@/components/SidebarMenu"
import Steps from "@/components/Steps"
import useStore from "@/hooks/useStore"

const ClientLayout = ({ children }) => {
  const { show } = useStore()

  return (
    <>
      <aside className="md:w-1/3 xl:w-1/4 2xl:w-1/5 md:h-screen overflow-y-scroll">
        <SidebarMenu />
      </aside>

      <div className="md:w-2/3 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-auto">
        <Steps />
        {children}
      </div>
      
      {show && <ModalComponent /> }
      
    </>
  )
}

export default ClientLayout
