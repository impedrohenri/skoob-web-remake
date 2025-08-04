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
            <Section>
                <div className={`${display} ${styles.themeSection} `}>
                    <label htmlFor="lightMode">turn light</label>
                    <label htmlFor="darkMode">turn dark</label>

                    <label htmlFor="skoobTheme">turn blue</label>
                    <label htmlFor="skeeloTheme">turn green</label>
                </div>
            </Section>
        </>
    )
}