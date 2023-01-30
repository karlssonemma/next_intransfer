import About from '@/components/About';
import Contact from '@/components/Contact';
import Landing from '@/components/Landing';
import Navigation from '@/components/Navigation';
// import { createClient } from 'contentful';

import { client, createContentfulClient } from '@/contentful/client';



export default function Home({ landing, about, nav, contact }) {

  return (
    <>
      <Navigation props={nav} />
      <Landing props={landing} />
      <About props={about} />
      <Contact props={contact} />
    </>
  )
};

export async function getStaticProps() {

  createContentfulClient();

  const landing = await client.getEntry('7EU6gdFwYgqeqDmsK0SaVM');
  const about = await client.getEntry('2Op6bwV5GoaBMp8l4iN7rP');
  const contact = await client.getEntry('aQ4aUeONnrEztHdAEFdQp');
  const nav = await client.getAsset('1Vqg45aAjsyAbdrczafG3y');

  return {
    props: {
      landing,
      about,
      contact,
      nav,
    }
  }
};
