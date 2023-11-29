import image from "@/components/image/natural.jpeg"

export default function Sagarntr() {
    return(
        <img className="pic-2 h-full w-90 absolute top-[-45px] left-[45px] max-md:left-[10px] border-8 border-neutral-100 dark:border-slate-900" src={image.src}></img>
    )
}