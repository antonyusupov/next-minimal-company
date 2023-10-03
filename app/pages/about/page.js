import Image from "next/image";
import { GiMagickTrick } from 'react-icons/gi';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { TbBrandBinance } from 'react-icons/tb';
import Link from 'next/link';
import { SiAdidas, SiNike, SiPuma, SiNewbalance, SiGoogle, SiFord, SiTesla, SiSpacex, SiBeatsbydre, SiCoinmarketcap } from 'react-icons/si';


export const metadata = {
    title: 'About',
    description: 'About Brander'
}

export default function About() {
    return (
        <section className="relative flex flex-col mx-8 min-h-screen">
            <div className="mt-28 relative min-h-full">
                <div className="relative flex items-center justify-between">
                    <div className="relative">
                        <h2 className="text-lg mt-2 md:text-2xl">About</h2>
                        <h3 className="text-2xl mt-4 pl-8 opacity-25 font-bold md:text-4xl">Branders</h3>
                        <p className="text-sm mt-4 opacity-30 font-bold md:text-lg">Achivements</p>
                    </div>
                    <div className="absolute right-20 shadow-lg shadow-custom_red">
                        <GiMagickTrick size={100} className="text-custom_red" />
                    </div>
                </div>
                <div className="mt-16">
                    <BiSolidQuoteLeft size={25} />
                    <div className="flex justify-center items-center">
                        <p className="text-center leading-10 text-lg opacity-50 lg:w-2/3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="flex justify-between mt-8">
                    <p className="py-1 px-2 border border-white"><Link href='/'>&lt;- Go To Home</Link></p>
                    <p className="py-1 px-2 border border-white"><Link href='/pages/portfolio'>Offers -&gt;</Link></p>
                </div>
                <div className=" mt-9 flex items-center justify-center flex-wrap gap-4 pb-6 md:gap-8 lg:gap-16 pt-20 ">
                    <p className="py-1 px-1 text-custom_yellow"><TbBrandBinance size={55} /></p>
                    <p className="py-1 px-1"><SiAdidas size={55} /></p>
                    <p className="py-1 px-1"><SiNike size={55} /></p>
                    <p className="py-1 px-1"><SiPuma size={55} /></p>
                    <p className="py-1 px-1 text-custom_blue"><SiNewbalance size={55} /></p>
                    <p className="py-1 px-1"><SiGoogle size={55} /></p>
                    <p className="py-1 px-1 text-custom_blue"><SiFord size={55} /></p>
                    <p className="py-1 px-1 text-custom_red"><SiTesla size={55} /></p>
                    <p className="py-1 px-1"><SiSpacex size={55} /></p>
                    <p className="py-1 px-1 text-custom_red"><SiBeatsbydre size={55} /></p>
                    <p className="py-1 px-1 text-custom_blue"><SiCoinmarketcap size={55} /></p>
                </div>
            </div>
            <div className="mt-20 flex flex-col justify-center items-center mb-8">
                <div className='bg-background-image-about bg-cover bg-center h-96 w-full '>
                    <div className="h-full z-10 flex flex-col items-center justify-between inset-0 backdrop-blur-sm">
                        <h2 className="text-custom_blue text-4xl font-bold text-center bg-black py-3 px-3">Will Grow Together</h2>
                        <p className="text-black text-md font-bold text-center bg-custom_White py-3 px-3">Making your brand unique is our goal</p>
                    </div>
                </div>
                <div className="w-full relative">
                    <div className="w-full mt-8">
                        <h3 className="text-xl text-custom_blue font-bold">Working With Passion</h3>
                        <p className="text-sm text-custom_blue mt-4">Working with passion is our motto!</p>
                    </div>
                    <hr className="border-none h-[1px] bg-custom_blue my-4"></hr>
                    <div className="flex flex-col items-center justify-center md:grid grid-cols-2">
                        <div className="mt-7 flex flex-col items-center justify-center">
                            <h4 className="text-lg text-custom_blue font-bold my-1">Making Brand Grow</h4>
                            <p className="text-sm text-custom_blue">We make your brand get noticed!</p>
                            <hr className="border-none w-1/2 h-[1px] bg-custom_blue mt-4"></hr>
                        </div>
                        <div className="mt-7 flex flex-col items-center justify-center">
                            <h4 className="text-lg text-custom_blue font-bold my-1">Making Brand Grow</h4>
                            <p className="text-sm text-custom_blue">We make your brand get noticed!</p>
                            <hr className="border-none w-1/2 h-[1px] bg-custom_blue mt-4"></hr>
                        </div>
                        <div className="mt-7 flex flex-col items-center justify-center">
                            <h4 className="text-lg text-custom_blue font-bold my-1">Making Brand Grow</h4>
                            <p className="text-sm text-custom_blue">We make your brand get noticed!</p>
                            <hr className="border-none w-1/2 h-[1px] bg-custom_blue mt-4"></hr>
                        </div>
                        <div className="mt-7 flex flex-col items-center justify-center">
                            <h4 className="text-lg text-custom_blue font-bold my-1">Making Brand Grow</h4>
                            <p className="text-sm text-custom_blue">We make your brand get noticed!</p>
                            <hr className="border-none w-1/2 h-[1px] bg-custom_blue mt-4"></hr>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}