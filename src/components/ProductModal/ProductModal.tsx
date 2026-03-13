import type { Product } from "../../types/Product"
import "./ProductModal.scss"

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  if (!product) return null

  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ×
        </button>

        <div className="modal-image-wrapper">
          <img
            src={product.photo}
            alt={product.productName}
            className="modal-image"
          />
        </div>

        <div className="modal-info">
          <h2 className="modal-title">{product.productName.toUpperCase()}</h2>

          <span className="modal-price">{formattedPrice}</span>

          <p className="modal-description">
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>

          <a href="/" className="modal-link" onClick={(e) => e.preventDefault()}>
            Veja mais detalhes do produto &gt;
          </a>

          <div className="modal-actions">
            <div className="modal-quantity">
              <button type="button">−</button>
              <span>01</span>
              <button type="button">+</button>
            </div>

            <button type="button" className="modal-buy-button">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal