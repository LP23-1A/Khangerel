import axios from 'axios';
import { useState, useEffect } from 'react';

// const data = [
//     {
//         url: 'https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
//         btn: 'Technology',
//         desc: 'The Impact of Technology on the Workplace: How Technology is Changing'
//     },
// ]
const api = "https://dev.to/api/articles?username=gereltuyamz"

const Trending = () => {
    const [ data, setData ] = useState([]);
    const getData = async () => {
        let res = await axios.get(api);
        setData(res.data)
    } 
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="flex justify-between">
            {
                data.map((props) => {
                    return (
                        <div className="w-[300px] h-80 p-4 rounded-xl text-white flex items-end bg-cover bg-[url(https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)]">
                            <div className="flex flex-col gap-4">
                                <button className="w-fit p-1 px-2 rounded-lg text-sm bg-[#4B6BFB]">{props.btn}</button>
                                <h1 className="text-xl">{props.desc}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Trending