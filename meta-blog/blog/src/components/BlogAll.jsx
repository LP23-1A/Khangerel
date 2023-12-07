import Blogpost from "@/components/Blogpost"


const BlogAll = () => {
    return (
        <div className="flex flex-col gap-7 my-[50px]">
            <h1 className="font-semibold text-2xl">All Blog Post</h1>
            <Blogpost />
        </div>
    )
}

export default BlogAll