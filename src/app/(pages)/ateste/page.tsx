'use client'

export default function getCookies(){

    const fetchCookies = () => {

        fetch('https://www.skoob.com.br/login')
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log(res)
        })
    }

    return (
        <>
        <button onClick={fetchCookies}>aaa</button>
        </>
    )
}