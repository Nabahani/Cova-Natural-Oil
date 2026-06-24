import { Link } from "react-router-dom";
import { handleWhatsAppRedirect } from "../components/utils/whastapp";

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top navEl">
                <div className="container-fluid">
                    <Link className="navbar-brand logo-container position-relative py-3" to='/'>
                        <img src="https://i.postimg.cc/pLgDd1D0/Adobe-Express-file.png" alt="No" />
                        <span className="logo">Cova Natural Oil</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link activeEl" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/checkout'>Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact'>Contact</Link>
                            </li>
                        </ul>

                        <div className="me-4">
                            <button className="btn btn-sm public-btn ps-3" onClick={handleWhatsAppRedirect}>Contact <i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar