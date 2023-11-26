import { Technology } from "./Technology"

const Skills = () => {
    return(
        <div className="content--body flex flex-col mx-auto max-w-7xl text-gray-700 text-lg py-32 gap-5">
            <button className="btn flex mx-auto bg-zinc-300 py-1 px-5 rounded-2xl">Skills</button>
            <p className="desc mx-auto py-7 text-2xl">The skills, tools and technologies I am really good at:</p>
            <div className="skill--icon flex flex-wrap gap-16 justify-between mx-16">
                <Technology/>
            </div>
        </div>
    )
}


export { Skills }