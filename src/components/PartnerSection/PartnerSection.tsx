import "./PartnerSection.scss"
import partnerBanner from "../../assets/partner-banner.png"

const partnerItems = [1, 2]

const PartnerSection = () => {
    return (
        <section className="partner-section">
            <div className="partner-grid">
                {partnerItems.map((item) => (
                    <article
                        key={item}
                        className="partner-card"
                        style={{ backgroundImage: `url(${partnerBanner})` }}
                    >
                        <div className="partner-card__overlay">
                            <div className="partner-card__content">
                                <span className="partner-card__eyebrow">Parceiros</span>
                                <h2>Parceiros</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                <button type="button">CONFIRA</button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default PartnerSection