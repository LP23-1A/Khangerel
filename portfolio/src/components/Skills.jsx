import { Technology } from "./Technology"

const Skills = () => {
    return(
        <div className="content--body flex flex-col mx-auto max-w-screen-2xl px-[10px] text-gray-700 text-lg py-32 gap-5">
            <button className="btn flex mx-auto bg-zinc-300 py-1 px-5 rounded-2xl dark:bg-slate-500 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-400">Skills</button>
            <p className="desc mx-auto py-7 text-2xl max-md:px-4 dark:text-slate-300">The skills, tools and technologies I am really good at:</p>
            <div className="skill--icon flex flex-wrap gap-20 justify-between mx-0 max-sm:gap-12 max-sm:mx-10">
                <Technology/>
            </div>
        </div>
    )
}


export { Skills }