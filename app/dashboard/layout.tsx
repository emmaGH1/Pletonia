import Navbar from "@/components/dashboard/Navbar"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: 'Dashboard | Pletonia',
  description: 'Track your job applications seamlessly with pletonia',
}

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