import Navbar from "@/components/shared/Navbar"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <main className="flex flex-col lg:flex-row">
        <Navbar />

        <section>
           {children}
        </section>  
      </main>
    </>
  )
}