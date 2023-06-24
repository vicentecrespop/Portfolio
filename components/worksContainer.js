import coder from '@/public/coder-logo.jpg'
import Image from 'next/image'
import Link from 'next/link'

import icon from '@/public/icon.svg';

export default function WorksContainer({ image, url, name, description }) {
    return (
        <Link href={url} target='_blank' className='clear-container relative p-4 flex flex-col justify-between rounded-2xl text-[#0F0F0F] hover:text-white min-h-[350px]'>
            <div>
                {/* <Image src={image} width={150} alt="Banner-Site" className='bg-black rounded-xl w-[300px] h-[250px] md:h-[200px] lg:h-[300px]' /> */}
                <Image src={image} width={300} alt="Banner-Site" className='rounded-[25px]'/>
            </div>
            <div className='flex justify-between mt-5 relative'>
                <div className='flex flex-col pr-10'>
                    <span className='text-[#BCBCBC] opacity-50 text-sm'>{description}</span>
                    <span className='text-xl text-white font-semibold'>{name}</span>
                </div>
            </div>
            <div className='absolute w-full h-full opacity-30 hover:opacity-100'>
                <div className='absolute right-10 bottom-10'>
                    <Image src={icon} width={36} alt='Icon' />
                </div>
            </div>
        </Link>
    )
}