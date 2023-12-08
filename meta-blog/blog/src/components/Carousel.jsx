import { Carousel } from 'react-responsive-carousel';
import image from '../../public/image.png'


const Carousels = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={image.src} />
                </div>
                <div>
                    <img src={image.src} />
                </div>
                <div>
                    <img src={image.src} />
                </div>
            </Carousel>
        </div>
    )
}

export default Carousels