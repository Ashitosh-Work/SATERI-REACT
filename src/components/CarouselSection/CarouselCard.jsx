import "./CarouselCard.css";
import carouselImage from "../../assets/carousel_img.svg"

function CarouselCard({ carouselCardHeading, carouselCardSubHeading }) {

    return (
        <>
            <swiper-slide>
                <div className="slide d-flex flex-column flex-md-row justify-content-between">
                    <img src={carouselImage} id="slide_image" alt="carousel_image" />
                    <div
                        className="slide_content d-flex flex-column text-start justify-content-center align-items-center">
                        <p className="fs-1 fw-bold">{carouselCardHeading}</p>
                        <p className="fw-light">{carouselCardSubHeading}</p>
                    </div>
                </div>
            </swiper-slide>
        </>
    )
}

export default CarouselCard;