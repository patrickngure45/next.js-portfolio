import {
  Button,
  Container,
  LinksContainer,
  Logo,
  NavCenter,
  NavHeader,
} from './NavbarStyles';
import { FaAlignRight } from 'react-icons/fa';
import NavLinks from '../../../data/Links/Links';
import { Section } from '../../common';
const Navbar = ({ toggleMenu }) => {
  return (
    <Section>
      <Container id="navbar">
        <NavCenter>
          <NavHeader>
            <Logo onClick={() => window.scrollTo(0, 0)}>PK🙌</Logo>
            <Button onClick={toggleMenu}>
              <FaAlignRight />
            </Button>
          </NavHeader>
        </NavCenter>
        <LinksContainer>
          <NavLinks />
        </LinksContainer>
      </Container>
    </Section>
  );
};

export default Navbar;
