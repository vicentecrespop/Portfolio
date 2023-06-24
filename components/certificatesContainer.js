import Image from "next/image";

export default function CertificatesContainer({ image, name, url }) {
    return (
        <a href={url} target="_blank"  className="flex flex-col sm:flex-row items-center my-5 hover:text-blue-500">
            <div className="border border-white hover:border-blue-500 p-1 cursor-pointer">
                <Image src={image} width={100} height={100} alt="Certificado" className="bg-white" />
            </div>
            <span className="text-xl ml-3 cursor-pointer text-center sm:text-start mt-3 mb-10 sm:my-0">{name}</span>
        </a>
    )
}