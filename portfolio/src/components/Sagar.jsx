import image from "./image/s.jpeg"

export default function Sagar() {

    return(
        <div>
            <img className="pic h-64 right-1 top-1 absolute right-[170px] z-10 top-[190px]" src={image.src}></img>
        </div>
    )
}