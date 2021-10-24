import { Section, SectionDivider, SectionTitle } from '../../common';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  Underline,
  UtilityList,
} from './ProjectsStyles';

const Projects = ({ projects }) => {
  const newProjects = projects.sort((a, b) => b - a);
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {newProjects.map((p) => {
          const {
            title,
            image,
            description,
            stack: { tags },
            visit,
            source,
          } = p.fields;
          return (
            <BlogCard key={title}>
              <Img src={image.fields.file.url} alt={title} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <Underline></Underline>
                <TagList>
                  {tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit} target="_blank">
                  Visit site
                </ExternalLinks>
                <ExternalLinks href={source} target="_blank">
                  Source code
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
