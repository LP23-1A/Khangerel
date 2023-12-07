import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'

const api = "https://dev.to/api/articles?username=gereltuyamz"

const Blog = () => {
    const [ data, setData ] = useState([]);
    const valueRef = useRef('')
    const initData = useRef([])
    const router = useRouter()
    const getData = async () => {
        let res = await axios.get(api);
        initData.current = res.data;
        setData(res.data)
    }
    const reset = () => {
        setData(initData.current)
    }
    const filter = (name) => {
        setData(() => initData.current.filter((props) => props.tags === name))
    }
    const handler = () => {    
        getData(api) 
        console.log(api);
    }
    useEffect(() => {
        getData(api);
        }, [])
    return (
        <div className='flex flex-col gap-11'>
            <div className="flex justify-between font-semibold">
                <ul className='flex gap-5'>
                    <button className='hover:text-[#D4A373]' onClick={reset}><li>All</li></button>
                    <button className='hover:text-[#D4A373]' onClick={() => filter('webdev')}><li>Webdev</li></button>
                    <button className='hover:text-[#D4A373]' onClick={() => filter('programming')}><li>Programming</li></button>
                    <button className='hover:text-[#D4A373]' onClick={() => filter('nextjs')}><li>Next.js</li></button>
                    <button className='hover:text-[#D4A373]' onClick={() => filter('fashion')}><li>Fashion</li></button>
                </ul>
                <button>View All</button>
            </div>
            <div className="flex flex-wrap justify-between gap-5 h-fit">
                {
                    data.map((props) => {
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