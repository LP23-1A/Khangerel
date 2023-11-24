import Messege from "@/components/messege"
import Copy from "./copy"
import Phone from "./phone"
import Icon from "@/components/Icons"

const Footer = () => {
    return (
        <div className="footer flex flex-col mx-auto max-w-7xl gap-16 py-16 text-gray-700 text-2xl">
            <div className="foot--top flex flex-col">
                <button className="btn flex bg-zinc-300 py-1 px-5 rounded-2xl mx-auto">Get in touch</button>
                <p className="desc mx-auto py-7 w-3/6 text-center">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            </div>
            <div className="foot--mid flex flex-col mx-auto gap-5">
                <div className="gmail flex gap-5">
                    <Messege />
                    <h1>reachsagarshah@gmail.com</h1>
                    <Copy />
                </div>
                <div className="call flex gap-5 mx-auto">
                    <Phone />
                    <h1>+91 8980500565</h1>
                    <Copy />
                </div>
                <p className="p">You may also find me on these platforms!</p>
                <div><Icon /></div>
            </div>
            <div className="mx-auto">
                <p className="p">2023 | Designed and coded with ❤️️ by Sagar Shah</p>
            </div>
        </div>
    )
}

export default Footer