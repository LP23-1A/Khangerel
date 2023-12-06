import Search from "@/constant/searchicon"

const { default: Navicon } = require("@/images/navicon")

const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-5">
            <Navicon />
            <ul className="flex gap-9">
                <button><li className="text-gray-600">Home</li></button>
                <button><li className="text-gray-600">Blog</li></button>
                <button><li className="text-gray-600">Contact</li></button>
            </ul>
            <div className="flex">
                <input type="search" name="" id="" placeholder="   search" className="border-2 rounded-md bg-gray-100 p-1"/>
            </div>
        </div>
    )
}

export default Navbar