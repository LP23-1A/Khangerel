const { default: Navicon } = require("@/images/navicon")

const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-5">
            <Navicon />
            <ul className="flex gap-9">
                <li className="text-gray-600">Home</li>
                <li className="text-gray-600">Blog</li>
                <li className="text-gray-600">Contact</li>
            </ul>
            <input type="search" name="" id="" placeholder="   search" className="border-2 rounded-md bg-gray-100 p-1"/>
        </div>
    )
}

export default Navbar