import { handleWhatsAppRedirect } from "../components/utils/whastapp";
import { handleCall } from "../components/utils/call";
import { openEmail } from "../components/utils/email";

function Contact() {

    return (
        <section>
            <div className="container">
                <p className="title-5 mb-2">Contact Us</p>

                <div className="row g-4">
                    <div className="col-11 col-sm-6 col-lg-3">
                        <div className="border custom-bg py-3 custom-icons text-center">
                            <i className="bi bi-geo-alt text-success"></i>
                            <p className="paragraph my-2">Kano State, Nigeria</p>
                        </div>
                    </div>
                    <div className="col-11 col-sm-6 col-lg-3">
                        <div className="border custom-bg py-3 custom-icons text-center" style={{ cursor: 'pointer' }} onClick={handleWhatsAppRedirect}>
                            <i className="bi bi-whatsapp text-success"></i>
                            <p className="paragraph my-2">08061234574</p>
                        </div>
                    </div>
                    <div className="col-11 col-sm-6 col-lg-3">
                        <div className="border custom-bg py-3 custom-icons text-center" style={{ cursor: 'pointer' }} onClick={handleCall}>
                            <i className="bi bi-telephone text-primary"></i>
                            <p className="paragraph my-2">08061234574</p>
                        </div>
                    </div>
                    <div className="col-11 col-sm-6 col-lg-3">
                        <div className="border custom-bg py-3 custom-icons text-center" style={{ cursor: 'pointer' }} onClick={openEmail}>
                            <i className="bi bi-envelope-at-fill text-primary"></i>
                            <p className="paragraph my-2">yusufabdulrahman5677@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;