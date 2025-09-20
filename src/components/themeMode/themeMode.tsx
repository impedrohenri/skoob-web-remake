'use client'

import Section from '../section/Section';
import styles from './themeMode.module.css'
import { useEffect, useState } from "react";

interface props {
    display: string;
}

export default function ThemeMode(props: props) {

    const [Mode, setMode] = useState("")
    const [Theme, setTheme] = useState("")


    useEffect(() => {
        setMode(localStorage.getItem("app@Mode")||"")
        setTheme(localStorage.getItem("app@Theme")||"")
    }, [Mode])

    return (
        <>

            <div className={props.display}>
                <input 
                    type="radio" 
                    name="light_or_dark" 
                    onChange={() => { setMode('lightMode'); localStorage.setItem("app@Mode", "lightMode") }} 
                    id="lightMode" 
                    checked={Mode === "lightMode"} 
                />
                <input 
                    type="radio" 
                    name="light_or_dark" 
                    onChange={() => { setMode('darkMode'); localStorage.setItem("app@Mode", "darkMode") }} 
                    id="darkMode" 
                    checked={Mode === "darkMode"}
                />
                
            </div>


            <div className={props.display}>
                <input type="radio" name="skoob_or_skeelo" onChange={() => { setTheme('skoobTheme'); localStorage.setItem("app@Theme", "skoobTheme") }} id="skoobTheme" checked={Theme === "skoobTheme"} />
                <input type="radio" name="skoob_or_skeelo" onChange={() => { setTheme('skeeloTheme'); localStorage.setItem("app@Theme", "skeeloTheme") }} id="skeeloTheme" checked={Theme === "skeeloTheme"} />
            </div>

        </>
    )
}

export function ThemeSelector({ display }: props) {
    return (
        <>
            <Section className='px-2 mt-10'>
                <div className={`${display} ${styles.themeSection} text-sm`}>
                    <label htmlFor="lightMode">
                        <i className='fa fa-sun me-2'></i> 
                        Claro
                    </label>
                    <label htmlFor="darkMode">
                        <i className='fa fa-moon me-2'></i> 
                        Escuro
                    </label>

                    <label htmlFor="skoobTheme">
                        <i className='fa fa-book me-2'></i> 
                        Skoob
                    </label>
                    <label htmlFor="skeeloTheme">
                        <i className='fa fa-leaf me-2'></i> 
                        Skeelo
                    </label>
                </div>
            </Section>
        </>
    )
}