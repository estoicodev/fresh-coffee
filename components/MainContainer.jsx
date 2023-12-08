const MainContainer = ({ children }) => {
  return (
    <main className="flex md:min-h-[90vh] flex-col px-5 py-10 lg:px-12">
      {children}
    </main>
    )
}

export default MainContainer
