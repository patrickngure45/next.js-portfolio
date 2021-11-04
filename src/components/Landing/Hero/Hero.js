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
          <ul>
            <li style={{ listStyle: 'inside' }}>
              Two years experience working with React, JavaScript, HTML/CSS to
              deliver exceptional user experiences.
            </li>
            <li style={{ listStyle: 'inside' }}>
              Adept at contributing to a highly collaborative environment,
              finding solutions, and delivering customer satisfaction.
            </li>
            <li style={{ listStyle: 'inside' }}>
              Enjoys challenges, thrives in teams, hard worker, excellent
              communicator, and strong writing skills.
            </li>
          </ul>
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
