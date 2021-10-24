import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';
import SocialLinks from '../../data/SocialLinks/SocialLinks';
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:254-791-180-137">+254-791-180-137</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ngurengure10@gmail.com">
            ngurengure10@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            &copy;copyright{new Date().getFullYear()}. Designed & Build by{' '}
            <span>Patrick Karanja </span>
            using <a href="https://nextjs.org">Next.js</a>
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialLinks />
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
