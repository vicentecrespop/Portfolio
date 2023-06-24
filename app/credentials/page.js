import CredentialsContainer from "@/components/credentialsContainer";
import { Cod3r, Estacio, Harvard, IFSC, MongoDB, TypeUdemy } from "../constants/education";
import SkillsContainer from "@/components/skillsContainer";
import Image from "next/image";
import CertificatesContainer from "@/components/certificatesContainer";

import profile from '@/public/profile2.jpg'
import Link from "next/link";

export default function Credentials() {
    return (
        <div className="flex justify-center bg-[#0F0F0F]">
        <main className="min-h-screen pt-[100px] bg-[#0F0F0F] text-white flex flex-col md:flex-row items-center md:items-start lg:min-w-[960px] lg:w-[65vw]">
            <div className="w-full md:w-[40vw] flex justify-center my-20 md:my-0 mx-10">
                <div className="w-fit h-fit flex flex-col items-center p-7 rounded-3xl clear-container mx-5">
                    <Image src={profile} width={300} alt="Profile"  className="rounded-2xl w-full md:w-[300px]"/>
                    <div className="text-center my-5">
                        <h2 className="text-3xl">Vicente Crespo</h2>
                        <span className="text-[#BCBCBC] opacity-50">@vicentecrespop</span>
                    </div>
                    <div className="flex justify-between">
                        <Link href='/contact' className="flex items-center justify-center h-12 w-12 border border-white rounded-full mx-1 hover:bg-white hover:text-black cursor-pointer">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg>
                            </span>
                        </Link>
                        <Link href='https://www.linkedin.com/in/vicente-crespo-733251238/' target='_blank' className="flex items-center justify-center h-12 w-12 border border-white rounded-full mx-1 hover:bg-white hover:text-black cursor-pointer">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                            </span>
                        </Link>
                        <Link href='/contact' className="flex items-center justify-center h-12 w-12 border border-white rounded-full mx-1 hover:bg-white hover:text-black cursor-pointer">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>
                            </span>
                        </Link>
                        <Link href='https://github.com/vicentecrespop' target='_blank' className="flex items-center justify-center h-12 w-12 border border-white rounded-full mx-1 hover:bg-white hover:text-black cursor-pointer">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                    <Link href='/contact' className="w-full bg-[#323232] py-3 px-10 rounded-2xl text-center mt-9 mb-2 hover:bg-white hover:text-black">
                        <span>Contact Me</span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col mx-5">
                <div>
                    <h3 className="text-xl font-bold mb-10">SOBRE MIM</h3>
                    <p className="mb-3">
                        Sou um Desenvolvedor Full Stack, pois assim como faço aplicações web frontend com design responsivo, consigo trabalhar também com 
                        banco de dados e a parte do backend de aplicações.
                    </p>
                    <p>
                        Estudo Desenvolvimento Full Stack na faculdade Estácio de Sá, além da faculdade, já fiz alguns cursos na área como
                        o curso CS50x de ciências da computação de Harvard, cujo foco principal é o desenvolvimento Back End em linguagens como C e Python,
                        e o curso Web moderno de Javascript da Cod3r, onde o foco é o desenvolvimento Web / Front End mas também ensina tecnologias para o Back End.
                    </p>
                </div>
                {/* <div>
                    <h3>EXPERIENCE</h3>
                    List with Experience Components 
                </div> */}
                <div>
                    <h3 className="text-xl font-bold my-10">EDUCAÇÃO</h3>
                    <CredentialsContainer credential={IFSC} />
                    <CredentialsContainer credential={Estacio} />
                    <CredentialsContainer credential={Harvard} />
                    <CredentialsContainer credential={Cod3r} />
                    <CredentialsContainer credential={TypeUdemy} />
                    <CredentialsContainer credential={MongoDB} />
                </div>
                <h3 className="text-xl font-bold mb-10">HABILIDADES</h3>
                <div className="flex flex-col sm:flex-row w-full">
                    <div className="w-1/2">
                        <SkillsContainer name="JavaScript" type="Linguagem de Programação" level="95%" />
                        <SkillsContainer name="HTML/CSS" type="Frontend" level="99%" />
                        <SkillsContainer name="ReactJS" type="Framework" level="93%" />
                        <SkillsContainer name="MongoDB" type="Banco de Dados" level="94%" />
                        <SkillsContainer name="VueJS" type="Framework" level="87%" />
                    </div>
                    <div className="w-1/2">
                        <SkillsContainer name="Python" type="Linguagem de Programação" level="90%" />
                        <SkillsContainer name="SQLite3" type="Banco de Dados" level="99%" />
                        <SkillsContainer name="Django" type="Framework" level="89%" />
                        <SkillsContainer name="TypeScript" type="Framework" level="83%" />
                        <SkillsContainer name="NextJS" type="Framework" level="95%" />
                    </div>
                </div>
                <div className="mt-10">
                    <h3 className="text-xl font-bold mb-10">CERTIFICADOS</h3>
                    <CertificatesContainer image={Harvard.image} name="Harvard CS50x Ciências da Computação" url={Harvard.certificate} />
                    <CertificatesContainer image={Cod3r.image} name="Cod3r Curso Web Completo JavaScript" url={Cod3r.certificate} />
                    <CertificatesContainer image={IFSC.image} name="Engenharia Eletrônica" url={IFSC.certificate} />
                    <CertificatesContainer image={MongoDB.image} name="Curso MongoDB do básico ao avançado" url={MongoDB.certificate} />
                    <CertificatesContainer image={TypeUdemy.image} name="Curso TypeScript do básico ao avançado" url={TypeUdemy.certificate} />
                </div>
            </div>
        </main>
        </div>
    )
}