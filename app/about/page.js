import Banner from "@/components/banner";
import Socials from "@/components/socials";
import WorkTogether from "@/components/workTogether";

import signature from '@/public/assinatura.png'
import profile2 from '@/public/profile2.jpg'
import drop from '@/public/drop.png'
import star from '@/public/star.png'
import Image from "next/image";


export default function About() {
    return (
        <div className="flex justify-center bg-[#0F0F0F]">
        <main className="min-h-[60vh] w-full pt-[10px] bg-[#0F0F0F] text-white flex flex-col md:flex-row justify-center lg:min-w-[960px] lg:w-[65vw]">
            <div>
                {/* <div className="flex flex-col lg:flex-row items-center mx-5"> */}
                <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-5 items-end mx-5 -mt-10 sm:mt-0">
                    <div className="clear-container justify-self-center col-span-2 p-5 sm:p-7 rounded-3xl mx-5 sm:mx-0 sm:mr-5 w-fit -mb-32 sm:-mb-28 md:-mb-22 lg:mb-0 ">
                        <Image src={profile2} width={340} alt="Profile" className="rounded-[25px] w-auto lg:w-full"/>
                    </div>
                    <div className="grid col-span-3 grid-rows-2 grid-cols-1 gap-5">
                    {/* <div className="flex flex-col mx-0 lg:mx-0 h-full"> */}
                        <div className="flex items-end justify-center">
                            <div className="text-center text-[24px] sm:text-[36px] md:text-[50px] font-semibold flex items-center justify-center">
                                <div>
                                    <Image src={star} width={36} alt="Star" className="md:w-[50px]" />
                                </div>
                                <span className="my-5 lg:my-0">SELF-SUMMARY</span>
                                <div>
                                    <Image src={star} width={36} alt="Star" className="md:w-[50px]" />
                                </div>
                            </div>
                        </div>
                        <div className="clear-container rounded-2xl p-7 pt-24 sm:pt-0 flex flex-col h-auto sm:h-[240px] mt-1 justify-end relative">
                            <Image src={drop} width={40} alt="Drop" className="absolute top-0 left-5"/>
                            <span className="text-3xl sm:text-4xl font-semibold mb-3">Vicente Crespo</span>
                            <span>I am a Florianópolis-based full stack developer with a focus on web applications.</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-5 m-5">
                    <div className="clear-container flex flex-col rounded-2xl p-5">
                        <span>EDUCATION</span>
                        <div className="flex flex-col mt-5">
                            <span className="text-[#BCBCBC] opacity-50">2023 - Atualmente</span>
                            <span className="text-lg">Graduação em Desenvolvimento Full Stack</span>
                            <span className="text-[#BCBCBC] opacity-50 text-sm">Faculdade Estácio de Sá</span>
                        </div>
                        <div className="flex flex-col mt-5">
                            <span className="text-[#BCBCBC] opacity-50">2021 - 2022</span>
                            <span className="text-lg">Harvard CS50x Ciências da Computação</span>
                            <span className="text-[#BCBCBC] opacity-50 text-sm">Harvard University</span>
                        </div>
                    </div>
                    <div className="clear-container flex flex-col rounded-2xl p-5">
                        <span>COURSES</span>
                        <div className="flex flex-col mt-5">
                            <span className="text-[#BCBCBC] opacity-50">01/2022 - 05/2022</span>
                            <span className="text-lg">Curso Web Moderno Completo com JavaScript</span>
                            <span className="text-[#BCBCBC] opacity-50 text-sm">Cod3r Cursos</span>
                        </div>
                        <div className="flex flex-col mt-5">
                            <span className="text-[#BCBCBC] opacity-50">05/2022 - 06/2022</span>
                            <span className="text-lg">Curso MongoDB do básico ao avançado</span>
                            <span className="text-[#BCBCBC] opacity-50 text-sm">UDEMY</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-3 sm:grid-rows-2 lg:grid-rows-1 gap-5 mx-5">
                    <Socials title='Profiles' description='STAY WITH ME'/>
                    <div className="lg:col-span-2">
                        <WorkTogether />
                    </div>
                    <Banner img={signature} title='Credentials' description='ABOUT ME' url="credentials" />
                </div>
            </div>
        </main>
        </div>
    )
}