import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts"
import { useCart } from "../hooks/useCart";

function Products() {

    const { products } = useProducts();
    const { cartItems, addToCart } = useCart();
    const navigate = useNavigate();

    return (
        <section>
            <div className="container mb-5">
                <div className="text-center" data-aos="fade-up">
                    <h3 className="title-2">Our Products</h3>
                    <h2 className="title-3">Shop The Collection</h2>
                    <p className="title-description mx-lg-5 px-lg-5">Pure, natural, and thoughtfully crafted essentials for your daily self-care routine.</p>
                </div>

                <div className="row g-4 justify-content-center mt-5">
                    {
                        products.map((product, index) => {
                            const productInCart = cartItems.find((item) => item.id === product.id);
                            const productQuantity = productInCart ? `(${productInCart.quantity})` : '';

                            return (
                                <div className="col-11 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={`${(index + 1) * 200}`} key={product.id}>
                                    <div className="product-container">
                                        <img src={product.source} alt="product" />
                                        <div className="pt-3 pb-4 px-3">
                                            <p className="product-title mb-1">{product.title}</p>
                                            <p className="product-price mb-1">&#8358;{product.price.toLocaleString()}</p>

                                            <div className="products-btns">
                                                <button className="btn btn-sm dark-btn text-white mt-2 me-2" onClick={() => navigate(`/products/${product.id}`)}>View Details</button>
                                                <button className="btn btn-sm golden-btn text-white mt-2" onClick={() => addToCart(product.id)}>Add to cart {productQuantity}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Products