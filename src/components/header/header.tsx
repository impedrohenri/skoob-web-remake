'use client'
import { useEffect, useState } from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import { getCookie } from '@/app/utils/getCookie';
import Image from 'next/image';


export default function Header(){
  const [userId, setUserId] = useState<string|null>('')
  const [userProfilePic, setUserProfilePic] = useState<string|null>('')
  const [isMobile, setIsMobile] = useState(false)
  
  

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
        <Link href={'/'} className=' bg-black bg-opacity-0 hover:bg-opacity-5 rounded-2xl'> <Image src="/assets/skoob_img/skoob_sem_fundo.png" alt="logo texto" height={50} width={140}/> </Link>



        <Link href={`/usuario/${userId}`} className='ms-auto me-5 p-2 bg-black bg-opacity-0 hover:bg-opacity-10 rounded-2xl'> <Image src={userProfilePic||"/"} alt="" height={35} width={35} className='rounded-lg'/> </Link>
      </div>
    </header>
  )
}
