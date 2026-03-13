import "./HeroBanner.scss"
import banner from "../../assets/banner.png"

const HeroBanner = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay">

        <div className="container">
          <div className="hero-content">

            <h1>
              Venha conhecer nossas <br />
              promoções
            </h1>

            <p className="discount">
              <span>50% Off</span> nos produtos
            </p>

            <button>
              Ver produto
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroBanner