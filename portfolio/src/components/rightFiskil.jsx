let data = [
    {
        h1: "Fiskil",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
    },
    {
        tool: "React"
    },
    {
        tool: "Next.js"
    },
    {
        tool: "Typescript"
    },
    {
        tool: "Nest.js"
    },
    {
        tool: "PostgreSQL"
    },
    {
        tool: "Tailwindcss"
    },
    {
        tool: "Figma"
    },
    {
        tool: "Cypress"
    },
    {
        tool: "Storybook"
    },
    {
        tool: "Git"
    },
]

const Maping = () => {
    return (
        <div className="flex flex-wrap gap-3">
            {
                data.map((props) => {
                    return (
                        <div className="flex flex-wrap gap-2">
                            <h1>{props.h1}</h1>
                            <p>{props.p}</p>
                            <button className="btn-1 bg-zinc-300 py-1 px-4 rounded-2xl gap-5 w-fit">{props.tool}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Maping