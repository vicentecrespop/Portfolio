import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-[#0F0F0F] text-[#676767] flex flex-col py-5 min-h-[350px] items-center justify-center">
            <div>
                <span className="text-4xl font-bold text-white cursor-default">Portfolio.</span>
            </div>
            <div className="flex flex-wrap text-xs my-5 px-3">
                <Link href='/' className="mx-3 hover:text-white">HOME</Link>
                <Link href='about' className="mx-3 hover:text-white">ABOUT</Link>
                <Link href='works' className="mx-3 hover:text-white">WORKS</Link>
                <Link href='contact' className="mx-3 hover:text-white">CONTACT</Link>
            </div>
            <div className="cursor-default">
                <span>&#169; All rights reserved by <span className="text-blue-500">Vicente Crespo</span>.</span>
            </div>
        </div>
    )
}