import "./ProductSection.scss"
import ProductCard from "../ProductCard/ProductCard"
import type { Product } from "../../types/Product"

interface Props {
    title: string
    products: Product[]
    onProductClick: (product: Product) => void
}

const ProductSection = ({ title, products, onProductClick }: Props) => {
    return (
        <section className="product-section">

            {/* TÍTULO */}

            <div className="section-title">

                <span className="line"></span>

                <h2>{title}</h2>

                <span className="line"></span>

            </div>

            {/* TABS */}

            <div className="product-tabs">

                <button className="active">CELULAR</button>
                <button>ACESSÓRIOS</button>
                <button>TABLETS</button>
                <button>NOTEBOOKS</button>
                <button>TVS</button>
                <button>VER TODOS</button>

            </div>

            {/* GRID */}

            <div className="product-grid">

                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                        onClick={() => onProductClick(product)}
                    />
                ))}

            </div>

        </section>
    )
}

export default ProductSection