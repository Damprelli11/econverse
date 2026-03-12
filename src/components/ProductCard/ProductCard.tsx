import type { Product } from "../../types/Product"
import "./ProductCard.scss"

interface ProductCardProps {
    product: Product
    onClick: () => void
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
    const formattedPrice = product.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    return (
        <article className="product-card" onClick={onClick}>
            <img
                src={product.photo}
                alt={`Imagem do produto ${product.productName}`}
                className="product-image"
            />

            <p className="product-description">
                {product.descriptionShort}
            </p>

            <p className="product-old-price">R$ 30,90</p>

            <span className="product-price">{formattedPrice}</span>

            <p className="product-installments">
                ou 2x de R$ 49,95 sem juros
            </p>

            <p className="product-shipping">Frete grátis</p>

            <button
                type="button"
                className="product-button"
            >
                COMPRAR
            </button>
        </article>
    )
}

export default ProductCard