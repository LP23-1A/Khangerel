import Location from "@/components/Location";
import Dot from "@/components/Dot";
import Icon from "@/components/Icons";
import Sagar from "./Sagar";


const Contents = () => {
    return (
    <div className="body flex mx-auto max-w-7xl py-24 text-lg justify-between">
        <div className="information flex flex-col gap-14 max-w-4xl">
            <div className="info flex flex-col gap-5">
                <h2 className="text-6xl">Hi, I’m Sagar 👋</h2>
                <p>
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
                </p>
            </div>
            <div className="loca flex flex-col gap-3">
                <p className="font-size flex items-center gap-2">
                    <Location /> Ahmedabad, India
                </p>
                <p className="font-size flex items-center gap-3">
                    <Dot /> Available for new projects
                </p>
            </div>
            <div className="icons flex">
                <Icon />
            </div>
        </div>
        <div className="picture">
            <Sagar />
            <div className="relative top-0.5"></div>
        </div>
    </div>
    )
}
export default Contents