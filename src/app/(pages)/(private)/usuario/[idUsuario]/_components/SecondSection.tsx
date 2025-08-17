"use client";

import Section from "@/components/section/Section";
import { IUserInfo } from "@/app/interfaces/users";
import { useEffect, useState } from "react";

import MetaSection from "./MetaSection";
import { IBookCaseLivros } from "@/app/interfaces/bookcase";
import { IPost } from "@/app/interfaces/posts";
import Post from "@/components/post/post";




interface IProp {
  user: IUserInfo;
}

export default function SecondSection({ user }: IProp) {
  const [bookcaseStats, setBookcaseStats] = useState<IBookCaseLivros>({} as IBookCaseLivros);
  const [posts, setPosts] = useState<IPost[]>([]);


  useEffect(() => {
    const URL = encodeURIComponent(`/bookcase/stats/?type=all&user_id=${user.id}`)
    fetch(`/api?url=${URL}`, {
      headers: {
        cookie: document.cookie.toString()
      },
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      setBookcaseStats(res.response.livros);
    })

    const URL2 = encodeURIComponent(`/feed/user/?user_id=${user.id}&limit=100`)
    fetch(`/api?url=${URL2}`, {
      headers: {
        cookie: document.cookie.toString()
      },
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      setPosts(res.response);
    })

  }, [user])


  return (
    <>
      <MetaSection user={user}></MetaSection>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 w-full border-y-[1px] border-secondary py-3 my-5">
        {!!bookcaseStats && [
          { "LIDOS": bookcaseStats.lido },
          { "LENDO": bookcaseStats.lendo },
          { "QUERO LER": bookcaseStats.quero_ler },
          { "RELENDO": bookcaseStats.relendo },
          { "ABANDONEI": bookcaseStats.abandonei },
          { "RESENHAS": bookcaseStats.resenhados },
        ].map((item, index) => {
          const [key, value] = Object.entries(item)[0];
          return (
            <Section key={index} className="flex-col h-min col-span-1 w-full p-2 text-center">
              <span className="text-[70%] text-nowrap">{key}</span>
              <span className="text-primary text-lg font-semibold">{value}</span>
            </Section>
          );
        })}
      </div>

      
      <div>
        {posts && posts.map((post, key) => {

        return (<Post post={post} key={key}/>)
      })}
      </div>

      
    </>
  )
}