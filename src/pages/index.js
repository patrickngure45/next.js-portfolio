import Hero from '../components/Landing/Hero/Hero';
import Layout from '../layout/Layout';
import BackgroundAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import { Section } from '../components/common';
import { createClient } from 'contentful';
import Projects from '../components/Landing/Projects/Projects';
import Skills from '../components/Landing/Skills/Skills';
import About from '../components/Landing/About/About';
import Contact from '../components/Landing/Contact/Contact';
import Head from 'next/head';

export default function Home({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Ngure-PK</title>
        <meta property="og:title" content="Patrick Portfoilio" key="title" />
      </Head>
      <Section grid displaynone>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <About />
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: 'projects',
  });
  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projects: res.items,
    }, // will be passed to the page component as props
  };
}
