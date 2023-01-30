import About from '@/components/About';
import Contact from '@/components/Contact';
import Landing from '@/components/Landing';
import Navigation from '@/components/Navigation';
// import { createClient } from 'contentful';

import { client, createContentfulClient } from '@/contentful/client';

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
// });


export default function Home({ landing, about }) {

  return (
    <>
      <Navigation />
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

  return {
    props: {
      landing: landing.items,
      about: about.items

    }
  }
};
