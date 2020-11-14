import {
  Navbar,
  Container,
  NavbarBrand,
  NavbarContainer,
  Brand,
  NavbarLinks,
  Link,
} from "../styles/styles";

export default function Nav() {
  return (
    <nav>
      <Navbar>
        <Container>
          <NavbarContainer>
            <NavbarBrand>
              <Brand>
                <a href="/">
                  <span>{`{ `}</span>artu<span>{` }`}</span>
                </a>
              </Brand>
            </NavbarBrand>
            <NavbarLinks>
              {/* <Link href="#">
                <span>{`<`}</span>Contact<span>{`/>`}</span>
              </Link> */}
            </NavbarLinks>
          </NavbarContainer>
        </Container>
      </Navbar>
    </nav>
  );
}
