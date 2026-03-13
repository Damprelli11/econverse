import "./Newsletter.scss"

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__content">
          <div className="newsletter__text">
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
            </p>
          </div>

          <form className="newsletter__form">
            <div className="newsletter__inputs">
              <input type="text" placeholder="Digite seu nome" />
              <input type="email" placeholder="Digite seu e-mail" />
              <button type="submit">INSCREVER</button>
            </div>

            <label className="newsletter__terms">
              <input type="checkbox" />
              <span>Aceito os termos e condições</span>
            </label>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter