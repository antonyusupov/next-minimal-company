import CardDisplayer from "@/app/utils/CardDisplayer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: 'Profile',
    description: 'Profile page'
}

export default function Portfolio () {
    return (
        <section className='relative min-h-screen flex flex-col items-center justify-center px-8 mb-8'>
            <div className="flex flex-col justify-center gap-9 items-start w-full py-12 mt-28 md:flex-row">
                <span className="w-1/6 italic text-sm mt-3 md:w-auto">Work</span>
                <h2 className="text-3xl mt-3 uppercase md:text-start w-1/2 ">Creating Love Brands</h2>
                <p className="bg-gradient-to-r from-custom_blue to-custom_red py-1 px-1 rounded-lg mt-3"><Link href='/pages/contact' className="outline-none">Email For More</Link></p>
            </div>
            <hr className="h-0.5 w-full bg-gradient-to-tr from-custom_red to-custom_blue border-none"></hr>
            <div className="w-full flex justify-center items-center">
                <CardDisplayer />
            </div>
            <div className="flex flex-col w-full lg:flex-row flex-wrap gap-12 mt-24">
                <div className="relative w-full lg:w-fit">
                <h2 className='text-sm text-custom_red'>What Brander Offers</h2>
                    <span className="text-custom_red text-4xl opacity-20 absolute">Brander Optimization</span>
                    <h3 className="text-2xl mt-4 pt-2 pl-6 text-custom_red">Brands Promotion</h3>
                    <p className="py-1 px-2 bg-custom_red text-black font-bold w-fit mt-5 ml-6">Brander Difference</p>
                    <Image 
                        src='/images/homeVectors/homeBg3.svg'
                        width={100}
                        height={100}
                        alt="vector"
                        className="hidden md:block absolute right-0 top-0 lg:hidden"
                    />
                    <Image 
                        src='/images/homeVectors/homeBg2.svg'
                        width={150}
                        height={150}
                        alt="vector"
                        className="hidden md:block absolute right-0 top-0 lg:hidden"
                    />
                    <Image 
                        src='/images/homeVectors/homeBg.svg'
                        width={200}
                        height={200}
                        alt="vector"
                        className="hidden md:block absolute right-0 top-0 lg:hidden"
                    />
                </div>
                <div className="mt-8">
                    <ul className="md:grid grid-cols-2 gap-4">
                        <li className="text-base text-custom_red">-&gt; SEO configuration for ranking up in Google search.</li>
                        <li className="text-base text-custom_red mt-2">-&gt; Exclusive Brand optimization creating logo, website, payment systems, development.</li>
                        <li className="text-base text-custom_red mt-2">-&gt; Tests made by senior developers with good background work experience.</li>
                        <li className="text-base text-custom_red mt-2">-&gt; Clear and Professional content writers will work on your brand to optimize the look of your brand more professional look.</li>
                        <li className="text-base text-custom_red mt-2">-&gt; Professional website and secure payment system are made by professional and elite developers.</li>
                    </ul>
                </div>
                <div className="lg:w-full">
                    <div className="mt-10 lg:flex w-full justify-between items-end">
                        <div className="lg:w-1/2">
                            <h4 className="py-1 px-2 text-lg text-custom_red border border-custom_red">Achivements of Brander</h4>
                            <div className="flex flex-wrap border border-custom_red gap-2 py-1 px-1 md:grid grid-cols-2 lg:flex">
                                <p className="py-1 px-2 text-custom_red border border-custom_red w-fit">Best Optimization</p>
                                <p className="py-1 px-2 text-custom_red border border-custom_red w-fit">SEO Configuratin Awarded</p>
                                <p className="py-1 px-2 text-custom_red border border-custom_red w-fit">Clean Content Wrinting</p>
                                <p className="py-1 px-2 text-custom_red border border-custom_red w-fit">Exclusive Design</p>
                                <p className="py-1 px-2 text-custom_red border border-custom_red w-fit">Best Developers Award</p>
                                <p className="py-1 px-2 text-custom_red border border-custom_red w-fit">Best Developers Award</p>
                                <p className="py-1 px-2 text-custom_red border border-custom_red w-fit">Best Developers Award</p>
                                <p className="py-1 px-2 text-custom_red border border-custom_red w-fit">Best Developers Award</p>
                            </div>
                        </div>
                        <p className="mt-4 py-1 px-2 border border-custom_red w-fit rounded-xl text-sm font-bold text-custom_red h-fit "><Link href='/pages/contact'>Email For Details </Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}