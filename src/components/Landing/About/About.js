import React from 'react';
import data from '../../../data/About/AboutData';
import { Section, SectionDivider, SectionTitle } from '../../common';
import {
  HeaderThree,
  Hr,
  TitleContent,
  Underline,
} from '../Projects/ProjectsStyles';
import {
  AboutContainer,
  AboutInfo,
  AboutStack,
  AboutTags,
  Img,
  RightContainer,
} from './AboutStyles';

const About = () => {
  const { title, stack, image, desc } = data[0];
  return (
    <Section id="about" style={{ paddingBottom: '30px' }}>
      <SectionDivider />
      <SectionTitle main>{title}</SectionTitle>
      <AboutContainer>
        <Img src={image} />
        <RightContainer>
          <TitleContent>
            <HeaderThree>I am Patrick</HeaderThree>
            <Hr />
          </TitleContent>
          <AboutInfo>{desc}</AboutInfo>
          <TitleContent>Stack</TitleContent>
          <Underline></Underline>
          <AboutStack>
            {stack.map((item, index) => {
              return <AboutTags key={index}>{item}</AboutTags>;
            })}
          </AboutStack>
        </RightContainer>
      </AboutContainer>
    </Section>
  );
};

export default About;
