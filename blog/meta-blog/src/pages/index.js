import Trending from "@/components/trending"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className='mx-auto max-w-screen-2xl'>
      <Trending />
    </section>
  )
}
