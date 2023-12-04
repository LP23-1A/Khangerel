import Trending from "@/components/Trending";
import BlogPost from "@/components/blogpost"
import Navbar from "@/components/navbar"


export default function Home() {
  return (
    <section className='max-w-screen-2xl mx-auto'>
      <Navbar />
      <Trending />
      <BlogPost />
    </section>
  )
}
