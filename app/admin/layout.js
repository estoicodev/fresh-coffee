import Image from "next/image"

export const metadata = {
  title: 'Admin',
  description: 'Admin menu for Fresh Coffee',
}

export default function AdminLayout({ children }) {
  return (
    <>
      <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5 px-16 md:h-screen">
        <Image
            width={300}
            height={100}
            src="/assets/img/logo.svg"
            alt="logo"
            className="w-auto h-auto max-w-[280px] mx-auto"
            priority
        />
      </aside>

      <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 md:h-screen overflow-y-auto">
        {children}
      </main>

    </>
  );
}