import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Menu from '../components/Menu'
import Services from '../components/Services'
import {client} from '../libs/client'

export default function Home({food}) {
  return (
    <>
    <Layout>
      <Head>
        <title>Food deilvery app</title>
        <meta name="description" content="Food delivery app" />
        <meta name="keywords" content="food, delivery, app, React, Nextjs" />
        <meta name="author" content="Sadeed pv" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Hero />
        <Services />
        <Menu food={food}/>
       
      </main>

    </Layout>
  </>
  )
}

export async function getServerSideProps() {
  const query = `*[_type == "food"]`;
  const food  = await client.fetch(query);
  return {
    props: {
      // props will be passed to the page component
      food
    },
  }
}
