import Expdata from "@/components/expdata"

const Experience = () => {
    return(
        <div className="content--body flex flex-col mx-auto max-w-screen-2xl px-[80px] bg-neutral-100 text-2xl py-36 max-md:px-[5px]">
            <button className="btn flex bg-zinc-300 py-1 px-5 rounded-2xl mx-auto">Experience</button>
            <p className="desc mx-auto py-7 max-md:px-5">Here is a quick summary of my most recent experiences:</p>
            <div className="content--body flex column">
                <div className="upwork flex flex-col gap-16 px-20 w-full">
                    <Expdata />
                {/* {data.map((props) => {
                    return(
                        <div className="upwork-details flex justify-between mx-auto w-full bg-white rounded-xl p-5 drop-shadow-xl max-md:flex-col max-md:gap-10">
                            <img className="upicon h-10 max-md:h-8 max-md:w-24" src={props.url} alt="" />
                            <div className="flex gap-3 max-md:flex-col-reverse">
                                <div className="updesc flex flex-col gap-3">
                                    <h1 className="text-slate-950 gap-14 text-3xl">{props.h1}</h1>
                                    <ul className=" flex flex-col gap-2 text-slate-950">
                                        <li><p>{props.p}</p></li>
                                        <li><p>{props.p1}</p></li>
                                        <li><p>{props.p2}</p></li>
                                    </ul>
                                </div>
                                <p className="text-slate-950">{el.day}</p>
                            </div>
                        </div>
                    )
                })} */}
                </div>
            </div>
        </div>
    )
}

export { Experience }