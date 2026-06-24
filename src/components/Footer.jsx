import { Link } from "react-router-dom";
import { handleWhatsAppRedirect } from "../components/utils/whastapp";

function Footer() {

    return (
        <section className="footer" style={{ paddingBottom: '8px' }}>
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-11 col-sm-6 col-lg-3">
                        <div className="text-center text-sm-start">

                            <p className="footer-heading title-7">Cover Natural Oil</p>
                            <p className="paragraph">Pure, natural, and thoughtfully crafted essentials for your daily self-care routine. 100% cold-pressed oils free from additives.</p>
                        </div>
                    </div>

                    <div className="col-11 col-sm-6 col-lg-3">
                        <div className="text-center text-sm-start">
                            <p className="title-6">Quick Links</p>
                            <ul>
                                <li>
                                    <Link className="paragraph" to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link className="paragraph" to='/about'>About Us</Link>
                                </li>
                                <li>
                                    <Link className="paragraph" to='/contact'>Contact Us</Link>
                                </li>
                                <li>
                                    <Link className="paragraph" to='/'>Our Shop</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-11 col-sm-6 col-lg-3">
                        <div className="text-center text-sm-start">
                            <p className="title-6">Customer Care</p>
                            <ul>
                                <li>
                                    <Link className="paragraph" to='/contact'>Contact Us</Link>
                                </li>
                                <li>
                                    <Link className="paragraph" to='/about'>Shipping & Delivery</Link>
                                </li>
                                <li>
                                    <Link className="paragraph" to='/'>Returns</Link>
                                </li>
                                <li>
                                    <Link className="paragraph" to='/'>FAQs</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-11 col-sm-6 col-lg-3">
                        <div className="text-center text-sm-start">
                            <p className="title-6">Contact Info</p>
                            <ul>
                                <li>
                                    <p className="paragraph mb-2">Email: yusufabdulrahman5677@gmail.com</p>
                                </li>
                                <li>
                                    <p className="paragraph mb-2">Phone: +2348061234574</p>
                                </li>
                                <li>
                                    <p className="paragraph mb-2">Location: Kano State, Nigeria</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="text-white" />

                <p className="bottom-footer paragraph text-center text-white">© 2026 Cova Natural Oil. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer;