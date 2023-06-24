import dot from '@/public/dot.svg';
import Image from 'next/image';

export default function AnimatedLabel() {
    return (
        <div className="info-container flex items-center justify-center rounded-[30px] py-4 px-6 text-xs mb-5 mt-5 lg:mt-0 relative">
            <div className="animated-label">
                <div className="animated-label-item">
                    <p className='flex items-center'>
                        <Image src={dot} height={12} alt='Dot' className='mx-5' />
                        <span>VICENTE CRESPO | <b className='text-white'>FULL STACK DEVELOPER</b> | FLORIANÓPOLIS, SC</span> 
                        <Image src={dot} height={12} alt='Dot' className='mx-5' />
                    </p>   
                </div>
                <div className="animated-label-item">
                    <p className='flex items-center'>
                        <Image src={dot} height={12} alt='Dot' className='mx-5' />
                        <span>VICENTE CRESPO | <b className='text-white'>FULL STACK DEVELOPER</b> | FLORIANÓPOLIS, SC</span>
                        <Image src={dot} height={12} alt='Dot' className='mx-5' />
                    </p>
                </div>
            </div>
        </div>
    )
}