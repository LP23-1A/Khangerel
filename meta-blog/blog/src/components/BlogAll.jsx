import Blogpost from "@/components/Blogpost"
import { Type } from "@/constant/blogType"
import { v4 as uuidv4 } from "uuid"


const BlogAll = () => {
    return (
        <div className="flex flex-col gap-7 my-[50px]">
            <h1 className="font-semibold text-2xl">All Blog Post</h1>
            <div className="flex gap-5 justify-between font-semibold">
                <div className="flex gap-5">
                    {
                        Type.map((props) => {
                            let key = uuidv4()
                            return (
                                <button key={key}><li className="list-none hover:text-[#D4A373]">{props}</li></button>
                            )
                        })
                    }
                </div>
                <button>View All</button>
            </div>
            <Blogpost />
            <button className="p-3 border-2 px-4 rounded-lg flex mx-auto mt-[40px] text-gray-500">Load More</button>
        </div>
    )
}

export default BlogAll