import { useRef } from "react"
import "./ProductSection.scss"

import type { Product } from "../../types/Product"
import ProductCard from "../ProductCard/ProductCard"

interface ProductSectionProps {
  title: string
  products: Product[]
  onProductClick: (product: Product) => void
}

const ProductSection = ({
  title,
  products,
  onProductClick,
}: ProductSectionProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null)

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    })
  }

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    })
  }

  return (
    <section className="products-section">
      <div className="products-title-wrapper">
        <div className="products-title">
          <span className="products-title-line"></span>
          <h2>{title}</h2>
          <span className="products-title-line"></span>
        </div>

        <span className="products-see-all">Ver todos</span>
      </div>

      <div className="products-tabs">
        <button className="active">CELULAR</button>
        <button>ACESSÓRIOS</button>
        <button>TABLETS</button>
        <button>NOTEBOOKS</button>
        <button>TVS</button>
        <button>VER TODOS</button>
      </div>

      <div className="products-carousel-wrapper">
        <button
          type="button"
          className="carousel-arrow left"
          onClick={scrollLeft}
          aria-label="Produtos anteriores"
        >
          ‹
        </button>

        <div className="products-carousel" ref={carouselRef}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel-arrow right"
          onClick={scrollRight}
          aria-label="Próximos produtos"
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default ProductSection