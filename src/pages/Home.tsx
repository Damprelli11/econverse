import { useEffect, useState } from "react"
import productsData from "../data/products.json"

import type { Product } from "../types/Product"

import HeroBanner from "../components/HeroBanner/HeroBanner"
import CategorySection from "../components/CategorySection/CategorySection"
import ProductCard from "../components/ProductCard/ProductCard"
import PartnerSection from "../components/PartnerSection/PartnerSection"
import BrandSection from "../components/BrandSection/BrandSection"
import Newsletter from "../components/Newsletter/Newsletter"
import Footer from "../components/Footer/Footer"
import ProductModal from "../components/ProductModal/ProductModal"

const Home = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    useEffect(() => {
        setProducts(productsData.products)
    }, [])

    return (
        <main>
            <HeroBanner />
            <CategorySection />
            <section className="products-section">
                <div className="products-title">
                    <span className="products-title-line"></span>
                    <h2>Produtos relacionados</h2>
                    <span className="products-title-line"></span>
                </div>

                <div className="products-tabs">
                    <button className="active">CELULAR</button>
                    <button>ACESSÓRIOS</button>
                    <button>TABLETS</button>
                    <button>NOTEBOOKS</button>
                    <button>TVS</button>
                    <button>VER TODOS</button>
                </div>

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

            <PartnerSection />
            <BrandSection />
            <Newsletter/>
            <Footer/>

            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </main>
    )
}

export default Home