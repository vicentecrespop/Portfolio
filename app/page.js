import Image from "next/image";
import Banner from "@/components/banner";
import Socials from "@/components/socials";

import profile from '../public/profile.jpg'
import imagineshop from '../public/site-imagineshop.png'
import imgImagine from '@/public/imagineshop-template.png'
import signature from '../public/assinatura.png'
import pin from '../public/pin.png'
import WorkTogether from "@/components/workTogether";
import Link from "next/link";
import icon from '@/public/icon.svg';
import AnimatedLabel from "@/components/animatedLabel";
import ServicesOffering from "@/components/servicesOffering";

export default function Home() {
  return (  
    <div className="flex justify-center bg-[#0F0F0F]">
    <main className="min-h-screen pt-[150px] bg-[#0F0F0F] text-white lg:min-w-[960px] lg:w-[65vw]">
      <div className="grid grid-flow-row auto-row-min sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
        <Link href="about" className="info-container mx-5 lg:mx-0 lg:ml-5 flex flex-col sm:flex-row items-center sm:items-start rounded-[30px] text-[#0f0f0f] hover:text-white">
          <div className="w-[240px] sm:w-[224px] sm:min-w-[224px] lg:min-w-[180px] h-[224px] sm:h-[280px] lg:h-[270px] sm:me-5 overflow-hidden mx-[20px] mt-[30px] rounded-tl-2xl rounded-br-2xl sm:mx-7 sm:my-7">
            <Image src={profile} width={400} alt="Profile" className="w-[300px] max-w-[300px] ms-[-20px] sm:ms-[-30px] lg:ms-[-50px] mt-[-50px]"/>
          </div>
          <div className="w-full h-auto sm:h-full sm:flex-grow sm:w-auto flex justify-between m-[30px] sm:my-[50px] sm:ms-0 relative">
            <div className="flex flex-col w-full items-center sm:items-start">
              <h4 className="text-sm text-[#BCBCBC]">FULL STACK DEVELOPER</h4>
              <h1 className="text-3xl text-white mb-3">Vicente Crespo.</h1>
              <span className="text-[#9f9f9f] pr-[60px] ps-5 sm:ps-0 sm:pr-0">I am a Full Stack Web/Mobile Developer based in Florianópolis.</span>
            </div>
            <div className="absolute w-full h-full opacity-30 hover:opacity-100">
                <div className="absolute bottom-[-10px] right-[20px] sm:bottom-[75px] sm:right-[-10px]">
                  <Image src={icon} width={36} alt="Icon" />
                </div>
              </div>
          </div>
        </Link>

        <div className="flex flex-col mx-5">
          <AnimatedLabel />
          <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Banner img={signature} title='Credentials' description='ABOUT ME' url="credentials" />
            <Banner img={imgImagine} title='Projects' description='SHOWCASE' url="works" />
            
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-5 m-5">
        <div className="lg:col-span-1">
          <Banner img={imagineshop} title='GFonts' description='BLOG' url="/" />
        </div>
        <div className="sm:col-span-2 sm:row-start-2 lg:row-start-auto">
          <ServicesOffering />
        </div>
        <div className="lg:col-span-1 sm:row-start-1 lg:row-start-auto">
          <Socials title='Profiles' description='STAY WITH ME'/>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-5 m-5 mb-0">
        <div>
          <Banner img={pin} title='Florianópolis - SC, Brazil' description='FROM' url="contact"  />
        </div>
        <div>
          <WorkTogether />
        </div>
      </div>
    </main>
    </div>
  )
}
