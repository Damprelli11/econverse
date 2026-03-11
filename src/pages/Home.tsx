import { useEffect, useState } from "react"
import productsData from "../data/products.json"
import type { Product } from "../types/Product"

import ProductCard from "../components/ProductCard/ProductCard"

const Home = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        setProducts(productsData.products)
    }, [])

    return (
        <main>
            <section>
                <h2>Produtos relacionados</h2>
                <div className="products-grid">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home