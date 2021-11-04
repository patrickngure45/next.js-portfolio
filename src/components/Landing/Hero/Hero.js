import { Section, SectionText, SectionTitle } from '../../common';
import { LeftContainer, LinksContainer } from './HeroStyles';
import Button from '../../common/Button';
import SocialLinks from '../../../data/SocialLinks/SocialLinks';
const Hero = () => {
  return (
    <Section row nopadding>
      <LeftContainer>
        <SectionTitle main center>
          Patrick Karanja <br />
          Front End Developer. <br />
        </SectionTitle>
        <SectionText>
          - Two years experience working with React, JavaScript, HTML/CSS to
          deliver exceptional user experiences.
          <br />
          - Adept at contributing to a highly collaborative environment, finding
          solutions, and delivering customer satisfaction.
          <br />
          - Enjoys challenges, thrives in teams, hard worker, excellent
          communicator, and strong writing skills.
          <br />
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
