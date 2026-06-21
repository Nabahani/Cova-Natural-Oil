import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null);

export function ProductProvider({ children }) {

    const [products, setProducts] = useState(
        localStorage.getItem('products')
            ? JSON.parse(localStorage.getItem('products') || '{}')
            : [
                {
                    id: 1,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae dolorum',
                    price: 1500
                },
                {
                    id: 2,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae dolorum',
                    price: 2000
                },
                {
                    id: 3,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae dolorum',
                    price: 2200
                },
                {
                    id: 4,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae dolorum',
                    price: 1200
                },
                {
                    id: 5,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae dolorum',
                    price: 1800
                },
                {
                    id: 6,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae dolorum',
                    price: 2500
                },
                {
                    id: 7,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae dolorum',
                    price: 1000
                },
            ]
    );

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    function getProductById(id) {
        return products.find(product => product.id === id);
    }

    return (
        <ProductsContext.Provider value={{ products, setProducts, getProductById }}>{children}</ProductsContext.Provider>
    )
}