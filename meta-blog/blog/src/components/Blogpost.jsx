import axios from 'axios';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'

const api = "https://dev.to/api/articles?username=gereltuyamz"

const Blog = () => {
    const [ data, setData ] = useState([]);
    const getData = async () => {
        let res = await axios.get(api);
        setData(res.data)
        console.log(res);
    }
    useEffect(() => {
        getData();
        }, [])
    return (
        <div className="flex flex-wrap justify-between gap-5">
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
    )
}

export default Blog