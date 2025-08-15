'use client'
import { IHistorico } from "@/app/interfaces/posts";

interface IHistProps{
    prop: IHistorico
}

export default function ProgressBar({prop}: IHistProps){
    const porcentagemLida = prop.porcentagem

    return (
        <>
            <div className="mt-[14px] secondary-content text-sm font-semibold flex flex-wrap justify-between w-full">
                <span></span>
                <span></span>

                <div className="section-color w-full rounded-full mb-1">
                    <div className={`p-1.5 bg-green-600 rounded-full`} style={{ width: `${porcentagemLida}%` }}></div>
                </div>

                <span className="ms-2">{porcentagemLida}%</span>
                <span  className="me-2">{prop.paginas} de {prop.paginas_total}</span>
            </div>
        </>
    )
}