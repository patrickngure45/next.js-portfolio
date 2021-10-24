import styled from 'styled-components';

export const Container = styled.nav`
  top: 0;
  width: 100%;
  max-width: 1040px;
  padding-bottom: 10px;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Noto Sans Mono', monospace;
  position: fixed;
  background-color: #0f1624;
  z-index: 200;
  @media ${(props) => props.theme.breakpoints.md} {
    position: fixed;
  }
`;
export const NavCenter = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    grid-template-columns: auto;
  }
`;
export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 10px;
  outline: none;
  font-size: 2.5rem;
  font-weight: 700;
  color: crimson;
  /* padding: 0 1.5rem; */
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
  }
`;
export const Button = styled.button`
  font-size: 3rem;
  background: transparent;
  border: none;
  color: blueviolet;
  cursor: pointer;
  transition: 0.3s ease;
  display: none;
  margin-right: 10px;

  &:hover {
    transform: scale(0.95);
    cursor: pointer;
    color: #13adc7;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    margin-left: 10px;
  }
`;
export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  & li {
    margin-right: 1.5rem;
  }
  & a {
    text-transform: capitalize;
    font-size: 1.8rem;
    line-height: 32px;
    font-weight: 700;
    color: #fff;
    transition: 0.4s ease;
    &:hover {
      color: #13adc7;
      opacity: 1;
      cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      padding: 0.5rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;
