'use client'
import { useContext, useEffect, useState } from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import AuthContext from '@/app/contexts/AuthContext';
import { getCookie } from '@/app/utils/getCookie';

interface IUserInfo{
  success: boolean;
  response: {
    id: string;
    nome: string;
    foto_mini: string;
    foto_media: string;
    foto_grande: string;
    foto: string;
  }
}

export default function Header(){
  const [userId, setUserId] = useState<string|null>('')
  const [userProfilePic, setUserProfilePic] = useState<string|null>('')
  const [isMobile, setIsMobile] = useState(false)
  const [userInfo, setUserInfo] = useState<IUserInfo|null>(null)
  
  

  useEffect(()=>{
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){
      setIsMobile(true)
    }

    setUserId(getCookie('user_id'))
    setUserProfilePic(getCookie('user_foto'))
    
  }, [])

  return (
    <header className={`${styles.abc}`}>
      <div className={`px-10 ${styles.header} ${isMobile && styles.mobile}`}>
        <Link href={'/'} className=' bg-black bg-opacity-0 hover:bg-opacity-5 rounded-2xl'> <img src="/assets/skoob_img/skoob_sem_fundo.png" alt="logo texto" height={50} width={140}/> </Link>



        <Link href={`/usuario/${userId}`} className='ms-auto me-5 p-2 bg-black bg-opacity-0 hover:bg-opacity-10 rounded-2xl'> <img src={userProfilePic||"."} alt="" height={35} width={35} className='rounded-lg'/> </Link>
      </div>
    </header>
  )
}
