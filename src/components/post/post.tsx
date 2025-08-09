'use client'
import { IPost } from "@/app/interfaces/posts";
import Link from "next/link";
import styles from './post.module.css'
import { useState } from "react";
import ProgressBar from "../progressBar/progressBar";
import Modal from "../modal/modal";
import TextBox from "../textbox/TextBox";
import Button from "../button/button";
import Image from "next/image";

interface IProsPost {
  post: IPost;
}

export default function Post({ post }: IProsPost) {
  const postAge = new Date().getTime() - new Date(post.created).getTime();
  const [isPostLiked, setIsPostLiked] = useState(post.liked || 0);
  const [postLikes, setPostLikes] = useState(post.curtidas || 0);

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

  const onLike = () => {
    try {
      setIsPostLiked(1);
      setPostLikes(postLikes + 1)
      fetch(`/api?url=/activity/like/add/${post.id}/`)
    } catch (err) {
      throw err;
    }
  }

  const onDislike = () => {
    try {
      setIsPostLiked(0);
      setPostLikes(postLikes - 1)
      fetch(`/api?url=/activity/like/delete/${post.id}/`)
    } catch (err) {
      throw err;
    }

  }

  const onComment = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const rawComment = formData.get("Comentario");

    const payload = {
      Comentario: {
        comentario: rawComment
      }
    };



    try {
      fetch(`/api?url=https://api.skoob.com.br/api2/activity/comment/add/${post.atividade_id}/`, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDcyNjMwNSIsImVtYWlsIjoiaW1sdWNlYXRAZ21haWwuY29tIiwiaWF0IjoxNzU0MjI1NjgzLCJleHAiOjE3NTQ4MzA0ODMsImp0aSI6IjVkNTQ0ZWU5Y2JiZWE4OTdmMGU0YWFlMGZhNzI2YzNmIn0.8NuBqR9EMjdRDwS8d0h8lZ51RWUwQA7rWHinwIinB2o'
        },
        body: JSON.stringify(payload)
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          console.log(res)
        })
    } catch (err) {
      throw err;
    }
  }



  return (
    <>
      <div className="border-b-2 border-secondary p-10">

        <div className="flex gap-5 mb-5">
          <Link href={`/usuario/${post.usuario.id}`}>
            <Image src={post.usuario.foto_grande} alt="alt teste" width={70} height={70} className="rounded-full" />
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
              {postsTypesDict[String(post.tipo) as keyof object]}
            </span>
          </div>
        </div>

        <div className="my-9">
          {String(post.tipo) === '27' &&
            (<>
              <p>{post.historico?.texto}</p>
              <ProgressBar prop={post.historico} />
            </>)
          }
          {String(post.tipo) === '26' && post?.resenha?.resenha}
        </div>

        <div className="flex p-5 section-color rounded-3xl justify-between ps-8">

          <div className="mt-2 w-3/4">
            <span className="font-semibold">{post.edicao?.titulo}</span><br />
            <span>{post.edicao?.autor}</span>
            <span className={`${styles.clip_path_3} secondary-content text-sm mt-6`}>{post.edicao?.sinopse}</span>
          </div>

          <div>
            <Image src={post.edicao?.capa_grande} alt="" width={100} height={150} className="rounded-2xl" />
          </div>
        </div>

        <div className="flex m-5 pb-0 font-medium w-fit transition-colors duration-200 gap-36">
          <div className="flex text-red-600 hover:text-red-700 cursor-pointer">
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

          {/* Opção de comentar */}
          <div className="flex text-darkest hover:text-terciary cursor-pointer">
            <div>
              <Modal activateButton={
                <><i className="far fa-comment me-2 p-0"></i> Comentar</>
              }>
                <div>
                  <form onSubmit={onComment} className="flex flex-col w-full">
                    <div className="flex gap-5">
                      <Link href={`/usuario/${post.usuario.id}`}>
                        <Image src={post.usuario.foto_grande} alt="alt teste" width={50} height={50} className="rounded-full" />
                      </Link>

                      <div>
                        <Link className="font-semibold text-" href={`/usuario/${post.usuario.id}`}>
                          {post.usuario.nome}
                        </Link>

                        <span className="secondary-content text-sm font-medium ms-2">
                          {retornaPostAge(postAge)}
                        </span>

                        <br />
                        <span className="text-sm">
                          {postsTypesDict[String(post.tipo) as keyof object]}
                        </span>
                      </div>
                    </div>

                    <div className="my-8 text-sm">
                      {String(post.tipo) === '27' &&
                        (<>
                          <p>{post.historico?.texto}</p>
                          <ProgressBar prop={post.historico} />
                        </>)
                      }
                      <p>{String(post.tipo) === '26' && post?.resenha?.resenha}</p>
                    </div>

                    <div className="bg-white section-color flex p-5  rounded-3xl justify-between ps-8 text-sm mb-5">
                      <div className="mt-2 w-3/4">
                        <span className="font-semibold">{post.edicao?.titulo}</span><br />
                        <span>{post.edicao?.autor}</span>
                      </div>

                      <div>
                        <Image src={post.edicao?.capa_media} alt="" width={50} height={75} className="rounded-2xl" />
                      </div>
                    </div>

                    <TextBox name="Comentario" id="comentario" className='min-w-[100%] mb-5' />

                    <Button value='Postar' model='model-1' />
                  </form>
                </div>
              </Modal>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}