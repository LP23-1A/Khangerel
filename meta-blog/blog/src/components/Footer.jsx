import Copy from "@/images/logocop"
import Social from "@/images/socialicon"

const Footer = () => {
    return (
        <div className="flex flex-col my-14 mt-10 w-full text-gray-600">
            <div className="flex justify-between my-5 w-5/6">
                <div className="flex flex-col gap-5 w-1/4">
                    <h1 className="text-black font-semibold">About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div>
                        <p>Email : info@jstemplate.net</p>
                        <p>Phone : 880 123 456 789</p>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <Social />
                </div>
            </div>
            <hr />
            <div className="flex justify-between my-5">
                <div className="flex gap-2">
                    <Copy />
                    <div>
                        <div className="flex text-black">
                            <h1>Meta</h1>
                            <h1 className="font-bold">Blog</h1>
                        </div>
                        <p>© All Rights Reserved.</p>
                    </div>
                </div>
                <div className="flex gap-7">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer