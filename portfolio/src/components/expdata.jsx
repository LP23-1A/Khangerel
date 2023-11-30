let data = [
    {   
        h3: "Upwork",
        h1: "Sr. Frontend Developer",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        p1: "Sed quis justo ac magna.",
        p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        day: "Dec 2015 - May 2017"
    },
    {
        h3: "Upwork",
        h1: "Team Lead",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        p1: "Sed quis justo ac magna.",
        day: "Jul 2017 - Oct 2021"
    },
    {
        h3: "Upwork",
        h1: "Full Stack Developer",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        p1: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        day: "Nov 2021 - Present"
    }
];
const Expdata = () => {
    return(
        <>
        {
            data.map((props) => {
                return(
                    <div className="upwork-details flex justify-between mx-auto w-full bg-white rounded-xl p-5 drop-shadow-xl max-md:flex-col max-md:gap-10 dark:bg-slate-700">
                        <h3 className="upicon h-14 max-md:h-8 max-md:w-30 text-3xl text-[#14A800]">{props.h3}</h3>
                        <div className="flex gap-3 max-md:flex-col-reverse">
                            <div className="updesc flex flex-col gap-10 md:pr-24">
                                <h1 className="text-slate-950 gap-14 text-3xl">{props.h1}</h1>
                                <ul className=" flex flex-col gap-8 text-slate-950 dark:text-slate-400">
                                    <li><p>{props.p}</p></li>
                                    <li><p>{props.p1}</p></li>
                                    <li><p>{props.p2}</p></li>
                                </ul>
                            </div>
                            <p className="text-slate-950">{props.day}</p>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default Expdata
