import "./HeroSection.css"

function HeroSection() {
    return (
        <>
            <div className="intro_section d-flex flex-column justify-content-center align-items-center text-center mt-4 mb-5">
                <p className="heading fw-bold mb-3">Transform Your Business with Deliote's Cloud Services</p>
                <div className="d-flex flex-column flex-md-row mb-4 gap-md-4">
                    <span className="fs-4">Scalable</span><span className="fs-4">|</span>
                    <span className="fs-4">Secure</span><span className="fs-4">|</span>
                    <span className="fs-4">Seamless</span>
                </div>
                <div>
                    <p className="fw-light">At DCompany, we empower businesses to unlock their full potential with robust,
                        cutting-edge cloud
                        services. <br /> Whether you’re looking to streamline operations, scale your business, or enhance
                        collaboration, our cloud solutions are designed to deliver unmatched performance, security, and
                        flexibility.
                    </p>
                </div>
            </div>
        </>
    )
}

export default HeroSection;