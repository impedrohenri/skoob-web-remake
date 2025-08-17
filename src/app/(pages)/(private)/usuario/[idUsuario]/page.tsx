import { getCookieString } from "@/app/utils/getCookieString";

import { cache } from "react";
import FirstSection from "./_components/FirstSection";
import SecondSection from "./_components/SecondSection";


import Link from "next/link";
import Button from "@/components/button/button";
import { ThemeSelector } from "@/components/themeMode/themeMode";
import LogoutButton from "./_components/LogoutButton";
import Section from "@/components/section/Section";

interface InfoParams {
    params: Promise<{
        idUsuario: string;
    }>;
}

const getUser = cache(async (id: string) => {
    const res = await fetch(`http://localhost:3000/api?url=/user/show/?user_id=${id}`, {
        headers: {
            cookie: await getCookieString(),
        }
    })
    const resp = await res.json();

    return resp.response;
});

export async function generateMetadata({ params }: InfoParams) {
    const { idUsuario } = await params;
    const res = await getUser(idUsuario)

    return {
        title: `${res.nome} - Perfil`
    }

}

export default async function Profile({ params }: InfoParams) {
    const { idUsuario } = await params;

    const user = await getUser(idUsuario);

    return (
        <>
            <div className="flex flex-wrap">
                <div className="flex flex-col max-h-fit items-center w-[100vw] md:w-[35%] lg:w-[30%]  gap-5 pt-10 px-1 md:p-8">
                    <FirstSection user={user} />
                </div>

                <div className="max-w-full md:w-[65%] lg:w-[45%] border-secondary border-x-2 h-full mx-auto gap-5 pt-10 px-1 sm:px-4">
                    <SecondSection user={user} />
                </div>

                <div className="hidden lg:block w-[25%]">
                    <ThemeSelector display="*" />
                    <Section>
                        <Link href='/'><Button>Home</Button></Link>
                        <LogoutButton></LogoutButton>
                    </Section>
                </div>
            </div>


        </>
    )
}