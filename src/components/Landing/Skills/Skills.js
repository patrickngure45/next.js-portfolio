import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './SkillsStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../common/index';
import { GiSkills } from 'react-icons/gi';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
const Skills = () => {
  return (
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the world of web
        development, from Front-end To the Back-end. I usually use JavaScript as
        my core programming language especially Es6 modules. I am currently
        learning python and exploring the new features of React 18,JavaScript
        Es2021
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <RiReactjsLine size="3rem" color="#13adc7" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experiece with: <br />
              Html5,
              <br />
              Css3,JavaScript,
              <br /> React.js , Gatsby.js <br />
              and Next.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <FaNodeJs size="3rem" color="yellow" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with: <br />
              Node.js, express, <br />
              MongoDb, Strapi <br /> and Contentful
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <GiSkills size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Other</ListTitle>
            <ListParagraph>
              Experience with: <br />
              Git,Github,
              <br />
              Material-ui, <br />
              styled-components
              <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Skills;
