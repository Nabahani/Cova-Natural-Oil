import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";
import { useCart } from "../hooks/useCart";
import ScrollTop from "../components/ScrollTop";

function ProductDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useProducts();

    useEffect(() => {
        if (products.length > 0 && !products.some((product) => product.id === Number(id))) {
            navigate('/404');
        }
    }, [id]);

    const currentProduct = products.find((product) => product.id === Number(id));
    const { cartItems, addToCart } = useCart();
    const productInCart = cartItems.find((item) => item.id === currentProduct.id);
    const productQuantity = productInCart ? `(${productInCart.quantity})` : '';


    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-9" data-aos='fade-up'>
                        <div className="product-details-container d-md-flex align-items-center">
                            <img src={currentProduct?.source ?? null} alt="products" className="img-fluid" />
                            <div className="my-3 my-md-0 ms-1 ms-md-4">
                                <h4 className="title-4 mb-3">{currentProduct?.title ?? ''}</h4>
                                <h4 className="current-product-price">&#8358;{(currentProduct?.price ?? 0).toLocaleString()}</h4>
                                <p className="current-product-des">{currentProduct?.description ?? ''}</p>
                                <button className="btn btn-sm golden-btn text-white small-font px-3" onClick={() => addToCart(currentProduct.id)}>Add to cart {productQuantity}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ScrollTop />
        </section>
    )
}

export default ProductDetails;