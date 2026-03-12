import { useEffect, useState } from "react"
import productsData from "../data/products.json"

import type { Product } from "../types/Product"

import ProductCard from "../components/ProductCard/ProductCard"
import ProductModal from "../components/ProductModal/ProductModal"

const Home = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

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
                            onClick={() => setSelectedProduct(product)}
                        />
                    ))}
                </div>
            </section>

            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </main>
    )
}

export default Home