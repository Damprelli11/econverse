import "./Footer.scss"
import logo from "../../assets/logo.png"
import instagramIcon from "../../assets/instagram.svg"
import facebookIcon from "../../assets/facebook.svg"
import linkedinIcon from "../../assets/linkedin.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">

                <div className="footer__brand">
                    <img src={logo} id="logo" alt="Econverse logo" />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className="footer__social">
                        <img src={instagramIcon} alt="Instagram" />
                        <img src={facebookIcon} alt="Facebook" />
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </div>
                </div>

                <div className="footer__divider"></div>

                <div className="footer__links">

                    <div>
                        <h3>Institucional</h3>
                        <a href="/">Sobre Nós</a>
                        <a href="/">Movimento</a>
                        <a href="/">Trabalhe conosco</a>
                    </div>

                    <div>
                        <h3>Ajuda</h3>
                        <a href="/">Suporte</a>
                        <a href="/">Fale Conosco</a>
                        <a href="/">Perguntas Frequentes</a>
                    </div>

                    <div>
                        <h3>Termos</h3>
                        <a href="/">Termos e Condições</a>
                        <a href="/">Política de Privacidade</a>
                        <a href="/">Troca e Devolução</a>
                    </div>

                </div>

            </div>

            <div className="footer__bottom">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </footer>
    )
}

export default Footer