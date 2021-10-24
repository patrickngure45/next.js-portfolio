import styled from 'styled-components';

export const Container = styled.aside`
  transform: translateX(-100%);
  font-family: 'Noto Sans Mono', monospace;
  @media ${(props) => props.theme.breakpoints.md} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    background-color: #0f1624;
    place-items: center;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
export const Button = styled.button`
  position: absolute;
  right: 2.75%;
  top: 1.75%;
  font-size: 3rem;
  background: transparent;
  border-color: transparent;
  transition: 0.3s ease;
  cursor: pointer;
  color: blueviolet;
  &:hover {
    color: #13adc7;
    transform: scale(0.95);
  }
`;

export const SocialLinksContainer = styled.ul`
  margin-top: 2rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;
  //social links animation
  & li {
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
    &:nth-of-type(1) {
      animation-delay: 0.25s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.5s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.75s;
    }
    &:nth-of-type(4) {
      animation-delay: 1s;
    }
    &:nth-of-type(5) {
      animation-delay: 1.25s;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(200px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  & a {
    color: #13adc7;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding: 0 5px;
    font-size: 2.5rem;

    &:hover {
      color: #fff;
    }
  }
`;

export const SidebarLinksContainer = styled.ul`
  & li {
    //sidebar links animation
    opacity: 0;
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
    &:nth-of-type(1) {
      animation-delay: 0.25s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.5s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.75s;
    }
    &:nth-of-type(4) {
      animation-delay: 1s;
    }
    &:nth-of-type(5) {
      animation-delay: 1.25s;
    }
    @keyframes slideRight {
      0% {
        transform: translateX(-200px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
  & li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: blueviolet;
    letter-spacing: 1px;
    /* margin-bottom: 0.5rem; */
    padding: 1rem 0;
    font-size: 2.5rem;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 3px;
    &:hover {
      color: green;
    }
  }
`;
