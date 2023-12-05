import Meta from "../../public/Logo.svg"

const Navbar = () => {
    return (
        <div className="flex justify-between my-6">
            <img src={Meta.src} alt="" />
            <ul className="flex gap-7 text-base text-gray-600">
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <input type="search" id="" placeholder="  search" className="bg-gray-100 rounded-md"/>
        </div>
    )
}

export default Navbar