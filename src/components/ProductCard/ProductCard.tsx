import type { Product } from "../../types/Product"
import "./ProductCard.scss"

interface ProductCardProps {
    product: Product
    onClick: () => void
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
    return (
        <article className="product-card" onClick={onClick}>
            <img
                src={product.photo}
                alt={product.productName}
                className="product-image"
            />

            <p className="product-description">
                {product.descriptionShort}
            </p>

            <span className="product-price">
                R$ {product.price.toFixed(2)}
            </span>

            <button className="product-button">
                COMPRAR
            </button>
        </article>
    )
}

export default ProductCard