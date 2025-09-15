'use client'
import { IPost } from "@/app/interfaces/posts";
import { useState } from "react";

import Modal from "../modal/modal";
import TextBox from "../textbox/TextBox";
import Button from "../button/button";

import PostDetails from './postDetails'

interface IProsPost {
  post: IPost;
}

export default function Post({ post }: IProsPost) {
  const [isPostLiked, setIsPostLiked] = useState(post.liked || 0);
  const [postLikes, setPostLikes] = useState(post.curtidas || 0);

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
      <div className="border-b-2 border-secondary py-10 px-3 lg:p-10 ">

        <PostDetails post={post}/>


        {/* Parte inferior do post */}
        <div className="flex m-5 pb-0 font-medium w-fit transition-colors duration-200 gap-8">
          <div className="flex text-red-600 hover:text-red-700 cursor-pointer">
            {
              isPostLiked == 0 ?
                (<div onClick={onLike}>
                  <i className="far fa-heart me-2 [-webkit-text-stroke:0.5px_currentColor]"></i>Curtir
                </div>) :
                (<div onClick={onDislike}>
                  <i className="fa fa-heart me-2"></i>{postLikes}
                </div>)
            }
          </div>

          {/* Opção de comentar */}
          <div className="flex text-primary hover:text-darkest cursor-pointer">
            <div>
              <Modal activateButton={
                <><i className="far fa-comment text-strokr me-2 p-0 [-webkit-text-stroke:0.5px_currentColor]"></i> Comentar</>
              }>
                <div>
                  <form onSubmit={onComment} className="flex flex-col w-full">
                    <PostDetails post={post} />
                    <span></span>

                    <TextBox name="Comentario" id="comentario" className='min-w-[100%] my-5 ' placeholder='Faça um comentário' />

                    <Button>Postar</Button>
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