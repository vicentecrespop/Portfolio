import Image from "next/image";
import Link from "next/link";
import icon from "@/public/icon.svg";

export default function Banner({ img, title, description, url }) {
    return (
        <Link href={url} className="info-container h-full flex flex-col items-center justify-evenly relative rounded-[30px] p-5 text-[#0F0F0F] hover:text-white">
              <div className="my-5 sm:my-0">
                <Image src={img} alt='Banner' className="w-80 sm:w-40 max-w-[200px] max-h-[150px] rounded-2xl" />
              </div>
              <div className="w-full flex flex-col items-start pr-10 pt-3">
                <h4 className="text-sm text-[#BCBCBC]">{description}</h4>
                <h1 className="text-xl font-bold text-white">{title}</h1>
              </div>
              <div className="absolute w-full h-full opacity-30 hover:opacity-100">
                <div className="absolute bottom-5 right-5">
                  <Image src={icon} width={36} alt="Icon" />
                </div>
              </div>
        </Link>
    )
}