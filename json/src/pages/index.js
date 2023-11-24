
import data from '../data/product.json'


export default function Home() {
  data.map((props) => {
    return(
      <div>
        <h1>{props.category}</h1>
        <p>{props.name}</p>
      </div>
    )
  })
  return (
    <div className='h-100 w-100 bg-white flex flex-col gap-5'>
      <input className='w-80 h-8 border-indigo-500/75' placeholder='Search...'></input>
      <div className='flex'>
        <input className='w-5 h-5 border-indigo-500/75'></input>
        <p>Only show products in stock</p>
        
      </div>
    </div>
  )
}
console.log(data);