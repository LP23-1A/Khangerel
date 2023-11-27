import Theme from "./Theme"
import CloseIcon from "./CloseIcon"
import Logo from "./Logoicon"

const MobileMenu = (props) => {
    const closeHandler = () => {
        props.setIsOpen(false)
    }
    return (
    <div className="w-screen h-screen top-0 left-0 absolute bg-gray-400 flex justify-end">
        <div className="w-10/12  h-screen p-4 bg-white">
            <div className="flex justify-between">
                <Theme />
                <button onClick={closeHandler}>
                    <CloseIcon />
                </button>
            </div>
            <hr className="mt-4" />
            <ul className="list--items flex flex-col gap-7">
                <li>About</li>
                <li>Work</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </ul>
            <hr className="mt-4" />
            <div className="py-4">
                <div className="flex justify-between">
                    <p>Switch theme</p>
                    <button>
                        <Logo />
                    </button>
                </div>
                <button className="mt-4 w-full bg-black text-white px-4 py-1.5 rounded-lg font-medium">
                    Download CV
                </button>
            </div>
        </div>
    </div> 
    )
}

export default MobileMenu