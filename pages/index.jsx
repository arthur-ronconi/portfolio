import Seo from "../components/seo";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Favicon from "../components/favicon";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Favicon />
      <Seo />
      <Nav />
      <Hero />
    </div>
  );
}
