import { IBook } from "@/app/interfaces/book";
import Image from "next/image";
import Link from "next/link";
interface IProps {
    book: IBook;
}

export default function BookIcon({ book }: IProps) {
    const colorDict = {
        1: 'text-green-500',
        2: 'text-yellow-500',
        3: 'text-blue-500',
        4: 'text-orange-500',
        5: 'text-black-500',
        6: 'text-red-500',
    }

    return (
        <div className="w-[18.5%] min-w-[90px] sm:min-w-0 max-h-[135px] sm:max-h-none relative  group transition-transform duration-300 sm:hover:scale-110 sm:hover:rotate-2 group-hover:z-10">
            <i className={`fa-sharp fa-solid fa-bookmark absolute top-[-1px] left-[5px] shadow-sm text-2xl z-10 ${colorDict[book.tipo as keyof object]}`}></i>
            <Link href={`/livro/${book.edicao.id}`}>
                <Image src={book.edicao.capa_media} width={500} height={1} alt={`Livro: ${book.edicao.titulo}`} className=" h-full rounded-lg sm:rounded-sm shadow-md shadow-slate-700/60" />
            </Link>

            <div className="background-color rounded-full mt-2 w-[97%] mx-auto">
                <div className={`py-[3px] bg-green-600 rounded-full`} style={{ width: `${book.percentual_lido}%` }}></div>
            </div>

            <span className="absolute left-1/2 -translate-x-1/2 top-1 sm:-top-8 scale-0 group-hover:scale-100 transition-all rounded bg-gray-600/70 text-white text-xs px-2 py-1 w-full text-center z-20">
                {book.edicao.titulo}
            </span>
        </div>
    )
}