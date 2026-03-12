import "./BrandSection.scss"
import brandLogo from "../../assets/logo.png"

const brands = [1, 2, 3, 4, 5]

const BrandSection = () => {
  return (
    <section className="brand-section">

      <h2 className="brand-title">
        Navegue por marcas
      </h2>

      <div className="brand-grid">
        {brands.map((brand) => (
          <div key={brand} className="brand-card">
            <img
              src={brandLogo}
              alt="Marca Econverse"
            />
          </div>
        ))}
      </div>

    </section>
  )
}

export default BrandSection