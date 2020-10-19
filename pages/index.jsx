import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Seo from "../components/seo";

export default function Home() {
  return (
    <div>
      <Seo />
      <div className="container">
        <div className="row content">
          <a href="https://bit.ly/arthurronconi" rel="noopener noreferrer">
            <h1>
              <span className="bracket">{`{ `}</span>artu.dev
              <span className="bracket">{` }`}</span>
            </h1>
          </a>
          <p className="lead">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}
