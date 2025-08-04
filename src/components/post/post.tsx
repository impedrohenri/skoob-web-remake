'use client'
import { IPost } from "@/app/interfaces/posts";
import Link from "next/link";
import styles from './post.module.css'
import { useState } from "react";

interface IProsPost {
    post: IPost;
}

export default function Post({ post }: IProsPost) {
    const postAge = new Date().getTime() - new Date(post.created).getTime();
    const [isPostLiked, setIsPostLiked] = useState(post.liked);
    const [postLikes, setPostLikes] = useState(post.curtidas);

    const retornaPostAge = (postDate: number) => {

        const postIdade: number = parseInt((postDate / 1000).toFixed(0))

        if (postIdade < 60) return `${postIdade} segundo${postIdade !== 1 ? 's' : ''} atrás`;

        const minutos = Math.floor(postIdade / 60);
        if (minutos < 60) return `${minutos} minuto${minutos !== 1 ? 's' : ''} atrás`;

        const horas = Math.floor(minutos / 60);
        if (horas < 24) return `${horas} hora${horas !== 1 ? 's' : ''} atrás`;

        const dias = Math.floor(horas / 24);
        if (dias < 30) return `${dias} dia${dias !== 1 ? 's' : ''} atrás`;

        const meses = Math.floor(dias / 30);
        if (meses < 12) return `${meses} ${meses !== 1 ? 'meses' : 'mês'} atrás`;

        const anos = Math.floor(dias / 365);
        return `${anos} ano${anos !== 1 ? 's' : ''} atrás`;


    }

    const postsTypesDict = {
        '27': 'Fez um histórico de leitura',
    }

    const onLike = () => {
        try {
            setIsPostLiked(1);
            setPostLikes(postLikes + 1)
            fetch(`/api?url=https://www.skoob.com.br/v1/like/add/user/${post.id}/`)
        } catch (err) {
            
        }
    }

    const onDislike = () => {
        try {
            setIsPostLiked(0);
            setPostLikes(postLikes - 1)
            fetch(`/api?url=https://www.skoob.com.br/v1/like/delete/user/${post.id}/`)
        } catch (err) {

        }

    }


    return (
        <>
            <div className="border-b-2 border-secondary p-10">

                <div className="flex gap-5 mb-5">
                    <Link href={`/usuario/${post.usuario.id}`}>
                        <img src={post.usuario.foto_grande} alt="alt teste" width={70} className="rounded-full" />
                    </Link>

                    <div className="mt-2">
                        <Link className="font-semibold text-" href={`/usuario/${post.usuario.id}`}>
                            {post.usuario.nome}
                        </Link>

                        <span className="secondary-content text-sm font-medium ms-2">
                            {retornaPostAge(postAge)}
                        </span>

                        <br />
                        <span className="text-sm">
                            {postsTypesDict[post.tipo as keyof object]}
                        </span>
                    </div>
                </div>

                <p className="my-9">
                    {post.historico?.texto}
                </p>

                <div className="flex p-5 section-color rounded-3xl justify-between ps-8">

                    <div className="mt-2 w-3/4">
                        <span className="font-semibold">{post.edicao.titulo}</span><br />
                        <span>{post.edicao.autor}</span>
                        <span className={`${styles.clip_path_3} secondary-content text-sm mt-6`}>{post.edicao.sinopse}</span>
                    </div>

                    <div>
                        <img src={post.edicao.capa_media} alt="" width={100} className="rounded-2xl" />
                    </div>
                </div>

                <div className="flex m-5 pb-0 text-red-600 font-medium cursor-pointer w-fit">
                    {
                        isPostLiked == 0 ?
                            (<div onClick={onLike}>
                                <i className="far fa-heart me-2"></i>Curtir
                            </div>) :
                            (<div onClick={onDislike}>
                                <i className="fa fa-heart me-2"></i>{postLikes}
                            </div>)
                    }
                </div>
            </div>
        </>
    )
}