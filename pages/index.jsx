import Seo from "../components/seo";
import {
  Navbar,
  Container,
  NavbarBrand,
  NavbarContainer,
  Brand,
  NavbarLinks,
  Link,
} from "../styles/styles";
import Nav from "../components/nav";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <Seo />
      <Nav />
      <Hero />
    </div>
  );
}
