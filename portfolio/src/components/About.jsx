import Sagarntr from "./sagarntr";


export default function About() {
    return(
        <div className="content--body flex flex-col max-w-7xl mx-auto text-lg text-slate-500 gap-10 bg-neutral-100 py-20">
            <button className="btn flex mx-auto bg-zinc-300 py-2 px-5 rounded-2xl">About me</button>
            <div className="body--sec flex justify-between ">
                <div className="left">
                    <div className="relative--abt relative bg-zinc-300 h-[450px] w-[350px] top-[50px]"></div>
                    <Sagarntr/>
                </div>
                <div className="right flex flex-col w-2/4 gap-4">
                    <h1 className="text-zinc-950 text-4xl">Curious about me? Here you have it:</h1>
                    <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                    <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                    <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                    <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                    <p>Finally, some quick bits about me.</p>
                    <div className="wrap flex gap-10">
                        <ul>
                            <li>B.E. in Computer Engineering</li>
                            <li>Avid learner</li>
                        </ul>
                        <ul>
                            <li>Full time freelancer</li>
                            <li>Aspiring indie hacker</li>
                        </ul>
                    </div>
                    <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                </div>
            </div>
        </div>
    )
}