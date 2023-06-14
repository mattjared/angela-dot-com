import Image from 'next/image'
import Tiles from "./Tiles"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Home() {
  return (
    <main className='bg-purple-100'>
      <section className="py-10 md:pt-24 md:pb-12 container max-w-screen-xl mx-auto px-4 text-center">
        <Image src="/Angela.png" alt="" width="250" height="250" className="mx-auto mb-16 rounded-full" />
        <h1 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Angela Lekosiotis</h1>
        <h2 className='text-6xl font-bold'>Mid Market Account Executive @ Vercel</h2>
        <p className="font-bold text-gray-600 text-md md:text-xl my-16">Learning how to be an account executive 1 day at a time!
        </p>
      </section>
      <Contact />
      <Tiles />
      <Footer />
    </main>
  )
}
