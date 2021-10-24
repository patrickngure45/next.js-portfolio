import { FaTimes } from 'react-icons/fa';
import {
  Button,
  Container,
  SidebarLinksContainer,
  SocialLinksContainer,
} from './SidebarStyles';
import SidebarLinks from '../../../data/Links/Links';
import SocialLinks from '../../../data/SocialLinks/SocialLinks';
import { Section } from '../../common';

const Sidebar = ({ toggleMenu, isOpen }) => {
  return (
    <Section>
      <Container isOpen={isOpen}>
        <Button onClick={toggleMenu}>
          <FaTimes />
        </Button>
        <div onClick={toggleMenu}>
          {isOpen ? (
            <>
              <SidebarLinksContainer>
                <SidebarLinks />
              </SidebarLinksContainer>
              <SocialLinksContainer>
                <SocialLinks />
              </SocialLinksContainer>
            </>
          ) : (
            ''
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Sidebar;
