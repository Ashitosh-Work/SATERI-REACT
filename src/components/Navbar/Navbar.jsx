import "./Navbar.css"

function Navbar() {

    return (
        <>
            <nav className={`navbar navbar-expand-md pt-lg-3 mb-5`} >
                <div className="container-fluid ">
                    <a className="navbar-brand ps-lg-5 pb-md-3" id="navbar-brand" href="#">Deliote</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-around" id="navbarSupportedContent">
                        <ul className="navbar-nav p-md-2" id="navigation_list">
                            <li className="nav-item">
                                <a className="nav-link active " href="#" aria-current="page" id="home_button">
                                    <span className="some py-lg-1 px-lg-5">Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <span className="some">Bridge</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <span className="some">Quest</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <span className="some">Docs</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <span className="some">Governance</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav" id="login_list">
                            <li className="nav-item p-lg-2">
                                <a className="nav-link active" href="#" id="login_button">
                                    <span className="some">Login</span>
                                </a>
                            </li>
                            <li className="nav-item p-lg-2">
                                <a className="nav-link active" href="#">
                                    <span className="some p-md-2" id="signup_button">Sign Up</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar;