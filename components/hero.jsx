import {
  Container,
  HeroSection,
  HeroContainer,
  Heading,
  Lead,
  Button,
  HeroImage,
} from "../styles/styles";

import Image from "next/image";

export default function Hero() {
  return (
    <HeroSection>
      <Container>
        <HeroContainer>
          <div>
            <Heading>
              Hello<span>.</span>
            </Heading>
            <Lead>
              My name is <span>Arthur Ronconi.</span>
              <br />I am a <span>front end developer.</span>
            </Lead>
            {/* <Button href="#">Contact Me</Button> */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <a
                href="https://bit.ly/arthurronconi"
                rel="noopener noreferrer"
                target="blank"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <Image
                  src="/img/linkedin.svg"
                  alt="LinkedIn"
                  width={48}
                  height={48}
                />
              </a>
              <a
                href="https://github.com/arthur-ronconi"
                rel="noopener noreferrer"
                target="blank"
              >
                <Image
                  src="/img/github.svg"
                  alt="LinkedIn"
                  width={48}
                  height={48}
                />
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/img/hero.png"
              alt="A man sitting beside a giant laptop."
              width={682}
              height={444}
              layout="responsive"
            />
          </div>
        </HeroContainer>
      </Container>
    </HeroSection>
  );
}
