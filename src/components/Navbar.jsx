import logo from '../assets/logo.jpeg'

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top navEl">
                <div className="container-fluid">
                    <a className="navbar-brand logo-container position-relative py-3" href="#">
                        <img src="https://i.postimg.cc/pLgDd1D0/Adobe-Express-file.png" alt="No" />
                        <span className="logo">Cover Natural Oil</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link activeEl" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contact</a>
                            </li>
                        </ul>

                        <div className="me-4">
                            <button className="btn btn-sm public-btn ps-3">Contact <i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar