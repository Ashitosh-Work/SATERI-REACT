import { useState } from "react";
import "./Footer.css"

function Footer() {
    const [email, setEmail] = useState("");

    const onChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Your mailId: ${email} is subscribed for our newsletter`);
        setEmail("");
    }

    return (
        <>
            <footer className="p-5 m-5">
                <div className="d-flex flex-column flex-lg-row align-items-center ps-4 mb-4">
                    <div className="subscribe d-flex flex-column align-items-start justify-content-center">
                        <h4 className="mb-4">Deliote</h4>
                        <form id="form" onSubmit={(e) => submitHandler(e)}>
                            <p className="fw-bolder">Subscribe to our newsletter</p>
                            <input placeholder="Enter your email" id="email" className="mb-3" autoComplete="email" required
                                type="email" value={email} onChange={(e) => onChangeHandler(e)} />
                            <br />
                            <button className="submit_button fw-bolder" id="submit">Submit</button>
                        </form>
                    </div>

                    <div className="links d-flex flex-column flex-md-row align-items-center justify-content-center gap-md-5">
                        <div className="d-flex flex-column align-items-start  text-start p-md-4 mt-2">
                            <p className="mb-2">Pages</p>
                            <div className="short mb-2"></div>
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                            <a href="#">Blog</a>
                            <a href="#">Blog Post</a>
                        </div>

                        <div className="d-flex flex-column align-items-start text-start p-md-4 mt-2">
                            <p className="mb-2">Utility Pages</p>
                            <div className="short mb-2"></div>
                            <a href="#">Feature</a>
                            <a href="#">Careers</a>
                            <a href="#">Request Demo</a>
                            <a href="#">Login</a>
                            <a href="#">Sign Up</a>
                        </div>

                        <div className="d-flex flex-column align-items-start text-start p-md-4 mt-2">
                            <p className="mb-2">Utility Pages</p>
                            <div className="short mb-2"></div>
                            <a href="#">Style Guide</a>
                            <a href="#">Password Protect</a>
                            <a href="#">404 Not Found</a>
                            <a href="#">Licenses</a>
                            <a href="#">Change Log</a>
                        </div>

                    </div>
                </div>

                <div id="big" className="ms-md-4 mb-4"></div>
                <div className="d-flex justify-content-center align-items-center">Copyright ©
                    Product Deliote</div>

            </footer>
        </>
    )
}

export default Footer;