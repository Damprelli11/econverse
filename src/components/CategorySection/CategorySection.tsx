import "./CategorySection.scss"

import technologyIcon from "../../assets/technology.svg"
import supermarketIcon from "../../assets/supermarket.svg"
import drinksIcon from "../../assets/drinks.svg"
import toolsIcon from "../../assets/tools.svg"
import healthIcon from "../../assets/health.svg"
import sportsIcon from "../../assets/sports.svg"
import fashionIcon from "../../assets/fashion.svg"

const categories = [
    { name: "Tecnologia", icon: technologyIcon, active: true },
    { name: "Supermercado", icon: supermarketIcon },
    { name: "Bebidas", icon: drinksIcon },
    { name: "Ferramentas", icon: toolsIcon },
    { name: "Saúde", icon: healthIcon },
    { name: "Esportes e Fitness", icon: sportsIcon },
    { name: "Moda", icon: fashionIcon },
]

const CategorySection = () => {
    return (
        <section className="category-section">
            <div className="category-list">
                {categories.map((category) => (
                    <article
                        key={category.name}
                        className={`category-item ${category.active ? "active" : ""}`}
                    >
                        <div className="category-card">
                            <img src={category.icon} alt={category.name} />
                        </div>

                        <p className="category-name">{category.name}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default CategorySection