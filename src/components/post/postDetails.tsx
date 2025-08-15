'use client'

import { IPost } from "@/app/interfaces/posts";
import Link from "next/link";
import ProgressBar from "../progressBar/progressBar";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "../button/button";
import BookRate from "../bookRate/bookRate";

interface IProps {
  post: IPost;
}

export default function PostDetails({ post }: IProps) {
  const [isSpoiler, setIsSpoiler] = useState(post.resenha?.spoiler||false);
  const [isClamped, setIsClamped] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [postAge, setPostAge] = useState<string>("");

  useEffect(() => {
    const diff = Date.now() - new Date(post.created).getTime();
    setPostAge(retornaPostAge(diff));
    
  }, [post.created]);


  useLayoutEffect(() => {
    if (!textRef.current) return;

    const checkOverflow = () => {
      if (!textRef.current) return;

      if (isClamped) {
        setShowButton(
          textRef.current.offsetHeight < textRef.current.scrollHeight
        );
      }
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(textRef.current);

    return () => observer.disconnect();
  }, [isClamped]);


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
    '26': 'Fez uma resenha',
    '27': 'Fez um histórico de leitura',
  }

  return (
    <>
      <div className="flex gap-5 mb-5">
        <Link href={`/usuario/${post.usuario.id}`}>
          <Image src={post.usuario.foto_grande} alt="alt teste" width={70} height={70} className="rounded-full" />
        </Link>

        <div className="mt-2">
          <Link className="font-semibold text-" href={`/usuario/${post.usuario.id}`}>
            {post.usuario.nome}
          </Link>

          <span className="secondary-content text-sm font-medium ms-2">
            {postAge}
          </span>

          <br />
          <span className="text-sm">
            {postsTypesDict[String(post.tipo) as keyof object]}
          </span>

          <BookRate rating={post.meu_livro.ranking}/>
        </div>
      </div>

      <div className={`my-8 mt-[1%] text-[0.95rem]`}>

        { isSpoiler ? (
          <div className="flex justify-center align-middle py-10 rounded-2xl border-2 border-solid border-gray-400">
            <Button variant="primary" onClick={() => {setIsSpoiler(false)}}>Alerta de spoiler!</Button>
          </div>
          ) : 
        <div ref={textRef} className={isClamped ? 'line-clamp-4' : ''}>
          <p className="font-semibold mb-2.5">{post?.resenha?.titulo_resenha}</p>
          {post?.resenha?.resenha}
          {post?.historico?.texto}
        </div>}


        {showButton &&
          (<div className="font-bold cursor-pointer text-primary hover:text-primary w-fit rounded-full" onClick={() => { setIsClamped(!isClamped) }}>

            {isClamped ?
              (<span>Ver tudo <i className="fa fa-arrow-down"></i></span>) :
              (<span>Ver menos <i className="fa fa-arrow-up"></i></span>)
            }

          </div>)}



        {
          String(post.tipo) === '27' &&
          <div className="flex w-full align-middle gap-2 pt-3">
            {!!post.historico.emoji_url && <Image src={post.historico.emoji_url || "/"} width={100} height={1} alt="" className="w-10 h-10"/>}
            <ProgressBar prop={post.historico} />
          </div>
        }
      </div>



      <div className="flex p-5 section-color rounded-2xl justify-between ">

        <div className="mt-2 w-3/4 flex flex-col justify-between">
          <div>
            <span className="font-semibold">{post.edicao?.titulo}</span><br />
            <span className="text-sm">{post.edicao?.autor}</span>
          </div>
          <span className={`line-clamp-2 secondary-content text-sm`}>{post.edicao?.sinopse}</span>
        </div>


        <Image src={post.edicao?.capa_grande} alt="" width={100} height={1} className="rounded-lg ms-auto w-1/4 lg:w-1/6 h-5/6" />

      </div>
    </>
  )
}