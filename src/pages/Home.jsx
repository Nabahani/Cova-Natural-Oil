import Products from '../components/Products';
import ScrollTop from '../components/ScrollTop';
import { handleWhatsAppRedirect } from '../components/utils/whastapp';

function Home() {

    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className="row justify-content-center text-center text-md-start">
                        <div className="col-md-6 mt-5 mt-md-0" data-aos="fade-up" data-aos-delay="0">
                            <h1 className="title-1">Pure Radiance, <span className="title-span">Naturally Bottled</span></h1>
                            <p className="title-description">Discover the multi-purpose power of COVA 100% Pure Olive Oil. Cold-pressed and entirely free from additives, it’s designed to deeply nourish your skin, strengthen your hair, and soften your body.</p>
                            <button className="btn btn-sm public-btn-2 ps-3 mt-2" data-aos="fade-up" data-aos-delay="100" onClick={handleWhatsAppRedirect}>Contact <i className="bi bi-arrow-right"></i></button>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <img src="https://i.postimg.cc/76SDPzPX/download-(1).jpg" alt="product" className="img-fluid right-image w-100 mt-3 d-md-none" />
                        </div>
                    </div>
                </div>
            </section>

            <Products />

            <ScrollTop />
        </>
    )
}

export default Home