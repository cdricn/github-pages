import styles from './techstack.module.css'
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";

export default function Techstack() {

  return (
    <section className={styles['section']}>
      <div className={styles['logo-html']}>
        <SiHtml5 />
        <span className={styles['hover-text']}>HTML</span>
      </div>
      <div className={styles['logo-js']}><SiJavascript /></div>
      <div className={styles['logo-css']}><SiCss3 /></div>
      <div className={styles['logo-ts']}><SiTypescript /></div>
      <div className={styles['logo-nextjs']}><SiNextdotjs /></div>
      <div className={styles['logo-react']}><SiReact /></div>
    </section>
  )
}