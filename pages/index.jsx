import Seo from "../components/seo";

export default function Home() {
  return (
    <div>
      <Seo />
      <div className="container">
        <div className="row d-flex flex-row h-100 align-content-center align-items-center">
          <div className="col-md-6 py-5 pr-md-4 text-center text-md-right">
            <div>
              <a
                href="https://bit.ly/arthurronconi"
                rel="noopener noreferrer"
                target="blank"
              >
                <h1>
                  <span className="bracket">{`{ `}</span>artu.dev
                  <span className="bracket">{` }`}</span>
                </h1>
              </a>
              <p className="lead">Front End Design/Development</p>
            </div>
          </div>
          <div className="col-md-6 py-5 pl-md-4 text-center text-md-left">
            <div className="contact">
              <p className="h4">Arthur Ronconi</p>
              <p>
                <a href="mailto:arthur.ronconi@gmail.com">
                  arthur.ronconi@gmail.com
                </a>
                <br />
                <a href="https://wa.me/5527999862894">+55 27 999 862 894</a>
              </p>
              <p>
                <a
                  href="https://bit.ly/arthurronconi"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href="https://github.com/arthur-ronconi"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
