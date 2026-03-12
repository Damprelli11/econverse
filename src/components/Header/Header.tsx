import "./Header.scss"

import packageIcon from "../../assets/package.svg"
import heartIcon from "../../assets/heart.svg"
import profileIcon from "../../assets/profile.svg"
import cartIcon from "../../assets/cart.svg"
import searchIcon from "../../assets/search.svg"
import Logo from "../../assets/logo.png"

const Header = () => {
    return (
        <header className="header">

            {/* TOP BAR */}
            <div className="top-bar">
                <p>Compra <strong>100% segura</strong></p>
                <p><strong>Frete grátis</strong> acima de R$ 200</p>
                <p><strong>Parcele</strong> suas compras</p>
            </div>

            {/* HEADER PRINCIPAL */}
            <div className="header-main">

                {/* LOGO */}
                <div className="logo">
                    <img src={Logo} alt="Logo Econverse" />
                </div>

                {/* SEARCH */}
                <div className="search">
                    <input
                        type="text"
                        placeholder="O que você está buscando?"
                    />

                    <img
                        src={searchIcon}
                        alt="Buscar"
                        className="search-icon"
                    />
                </div>

                {/* ICONES */}
                <div className="icons">
                    <img src={packageIcon} alt="Pedidos" />
                    <img src={heartIcon} alt="Favoritos" />
                    <img src={profileIcon} alt="Perfil" />
                    <img src={cartIcon} alt="Carrinho" />
                </div>

            </div>

            {/* MENU */}
            <nav className="menu">
                <ul>
                    <li>TODAS CATEGORIAS</li>
                    <li>SUPERMERCADO</li>
                    <li>LIVROS</li>
                    <li>MODA</li>
                    <li>LANÇAMENTOS</li>
                    <li className="highlight">OFERTAS DO DIA</li>
                    <li>ASSINATURA</li>
                </ul>
            </nav>

        </header>
    )
}

export default Header