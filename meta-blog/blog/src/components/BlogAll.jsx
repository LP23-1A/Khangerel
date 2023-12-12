import Blogpost from "@/components/Blogpost"
import { useRouter } from "next/router";

const BlogAll = () => {
    const router = useRouter()
    const reset = () => {
        setData(initData.current)
    };
    const view = () => {
        router.push('/blog')
    };
    const filter = () => {
        console.log('hello world');
    }
    return (
        <div className="flex flex-col gap-9 my-[50px] max-w-screen-xl mx-auto">
            <h1 className="font-semibold text-2xl">All Blog Post</h1>
            <div className="flex justify-between font-semibold">
                <ul className='flex gap-5'>
                    <button className='hover:text-[#D4A373]' onClick={reset}><li>All</li></button>
                    <button className='hover:text-[#D4A373]' onClick={() => filter('webdev')}><li>Webdev</li></button>
                    <button className='hover:text-[#D4A373]' onClick={() => filter('programming')}><li>Programming</li></button>
                    <button className='hover:text-[#D4A373]' onClick={() => filter('nextjs')}><li>Next.js</li></button>
                    <button className='hover:text-[#D4A373]' onClick={() => filter('discuss')}><li>Discuss</li></button>
                </ul>
                <button onClick={view}>View All</button>
            </div>
            <Blogpost />
        </div>
    )
}

export default BlogAll