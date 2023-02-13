import About from '@/components/About';
import Contact from '@/components/Contact';
import Landing from '@/components/Landing';
import Gallery from '@/components/Gallery';
import Navigation from '@/components/Navigation';
import Form from '@/components/Form';
// import { createClient } from 'contentful';
import { client, createContentfulClient } from '@/contentful/client';
import Footer from '@/components/Footer';



export default function Home({ landing, about, logoAsset, contact, gallery }) {

  return (
    <>
      <Navigation props={logoAsset} />
      <Landing props={landing} />
      <About props={about} />
      <Gallery props={gallery} />
      {/* <Contact props={contact} /> */}
      <Form />
      <Footer />
    </>
  )
};

export async function getStaticProps() {

  createContentfulClient();

  const landing = await client.getEntry('7EU6gdFwYgqeqDmsK0SaVM');
  const about = await client.getEntry('2Op6bwV5GoaBMp8l4iN7rP');
  const contact = await client.getEntry('aQ4aUeONnrEztHdAEFdQp');
  const gallery = await client.getEntry('5DUYZ6VAbTusti9nhYxQWQ');
  const logoAsset = await client.getAsset('1Vqg45aAjsyAbdrczafG3y');

  return {
    props: {
      landing,
      about,
      contact,
      logoAsset,
      gallery
    }
  }
};
