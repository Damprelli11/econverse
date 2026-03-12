import { useEffect, useState } from "react"
import productsData from "../data/products.json"

import type { Product } from "../types/Product"

import HeroBanner from "../components/HeroBanner/HeroBanner"
import CategorySection from "../components/CategorySection/CategorySection"
import ProductSection from "../components/ProductSection/ProductSection"
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

      <ProductSection
        title="Produtos relacionados"
        products={products}
        onProductClick={setSelectedProduct}
      />

      <PartnerSection />
      <BrandSection />

      <ProductSection
        title="Produtos relacionados"
        products={products}
        onProductClick={setSelectedProduct}
      />

      <Newsletter />
      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  )
}

export default Home