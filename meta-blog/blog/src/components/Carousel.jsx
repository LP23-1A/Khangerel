import { Carousel } from 'react-responsive-carousel';
import image from '../../public/image.png'
import React from "react";

const Carousels = () => {
    return (
        <div className="flex overflow-x-auto-hidden">
            <Carousel>
                <div className='flex overflow-hidden overflow-scroll'>
                    <img src={image.src} />
                    <img src={image.src} />
                    <img src={image.src} />
                </div>
            </Carousel>
        </div>
    )
}

export default Carousels