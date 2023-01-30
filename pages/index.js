import About from '@/components/About';
import Contact from '@/components/Contact';
import Landing from '@/components/Landing';
import Navigation from '@/components/Navigation';
// import { createClient } from 'contentful';

import { client, createContentfulClient } from '@/contentful/client';



export default function Home({ landing, about, nav }) {

  return (
    <>
      <Navigation props={nav} />
      <Landing props={landing} />
      <About props={about} />
      <Contact />
    </>
  )
};

export async function getStaticProps() {

  createContentfulClient();


  const landing = await client.getEntries({ content_type: 'landing' })
  const about = await client.getEntries({ content_type: 'about' })
  const nav = await client.getAsset('1Vqg45aAjsyAbdrczafG3y');

  return {
    props: {
      landing: landing.items,
      about: about.items,
      nav,

    }
  }
};
