import About from '@/components/About'
import Contact from '@/components/Contact'
import Landing from '@/components/Landing'
import Navigation from '@/components/Navigation'
import { createClient } from 'contentful'

let client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});


export default function Home({ landing }) {
  console.log(landing)
  return (
    <>
      {/* <Navigation /> */}
      <Landing props={landing} />
      <About />
      <Contact />
    </>
  )
};

export async function getStaticProps() {

  const res = await client.getEntries({ content_type: 'landing' })

  return {
    props: {
      landing: res.items
    }
  }
};
