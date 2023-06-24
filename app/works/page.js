import WorksContainer from "@/components/worksContainer";

import { alwaysbmx, mcdonalds, calculadora, gastosmensais, imagineshop, qrcode } from "../constants/projects";
import Image from "next/image";

import star from '@/public/star.png';

export default function Works() {
    return (
        <div className="flex justify-center bg-[#0F0F0F]">
        <main className="min-h-screen pt-[130px] bg-[#0F0F0F] text-white flex flex-col-reverse sm:flex-row md:flex-row sm:justify-center items-center md:items-start lg:min-w-[960px] lg:w-[65vw]">
            <div className="grid grid-rows-2 gap-5 m-5 sm:mr-0 self-center sm:self-start">
                {/* 2 Works Container */}
                <WorksContainer description={qrcode.description} name={qrcode.name} image={qrcode.image} url={qrcode.url} />
                <WorksContainer url={gastosmensais.url} description={gastosmensais.description} name={gastosmensais.name} image={gastosmensais.image} />
            </div>
            <div className="flex flex-col">
                <div className="flex items-center justify-center">
                    <div>
                        <Image src={star} width={28} alt="Start" className="md:w-[36px] lg:w-[50px]" />
                    </div>
                    <h3 className="text-[26px] sm:text-[36px] lg:text-[54px] font-semibold mx-3 sm:mx-0 md:mx-3">ALL PROJECTS</h3>
                    <div>
                        <Image src={star} width={28} alt="Start" className="md:w-[36px] lg:w-[50px]"/>
                    </div>
                </div>
                <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5 m-5">
                    {/* 2 Works Container */}
                    <WorksContainer url={imagineshop.url} description={imagineshop.description} name={imagineshop.name} image={imagineshop.image} />
                    <WorksContainer url={calculadora.url} description={calculadora.description} name={calculadora.name} image={calculadora.image} />
                </div>
                <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5 m-5 mt-0">
                    {/* 2 Works Container */}
                    <WorksContainer url={alwaysbmx.url} description={alwaysbmx.description} name={alwaysbmx.name} image={alwaysbmx.image} />
                    <WorksContainer url={mcdonalds.url} description={mcdonalds.description} name={mcdonalds.name} image={mcdonalds.image} />
                </div>
            </div>

        </main>
        </div>
    )
}