import Image from "next/image";
import Link from "next/link";

 export const metadata = {
    title: 'Home',
    description: 'Home page'
 }

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section className='flex flex-col justify-center min-h-screen relative'>
            <div className="z-10 flex items-center justify-center px-8 relative">
                <div className="hidden lg:flex mr-12">
                    <p className="text-xs capitalize text-custom_yellow">creative | ideas</p>
                </div>
                <h1 className="text-custom_yellow text-6xl uppercase font-semibold leading-normal text-center z-10 lg:w-2/3">Reveal the br[a]nd with brander.</h1>
                <Image 
                src='bgDifferent.svg'
                width={300}
                height={300}
                alt ='vector'
                className="absolute -rotate-90 z-0 md:rotate-0"
                />
                <Image 
                    src='bgDifferent.svg'
                    width={300}
                    height={300}
                    alt ='vector'
                    className="rotate-90 absolute z-0 md:rotate-180"
                    />
                <div className="hidden lg:flex ml-12">
                    <p className="text-xs capitalize text-custom_yellow">brander | features</p>
                </div>
            </div>
            <div className="absolute p-8 blur-3xl bg-custom_yellow bottom-0"></div>
            <div className="flex items-center justify-center mt-20 z-10 md:mt-40">
                <p className="border border-custom_yellow py-1 px-2 text-custom_yellow font-thin hover:font-normal">
                    <Link href='/pages/portfolio'>Start Now -&gt;</Link>
                </p>
            </div>
            </section>
    </main>
  )
}
