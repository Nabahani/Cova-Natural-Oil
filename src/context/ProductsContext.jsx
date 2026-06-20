import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext(null);

export function ProductProvider({ children }) {

    const [products, setProducts] = useState(
        localStorage.getItem('products')
            ? JSON.parse(localStorage.getItem('products'))
            : [
                {
                    id: 1,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    price: 1500
                },
                {
                    id: 2,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    price: 2000
                },
                {
                    id: 3,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    price: 2200
                },
                {
                    id: 4,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    price: 1200
                },
                {
                    id: 5,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    price: 1800
                },
                {
                    id: 6,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    price: 2500
                },
                {
                    id: 7,
                    source: 'https://i.postimg.cc/C5y1mY5b/images-(2).jpg',
                    title: 'Olive Oil',
                    price: 1000
                },
            ]
    );

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    return (
        <ProductsContext.Provider value={{ products, setProducts }}>{children}</ProductsContext.Provider>
    )
}

export function useProducts() {
    return useContext(ProductsContext);
}