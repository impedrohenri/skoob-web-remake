"use client";

import Section from "@/components/section/Section";
import Link from "next/link";
import { IUserInfo } from "@/app/interfaces/users";
import { useEffect, useState } from "react";
import { IBook } from "@/app/interfaces/book";
import BookIcon from "@/components/bookIcon/bookIcon";




interface IProp {
    user: IUserInfo;
}

interface IMetaStats {
    delay: number;
    percentual_lido: number;
    lido: number;
    total: number;
    direcao: "up" | "down";
    velocidade_ideal: number;
    velocidade_dia: number;
    paginas_lidas: number;
    paginas_total: number;

}

export default function MetaSection({ user }: IProp) {
    const [metaBooks, setMetaBooks] = useState<IBook[]>([]);
    const [userMetaStatus, setUserMetaStatus] = useState<IMetaStats>({} as IMetaStats);


    useEffect(() => {
        const URL = encodeURIComponent(`/bookcase/meta_stats/?user_id=${user.id}`)
        fetch(`/api?url=${URL}`, {
            headers: {
                cookie: document.cookie.toString()
            },
        }).then(res => {
                return res.json();
        }).then(res => {
            setUserMetaStatus(res.response);
        })

        const todaysYear = new Date().getFullYear()
        const URL2 = encodeURIComponent(`/bookcase/show/.json?page=1&limit=5&shelf_id=12&user_id=${user.id}&meta=${todaysYear}`)
        fetch(`/api?url=${URL2}`, {
            headers: {
                cookie: document.cookie.toString()
            },
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            setMetaBooks(res.response)
        })
    }, [user.id])


    return (
        <>
            <Section className="flex flex-col w-full text-start gap-3 h-full">
                <div className="flex justify-between w-full">
                    <Link href={'/meta'} className="me-auto text-sm text-primary hover:text-darkest font-semibold">Meta de Leitura 2025</Link>

                    <span className="secondary-content font-semibold text-sm">{userMetaStatus.lido || 0} de {userMetaStatus.total || 0}</span>
                </div>

                <div className="flex justify-between gap-2.5 sm:gap-[1.8%] overflow-x-auto overflow-y-visible sm:overflow-visible max-w-full pb-5" >
                    {
                        metaBooks.map((book, key) => {
                            return (
                                <BookIcon book={book} key={key} />
                            )
                        })
                    }
                </div>

                <div className="flex flex-col w-full">
                    <div className="background-color rounded-full mt-2 w-full mx-auto">
                        <div className={`py-[5px] ${userMetaStatus?.percentual_lido < 33
                            ? "bg-red-400"
                            : userMetaStatus?.percentual_lido < 66
                                ? "bg-yellow-400"
                                : "bg-green-600"
                            } rounded-full`} style={{ width: `${userMetaStatus.percentual_lido || 0}%` }}>

                        </div>
                    </div>

                    <div className="flex justify-between">
                        <span className={`font-semibold text-sm mt-2 ${userMetaStatus?.percentual_lido < 33
                            ? "text-red-400"
                            : userMetaStatus?.percentual_lido < 66
                                ? "text-yellow-400"
                                : "text-green-400"
                            }`}
                        >
                            <i className="fa fa-tachometer me-1.5"></i>
                            {userMetaStatus.direcao === "up" ? userMetaStatus.delay : -userMetaStatus.delay || 0}
                        </span>


                        <span className="flex text-sm secondary-content mt-2">{userMetaStatus.paginas_lidas || 0} de {userMetaStatus.paginas_total || 0}
                            <span className="ms-1 hidden sm:flex"> páginas (ritmo: {userMetaStatus.velocidade_dia || 0} por dia)</span>
                        </span>
                    </div>
                </div>

            </Section>
        </>
    )
}