import Image from 'next/image'
import styles from './logoSideLayer.module.css'

export default function LogoSideLayer() {

    return (
        <>
            <div className={`flex items-center justify-center h-full w-full md:w-5/12 ${styles.background}`}>
                <div className='flex items-center h-32'>
                    <Image src='/assets/skoob_img/coruja_branca_skoob_fundo_transparente.png' alt="logo" width={1000} height={50} className='my-4 w-[51.9px] h-[62.3px]' />
                    <Image src='/assets/skoob_img/skoob_sem_fundo.png' alt="logo" width={1000} height={50} className='my-4 w-[240px] h-[76.3px]' />
                </div>
            </div>

        </>
    )
}