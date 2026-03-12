import type { Product } from "../../types/Product"
import "./ProductModal.scss"

interface ProductModalProps {
    product: Product | null
    onClose: () => void
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
    if (!product) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">

                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <img
                    src={product.photo}
                    alt={product.productName}
                    className="modal-image"
                />

                <h2>{product.productName}</h2>

                <p>{product.descriptionShort}</p>

                <span className="modal-price">
                    R$ {product.price.toFixed(2)}
                </span>

            </div>
        </div>
    )
}

export default ProductModal