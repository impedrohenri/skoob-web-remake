import { IUserInfo } from "@/app/interfaces/users";
import Section from "@/components/section/Section";
import Image from "next/image";


interface IProp {
    user: IUserInfo;
}

export default function FirstSection({ user }: IProp) {



    return (
        <>
            <div className=" w-[100%] md:hidden absolute top-[-60vw] z-1 overflow-hidden" >
                <Image src={user.foto || "/"} width={500} height={1} alt="" className="blur-[30px]" />
            </div>
            <Image src={user.foto_grande || "/"} width={10000} height={1} alt="" className="rounded-full w-[75%] max-w-[50vw] border-[1px] border-slate-600 z-10 md:z-auto" />

            <Section className="flex flex-col w-[100%] justify-start text-start py-3">
                <p className="me-auto w-[100%]">{user.nome}</p>
                <span className="secondary-content me-auto">@{user.apelido}</span>
            </Section>

            <div className="flex justify-evenly border-[2px] border-[var(--secondary-color)] rounded-full w-[100%] text-[clamp(0.75rem,1.5vw,1rem)] text-[var(--primary-color)] divide-x divide-[var(--secondary-color)]">
                <button className="w-[30%] py-2 md:py-1 hover:bg-[var(--section-color)] rounded-s-full">Convite</button>
                <button className="w-[30%] py-2 md:py-1 hover:bg-[var(--section-color)]">Seguir</button>
                <button className="w-[40%] py-2 md:py-1 hover:bg-[var(--section-color)] rounded-e-full">Mensagem</button>
            </div>

            <Section className="flex flex-col w-full justify-start text-start py-3">
                <p className="mb-3 font-semibold">Sobre mim</p>

                <div className="flex justify-evenly text-center items-center rounded-xl w-[100%] text-sm text-[var(--primary-color)] divide-x divide-[var(--section-color)] background-color py-2 ">
                    <div className="flex-[1.4]">
                        <span className="primary-content">SEGUIDORES</span> <br />
                        <span className="font-bold text-lg">{user.seguidores}</span>
                    </div>
                    <div className="flex-[1.2]">
                        <span className="primary-content">SEGUINDO</span> <br />
                        <span className="font-bold text-lg">{user.seguidos}</span>
                    </div>
                </div>


                <div className="flex flex-col min-w-full text-sm text-justify mt-6">
                    <i className="fa-solid fa-quote-left"></i>
                    <p className="">{user.about}</p>
                    <i className="fa-solid fa-quote-right ms-auto"></i>
                </div>
            </Section>
        </>
    )
}