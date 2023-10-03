import Image from "next/image";
import { BiLogoGithub, BiLogoDiscordAlt } from 'react-icons/bi';
import { AiOutlineMail, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import Link from "next/link";

// FaCentos
export default function Contact () {
    return (
        <section className="relative flex flex-col justify-between mx-8 min-h-screen">
            <div className="mt-28 pt-28 flex flex-col items-center relative min-h-full min-w-full">
                <div className="flex justify-center items-center absolute min-h-full min-w-full">
                    <div className=" flex items-center justify-center min-h-full min-w-full">
                        <h3 className="text-lg uppercase text-custom_blue font-bold">Brander</h3>
                        <Image 
                            src='/images/homeVectors/homeBg.svg'
                            width={200}
                            height={200}
                            alt ='vector'
                            className="absolute"
                        /> 
                        <Image 
                            src='/images/homeVectors/homeBg2.svg'
                            width={300}
                            height={300}
                            alt ='vector'
                            className="absolute mt-4"
                        />
                        <Image 
                            src='/images/homeVectors/homeBg3.svg'
                            width={400}
                            height={400}
                            alt ='vector'
                            className="absolute mt-4"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-36 relative">
                <div className="flex flex-col justify-center items-center mt-8 z-10">
                    <h2 className="text-center my-8 text-2xl">Contact Us</h2>
                    <p className="text-center text-sm opacity-50 lg:w-1/2">Contact us from social media or send us an email. Our team will get in touch within five bussiness days. Details will be discussed with professional developers and managers of the department according to your needs. We will grow your bussiness together, your company and brand will not be the same again with the professional touch.</p>
                </div>
                <div className="hidden md:block absolute py-6 px-6 blur-2xl bg-custom_blue right-0 bottom-0 z-0"></div>
                <div className="hidden md:block absolute py-4 px-4 blur-2xl bg-custom_blue left-0 top-0 z-0"></div>
            </div>
            <div className=" w-full flex justify-center gap-8 pb-8">
                <p><Link href='/'><BiLogoGithub size={35} /></Link></p>
                <p><Link href='/'><BiLogoDiscordAlt size={35} /></Link></p>
                <p><Link href='/'><AiFillFacebook size={35} /></Link></p>
                <p><Link href='/'><AiFillLinkedin size={35} /></Link></p>
                <p><Link href='/'><AiOutlineMail size={35} /></Link></p>
            </div>
        </section>
    )
}