import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../common';
import Form from './Form';

const Contact = () => {
  return (
    <Section nopadding id="contact">
      <SectionDivider />
      <SectionTitle main>Get in touch</SectionTitle>
      <Form />
      <SectionDivider />
    </Section>
  );
};

export default Contact;
