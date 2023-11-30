let data = [
    {
        h1: "Fiskil",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        tool: "React",
        tool1: "Next.js",
        tool2: "Typescript",
        tool3: "Nest.js",
        tool4: "PostgreSQL",
        tool5: "Tailwindcss",
        tool6: "Figma",
        tool7: "Cypress",
        tool8: "Storybook",
        tool9: "Git",
    }
]

const Maping = () => {
    return (
        <div className="flex flex-wrap gap-3">
            {
                data.map((props) => {
                    return (
                        <div className="flex flex-wrap gap-3">
                            <h1 className="dark:text-white">{props.h1}</h1>
                            <p className="dark:text-slate-300">{props.p}</p>
                            <button className="btn-1 bg-zinc-300 py-1 px-5 rounded-2xl gap-5 w-fit dark:bg-slate-600 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-500">{props.tool}</button>
                            <button className="btn-1 bg-zinc-300 py-1 px-5 rounded-2xl gap-5 w-fit dark:bg-slate-600 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-500">{props.tool1}</button>
                            <button className="btn-1 bg-zinc-300 py-1 px-5 rounded-2xl gap-5 w-fit dark:bg-slate-600 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-500">{props.tool2}</button>
                            <button className="btn-1 bg-zinc-300 py-1 px-5 rounded-2xl gap-5 w-fit dark:bg-slate-600 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-500">{props.tool3}</button>
                            <button className="btn-1 bg-zinc-300 py-1 px-5 rounded-2xl gap-5 w-fit dark:bg-slate-600 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-500">{props.tool4}</button>
                            <button className="btn-1 bg-zinc-300 py-1 px-5 rounded-2xl gap-5 w-fit dark:bg-slate-600 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-500">{props.tool5}</button>
                            <button className="btn-1 bg-zinc-300 py-1 px-5 rounded-2xl gap-5 w-fit dark:bg-slate-600 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-500">{props.tool6}</button>
                            <button className="btn-1 bg-zinc-300 py-1 px-5 rounded-2xl gap-5 w-fit dark:bg-slate-600 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-500">{props.tool7}</button>
                            <button className="btn-1 bg-zinc-300 py-1 px-5 rounded-2xl gap-5 w-fit dark:bg-slate-600 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-500">{props.tool8}</button>
                            <button className="btn-1 bg-zinc-300 py-1 px-5 rounded-2xl gap-5 w-fit dark:bg-slate-600 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-500">{props.tool9}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Maping