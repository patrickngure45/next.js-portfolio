import { Section, SectionText, SectionTitle } from '../../common';
import { LeftContainer, LinksContainer } from './HeroStyles';
import Button from '../../common/Button';
import SocialLinks from '../../../data/SocialLinks/SocialLinks';
const Hero = () => {
  return (
    <Section row nopadding>
      <LeftContainer>
        <SectionTitle main center>
          Hello, my name is <br />
          Patrick Karanja. <br />
        </SectionTitle>
        <SectionText>
          I'm a software developer, Mostly working on front-end development
          using React, Next.js and Gatsby.js. I enjoy making web applications
          and exploring the web for new cool features and packages.
        </SectionText>
        <LinksContainer>
          <SocialLinks />
        </LinksContainer>
        <Button>Contact me</Button>
      </LeftContainer>
    </Section>
  );
};

export default Hero;
