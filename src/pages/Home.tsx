import { useEffect, useState } from "react"
import productsData from "../data/products.json"
import type { Product } from "../types/Product"

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
                        <article key={index} className="product-card">
                            <img
                                src={product.photo}
                                alt={product.productName}
                                width="150"
                            />

                            <p>{product.descriptionShort}</p>

                            <span className="price">
                                R$ {product.price.toFixed(2)}
                            </span>

                            <button>COMPRAR</button>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home