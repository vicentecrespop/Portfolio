'use client';
import Link from "next/link";
import { useState } from "react"

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)

    const showMenu = () => {
        const openBtn = document.querySelector('#open-btn')
        const closeBtn = document.querySelector('#close-btn')
        const talkBtn = document.querySelector('#talk-btn')
        openBtn.classList.toggle('hidden')
        closeBtn.classList.toggle('hidden')
        talkBtn.classList.toggle('hidden')

        setOpenMenu(!openMenu)
    }


    return (
        <div className="flex justify-center bg-[#0F0F0F]">
        <div className="w-full bg-[#0F0F0F] z-[2000] text-white flex justify-center items-center absolute py-5 px-5 lg:min-w-[960px] lg:w-[65vw]">
            <div className="text-2xl font-bold absolute top-5 left-5">Vicente Crespo</div>
            <div className={`${openMenu ? 'flex flex-col mt-[80px] text-center' : 'hidden'} md:flex md:flex-row md:mt-2`} id="menu-items">
                <Link href='/' onClick={() => showMenu()} className="text-[#676767] hover:text-white my-3 md:my-0 mx-5">Home</Link>
                <Link href='about' onClick={() => showMenu()} className="text-[#676767] hover:text-white my-3 md:my-0 mx-5">About</Link>
                <Link href='works' onClick={() => showMenu()} className="text-[#676767] hover:text-white my-3 md:my-0 mx-5">Works</Link>
                <Link href='contact' onClick={() => showMenu()} className="text-[#676767] hover:text-white mt-3 mb-[80px] md:my-0 mx-5">Contact</Link>
            </div>
            <div className="hidden md:block absolute bottom-5 md:top-7 md:right-7" id="talk-btn">
                <Link href='contact' className="bg-[#323232] px-5 py-2 font-bold border-0 rounded-xl">Let&apos;s talk</Link>
            </div>
            <div className="md:hidden absolute top-5 right-5" id="open-btn" onClick={() => showMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            <div className="hidden md:hidden absolute top-5 right-5" id="close-btn" onClick={() => showMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>
        </div>
        </div>
    )
}