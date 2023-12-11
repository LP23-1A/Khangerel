import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'

const api = "https://dev.to/api/articles"

const Blog = () => {
    const [ data, setData ] = useState([]);
    const [ add, setAdd ] = useState(9);
    const initData = useRef([])
    const router = useRouter()
    const getData = async () => {
        let res = await axios.get(api);
        initData.current = res.data;
        setData(res.data)
        setData((prev) => [...prev, ...res.data]);
    }
    const filter = (name) => {
        setData(() => initData.current.filter((props) => props.tags === name))
    }
    const handler = () => {    
        setAdd((add) => add + 3) 
    }
    useEffect(() => {
        getData(api);
        }, [])
    return (
        <div className='flex flex-col gap-10'>
            <div className="flex flex-wrap justify-between gap-5 h-fit">
                {
                    data.slice(0, add).map((props) => {
                        let key = uuidv4()
                        return (
                            <div className="flex flex-col gap-7 w-[410px] h-[500px] rounded-xl p-4 border-2" key={key}>
                                <img className="bg-cover rounded-md h-full" src={props.social_image} alt="" />
                                <button className="w-fit p-1 px-2 rounded-lg bg-indigo-100 text-indigo-500">{props.tags}</button>
                                <h1 className="text-xl font-semibold">{props.description}</h1>
                                <p className="text-gray-400">{props.published_timestamp}</p>
                            </div>
                        )
                    })
                }
            </div>
            <button className="p-3 border-2 px-4 rounded-lg flex mx-auto mt-[40px] text-gray-500" onClick={handler}>Load More</button>
        </div>
    )
}

export default Blog