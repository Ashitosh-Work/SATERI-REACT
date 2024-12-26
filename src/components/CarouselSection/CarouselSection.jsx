import "./CarouselSection.css";
import CarouselCard from "./CarouselCard";

function CarouselSection() {
    return (
        <>
            <div className="carousel_section d-flex flex-column justify-content-center align-items-center mb-5">
                <p className="fs-1 fw-bold mb-4">Why Choose Deliote?</p>
                <swiper-container className="mySwiper" pagination="true" pagination-clickable="true" slides-per-view="auto"
                    centered-slides="true" space-between="30">
                    <CarouselCard carouselCardHeading={`Scalable Solutions
                            for Growing Businesses`} carouselCardSubHeading={`As your business evolves, so do your needs. DCompany’s
                            cloud
                            services
                            grow with you, offering
                            solutions that are both scalable and cost-efficient, ensuring you're always prepared for
                            the
                            next step.`} />


                    < CarouselCard carouselCardHeading={`Scalable Solutions
                                    for Growing Businesses`} carouselCardSubHeading={`As your business evolves, so do your needs. DCompany’s
                                    cloud
                                    services
                                    grow with you, offering
                                    solutions that are both scalable and cost-efficient, ensuring you're always prepared for
                                    the
                                    next step.` } />

                    < CarouselCard carouselCardHeading={`Scalable Solutions
                                    for Growing Businesses`} carouselCardSubHeading={`As your business evolves, so do your needs. DCompany’s
                                    cloud
                                    services
                                    grow with you, offering
                                    solutions that are both scalable and cost-efficient, ensuring you're always prepared for
                                    the
                                    next step.`} />

                </swiper-container>
            </div>
        </>
    )
}


export default CarouselSection;