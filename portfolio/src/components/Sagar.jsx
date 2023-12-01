import image from "../components/image/s.jpeg"

export default function Sagar() {

    return(
        <div>
            <img className="pic h-full right-[25px] top-[-25px] absolute max-md:top-[-10px] max-md:right-[10px] border-8 border-white dark:border-slate-900 border-t-0 md:border-l-0" src={image.src}></img>
        </div>
    )
}