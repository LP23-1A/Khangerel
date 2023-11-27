import image from "../components/image/s.jpeg"

export default function Sagar() {

    return(
        <div>
            <img className="pic h-full right-[25px] top-[-25px] absolute max-md:top-[-10px] max-md:right-[10px]" src={image.src}></img>
        </div>
    )
}