import Navbar from "@/components/dashboard/Navbar"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <main className="flex flex-col lg:flex-row">
        <Navbar />
        {children}
      </main>
      
    </>
  )
}