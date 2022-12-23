export function Portfolio() {
  return (
    <>
      {/* <style>
    .card.shadow.bg-dark.m-4:hover{
        animation: vibrating .3s ease;
    }
    @keyframes vibrating{
        0%, 100% {transform: rotateZ(0deg)}
        10% {transform: rotateZ(1deg)}
        20% {transform: rotateZ(-1deg)}
        30% {transform: rotateZ(1deg)}
        40% {transform: rotateZ(-1deg)}
        50% {transform: rotateZ(1deg)}
        60% {transform: rotateZ(-1deg)}
        70% {transform: rotateZ(1deg)}
        80% {transform: rotateZ(-1deg)}
    }
    p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style> */}
      <div
        className="container d-flex justify-content-center flex-row mt-5"
        style="flex-wrap: wrap;"
      >
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/asteroides_by_pieces/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/asteroides.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/memory_card/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/tarjeta_memoria.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/mi_calculadora/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/calculadora.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/ruleta_politica/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/ruleta_apruebo.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/nueva_constitucion/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/nueva_constitucion.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/snake/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/snake.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/rex_square/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/dinorex-apruebo.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/starwars/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/startwar.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/asteroidWithElements/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/asteroides_elements_chemistry.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/snakeFromThailand/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/thailand_snake.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/chemistryCards/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/card_chemistry.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/burnning/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/burning.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
        <div className="card shadow bg-dark m-4" style={{width: '18rem',opacity: '0.8;'}}>
          <a
            className="nav-link text-white p-0"
            href="https://nocivescience.github.io/asteroidWithStone/"
            target="_blank"
          >
            <img
              src="{% static 'portfolio/images/asteroides_captain_future.png' %}"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
