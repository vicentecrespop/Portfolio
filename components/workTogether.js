import Image from "next/image";
import Link from "next/link";

import icon from "@/public/icon.svg";

export default function WorkTogether({ title, description }) {
    return (
        <Link href="contact" className="info-container h-full flex flex-col items-center justify-evenly relative rounded-[30px] p-5 text-[#0F0F0F] hover:text-white">
              {/* <div className="my-5 sm:my-0">
                <Image src={img} alt='Banner' className="w-80 sm:w-40" />
              </div> */}
              <div className="w-full flex flex-col items-start pr-10">
                <h1 className="text-4xl sm:text-5xl text-white font-bold">Let's Work <span className="text-blue-500">Together</span></h1>
              </div>
              {/* <div className="absolute bottom-5 right-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                    <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
              </div> */}
              <div className="absolute w-full h-full opacity-30 hover:opacity-100">
                <div className="absolute bottom-5 right-5">
                  <Image src={icon} width={36} alt="Icon" />
                </div>
              </div>
        </Link>
    )
}