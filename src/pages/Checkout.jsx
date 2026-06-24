import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProducts";
import ScrollTop from "../components/ScrollTop";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const { cartItems, removeItemFromCart, updateQuantity, getTotal, orderItems, setOrderId, setOrderDetails } = useCart();
    const { getProductById } = useProducts();
    const total = getTotal();
    const [data, setData] = useState({});
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (!cartItems.length > 0) {
            alert('Please select at least one item.');
            return;
        }

        const today = new Date();
        const orderDetails = {
            ...data,
            ...orderItems,
            uniqueId: crypto.randomUUID(),
            date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`,
            total: total
        }
        setOrderId(orderDetails.uniqueId);
        setOrderDetails(orderDetails);
        navigate(`/order/${orderDetails.uniqueId}/complete`);
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <p className="title-5 mb-2">Order Summary</p>
                        <div className="checkout-container p-3">
                            <p className="title-6">Items</p>
                            {
                                cartItems.map((item) => {
                                    const currentProduct = getProductById(item.id);

                                    return (
                                        <div key={item.id}>
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
                                                        <button className="btn btn-sm border-0 w-100 update-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                        <p className="mb-0 text-center w-100 quantity">{item.quantity}</p>
                                                        <button className="btn btn-sm border-0 w-100 update-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                                    </div>

                                                    <p className="price-1 py-2 mb-0">&#8358;{(currentProduct.price * item.quantity).toLocaleString()}</p>
                                                    <button className="btn btn-sm dark-btn text-white px-3 smaller-font" onClick={() => removeItemFromCart(item.id)}>Remove</button>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="col-12 col-lg-5 mt-4 mt-lg-0">
                        <p className="title-5 mb-2">Place Order</p>
                        <div className="checkout-container p-3 pb-4">
                            <div>
                                <p className="title-6">Total</p>
                                <div className="d-flex justify-content-between">
                                    <p className="paragraph">Subtotal:</p>
                                    <p className="subtotal-price">&#8358;{total.toLocaleString()}</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p className="paragraph">Total:</p>
                                    <p className="total-price">&#8358;{total.toLocaleString()}</p>
                                </div>
                                <hr />
                            </div>

                            <p className="title-6">Checkout</p>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name" className="form-label paragraph mb-1">Full Name <span className="text-danger">*</span></label>
                                <input type="text" id="name" className="form-control custom-input" onChange={(e) => setData({ ...data, name: e.target.value })} required />

                                <label htmlFor="phoneNo1" className="form-label paragraph mb-1 mt-3">Phone Number 1 <span className="text-danger">*</span></label>
                                <input type="text" id="phoneNo1" className="form-control custom-input" onChange={(e) => setData({ ...data, phoneNo1: e.target.value })} required />

                                <label htmlFor="phoneNo2" className="form-label paragraph mb-1 mt-3">Phone Number 2</label>
                                <input type="text" id="phoneNo2" className="form-control custom-input" onChange={(e) => setData({ ...data, phoneNo2: e.target.value })} />

                                <label htmlFor="state" className="form-label paragraph mb-1 mt-3">State <span className="text-danger">*</span></label>
                                <input type="text" id="state" className="form-control custom-input" onChange={(e) => setData({ ...data, state: e.target.value })} required />

                                <label htmlFor="lga" className="form-label paragraph mb-1 mt-3">LGA <span className="text-danger">*</span></label>
                                <input type="text" id="lga" className="form-control custom-input" onChange={(e) => setData({ ...data, lga: e.target.value })} required />

                                <label htmlFor="address" className="form-label paragraph mb-1 mt-3">Address <span className="text-danger">*</span></label>
                                <input type="text" id="address" className="form-control custom-input" onChange={(e) => setData({ ...data, address: e.target.value })} required />

                                <div className="text-center mt-3">
                                    <button type="submit" className="btn btn-sm golden-btn px-3 text-white">Place Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ScrollTop />
        </section >
    )
}

export default Checkout;