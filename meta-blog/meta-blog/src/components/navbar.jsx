import Meta from "../../public/Logo.svg"

const Navbar = () => {
    return (
        <div className="flex justify-around">
            <img src={Meta.src} alt="" />
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <input type="" />
        </div>
    )
}

export default Navbar