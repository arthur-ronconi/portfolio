import styled from "styled-components";
import { media } from "./breakpoints";
import { colors, fontWeight } from "./theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  @media (min-width: ${media.sm}) {
    width: ${media.sm};
    margin: 0 auto;
  }
  @media (min-width: ${media.md}) {
    width: ${media.md};
    margin: 0 auto;
  }
  @media (min-width: ${media.lg}) {
    width: ${media.lg};
    margin: 0 auto;
  }
  @media (min-width: ${media.xl}) {
    width: ${media.xl};
    margin: 0 auto;
  }
`;

export const Navbar = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${colors.gray};
`;

export const NavbarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarBrand = styled.div``;

export const Brand = styled.h1`
  color: ${colors.white};
  font-size: 1.25rem;
  span {
    color: ${colors.primary};
  }
`;
export const NavbarLinks = styled.div``;

export const Link = styled.a`
  color: ${colors.white};
  span {
    color: ${colors.primary};
    font-weight: ${fontWeight.bold};
  }
`;

export const HeroSection = styled.div`
  padding: 8rem 0;
  background-color: ${colors.black};
  color: ${colors.white};
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.h2`
  color: ${colors.white};
  span {
    color: ${colors.primary};
  }
  @media (min-width: ${media.xl}) {
    font-size: 4.5rem;
  }
`;
export const Lead = styled.h3`
  font-size: 1.25rem;
  font-weight: ${fontWeight.light};
  margin-bottom: 2rem;
  span {
    font-weight: ${fontWeight.bold};
  }
`;
export const Button = styled.a`
  background-color: ${colors.primary};
  padding: 0.75rem 3rem;
  border-radius: 5rem;
  font-weight: ${fontWeight.bold};
  transition: all 0.15s ease-in-out;
  &:hover {
    background-color: ${colors.darkPrimary};
    color: darken(${colors.white}, 15%);
  }
`;
export const HeroImage = styled.img`
  /* margin-right: -3rem; */
`;
