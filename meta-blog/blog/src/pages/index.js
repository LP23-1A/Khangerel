import BlogAll from '@/components/BlogAll'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TrendingAll from "@/components/TrendingAll"
import { Inter } from 'next/font/google'
// import Error from '../components/Error'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className='max-w-screen-xl mx-auto'>
      <Navbar />
      <TrendingAll />
      <BlogAll />
      <Footer />
      {/* <Error /> */}
      <Contact />
    </section>
  )
}
