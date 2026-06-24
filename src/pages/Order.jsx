import { useNavigate, useParams, Link } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import { useCart } from "../hooks/useCart";
import { useEffect, useRef } from "react";
import WhatsAppButton from "../components/WhatsAppButton";
import PhoneCallButton from "../components/PhoneCallButton";
import DownloadButton from "../components/DownloadButton";

function Order() {

    const { id } = useParams();
    const navigate = useNavigate();
    const { orderId, orderDetails, clearCart } = useCart();
    const pageRef = useRef(null);

    useEffect(() => {
        if (id !== orderId) {
            navigate('/404');
        }
    }, [navigate, id]);

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-11 col-md-8 col-lg-5">
                        <div className="checkout-container p-4 p-sm-5 custom-radius border" ref={pageRef}>
                            <div className="text-center">
                                <i className="bi bi-check-circle-fill large-icon"></i>
                                <p className="title-5 mb-2">Order Submitted Successfully</p>
                            </div>

                            <hr />

                            <p className="title-6 mt-4">Invoice Details</p>
                            <p className="paragraph bold-font">Order ID: <span className="paragraph light-font">{orderDetails?.uniqueId ?? ''}</span></p>
                            <p className="paragraph bold-font">Date: <span className="paragraph light-font">{orderDetails?.date ?? ''}</span></p>
                            <p className="paragraph bold-font">Name: <span className="paragraph light-font">{orderDetails?.name ?? ''}</span></p>
                            <p className="paragraph bold-font">Phone 1: <span className="paragraph light-font">{orderDetails?.phoneNo1 ?? ''}</span></p>
                            <p className="paragraph bold-font">Phone 2: <span className="paragraph light-font">{orderDetails?.phoneNo2 ?? ''}</span></p>
                            <p className="paragraph bold-font">Address: <span className="paragraph light-font">{orderDetails?.address ?? ''}</span></p>

                            <hr />

                            <p className="title-6 mt-4">Order Items</p>
                            {
                                Object.entries(orderDetails)
                                    .filter(([key]) => !isNaN(key))
                                    .map(([key, product]) => (
                                        <div key={product.id} className="pb-1 mb-2 d-flex align-items-center" style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                                            <img src={product.source} alt={product.title} className="item-image" style={{ objectFit: 'cover', marginRight: '15px', borderRadius: '5px' }} />
                                            <div>
                                                <p className="paragraph light-font mb-1">{product?.title ?? ''} (x{product.quantity})</p>
                                                <p className="paragraph light-font mb-1">Price per item: &#8358;{(product?.price ?? 0).toLocaleString()}</p>
                                                <p className="paragraph bold-font mb-1">Subtotal: &#8358;{(product?.totalPerProduct ?? 0).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    ))
                            }
                            <p className="paragraph bold-font text-end mt-3">Total: &#8358;{(orderDetails?.total ?? 0).toLocaleString()}</p>

                            <hr />

                            <p className="title-6 mt-4">Payment Details</p>
                            <p className="paragraph bold-font">Account Name: <span className="paragraph light-font">Cova Natural Oil LTD</span></p>
                            <p className="paragraph bold-font">Account Number: <span className="paragraph light-font">0000000000</span></p>
                            <p className="paragraph bold-font">Bank: <span className="paragraph light-font">Moniepoint Microfinance Bank</span></p>

                            <div className="text-center mt-5">
                                <p className="paragraph bold-font">Please proceed to make payment and send your proof of payment via WhatsApp or call to confirm your order.</p>
                                <p className="golden-text paragraph light-font">+234 800 000 0000</p>
                            </div>
                        </div>

                        <div className="text-center mt-3">
                            <div className="d-sm-flex justify-content-center">
                                <WhatsAppButton />
                                <PhoneCallButton />
                            </div>

                            <DownloadButton targetRef={pageRef} fileName="invoice.pdf" />

                            <Link className="link-el paragraph mt-3 px-0" to='/' onClick={() => clearCart()}>Back to Shop</Link>
                        </div>
                    </div>
                </div>
            </div>

            <ScrollTop />
        </section>
    )
}

export default Order;