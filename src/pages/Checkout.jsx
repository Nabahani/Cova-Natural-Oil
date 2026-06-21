import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProducts";

function Checkout() {

    const { cartItems, removeFromCart } = useCart();
    const { getProductById } = useProducts();

    return (
        <section>
            <div className="container">
                <p className="title-5">Checkout</p>
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div className="checkout-container p-3">
                            <p className="title-6">Order Summary</p>
                            {
                                cartItems.map((item) => {
                                    const currentProduct = getProductById(item.id);

                                    return (
                                        <>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <img src={currentProduct.source} alt="" className="custom-image rounded" />
                                                    <div className="ms-2">
                                                        <p className="title-6 mb-2">{currentProduct.title}</p>
                                                        <p className="price-1">&#8358;{currentProduct.price.toLocaleString()}</p>
                                                    </div>
                                                </div>

                                                <div className="text-end">
                                                    <div className="d-flex align-items-center justify-content-center border rounded">
                                                        <button className="btn btn-sm border-0 w-100">-</button>
                                                        <p className="mb-0 text-center w-100 quantity">{item.quantity}</p>
                                                        <button className="btn btn-sm border-0 w-100">+</button>
                                                    </div>

                                                    <p className="price-1 py-2 mb-0">&#8358;{currentProduct.price.toLocaleString()}</p>
                                                    <button className="btn btn-sm dark-btn text-white px-3 smaller-font" onClick={() => removeFromCart(item.id)}>Remove</button>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout;