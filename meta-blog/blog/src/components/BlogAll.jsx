import axios from "axios"
import Blogpost from "@/components/Blogpost"
const api = "https://dev.to/api/articles"
import { useState, useEffect, useRef } from "react";

const BlogAll = () => {
    const [ data, setData ] = useState([]);
    const initData = useRef([])
    const getData = async () => {
        let res = await axios.get(api);
        initData.current = res.data;
        setData(res.data)
        setData((prev) => [...prev, ...res.data]);
    }
    useEffect(() => {
        getData(api);
        }, [])
    return (
        <div className="flex flex-col gap-9 my-[50px] max-w-screen-xl mx-auto">
            <h1 className="font-semibold text-2xl">All Blog Post</h1>
            <Blogpost />
        </div>
    )
}

export default BlogAll