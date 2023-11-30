import Sagarntr from "./sagarntr";


export default function About() {
    return(
        <div className="content--body flex flex-col max-w-screen-2xl px-[80px] mx-auto text-lg text-slate-500 gap-10 bg-neutral-100 py-20 max-md:px-0 dark:bg-slate-900">
            <button className="btn flex mx-auto bg-zinc-300 py-2 px-5 rounded-2xl dark:bg-slate-500 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-400">About me</button>
            <div className="body--sec flex justify-between max-md:flex-col max-md:gap-24 max-md:px-10">
                <div className="left max-md:mx-auto">
                    <div className="relative--abt relative bg-zinc-300 h-[450px] w-[360px] top-[50px] max-md:h-[430px] max-sm:h-[350px] max-sm:w-[250px] dark:bg-slate-600"><Sagarntr/></div>
                </div>
                <div className="right flex flex-col w-2/4 gap-4 max-md:w-full">
                    <h1 className="text-zinc-950 text-4xl dark:text-white">Curious about me? Here you have it:</h1>
                    <p className="dark:text-slate-200">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                    <p className="dark:text-slate-200">I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                    <p className="dark:text-slate-200">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                    <p className="dark:text-slate-200">When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                    <p className="dark:text-slate-200">Finally, some quick bits about me.</p>
                    <div className="wrap flex gap-10 dark:text-slate-200">
                        <ul>
                            <li>B.E. in Computer Engineering</li>
                            <li>Avid learner</li>
                        </ul>
                        <ul>
                            <li>Full time freelancer</li>
                            <li>Aspiring indie hacker</li>
                        </ul>
                    </div>
                    <p className="dark:text-slate-200">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                </div>
            </div>
        </div>
    )
}