import Image from "next/image";
import Link from "next/link";

import icon from "@/public/icon.svg";

export default function Socials({ description, title }) {
    return (
        <div className="info-container h-full flex flex-col items-center justify-evenly relative rounded-[30px] p-5 text-[#0F0F0F] hover:text-white">
              <div className="my-5 sm:my-0">
                <div className="border border-[#FFF2] rounded-3xl relative h-full socials-bg">
                </div>
                <div className="grid grid-cols-2 gap-5 rounded-3xl py-3 px-5 relative top-[-71px] z-[200] bg-transparent">
                    <Link href="https://github.com/vicentecrespop" target="_blank" className="bg-[#0F0F0F60] flex justify-center items-center text-white border border-[#FFF3] rounded-full p-2 hover:text-black hover:bg-white hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </Link>
                    <Link href="https://www.linkedin.com/in/vicente-crespo-733251238/" target="_blank" className="bg-[#0F0F0F60] flex justify-center items-center border border-[#FFF3] text-white rounded-full p-3 hover:text-black hover:bg-white hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </Link>
                
                </div>
              </div>
              <div className="w-full flex flex-col items-start">
                <h4 className="text-sm text-[#BCBCBC]">{description}</h4>
                <h1 className="text-xl text-white font-bold">{title}</h1>
              </div>
              {/* <div className="absolute bottom-5 right-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                    <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
              </div> */}
              <Link href="contact" className="absolute w-full h-full opacity-30 hover:opacity-100">
                <div className="absolute bottom-5 right-5">
                  <Image src={icon} width={36} alt="Icon" />
                </div>
              </Link>
        </div>
    )
}