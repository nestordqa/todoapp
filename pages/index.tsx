import Head from 'next/head'
import Image from 'next/image'
import AllTask from '../components/AllTask';
export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Todo app</title>
        <meta name="description" content="Here's gonna be project description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <AllTask/>
      </div>
    </>
  )
}
