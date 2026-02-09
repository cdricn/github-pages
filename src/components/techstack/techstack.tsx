import styles from './techstack.module.css'
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiCss3, SiHtml5, SiSwr } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

export default function Techstack() {

  return (
    <section className={styles['section']}>
      <div className={styles['section-container']}>
        <h2 className={styles['section-title']}>Techstack</h2>

        <div className={styles['section-tech']}>
          <div className={styles['logo']}>
            <div className={styles['logo-html']}><SiHtml5 /></div>
            <span className={styles['hover-text']}>HTML</span>
          </div>
          <div className={styles['logo']}>
            <div className={styles['logo-js']}><SiJavascript /></div>
            <span className={styles['hover-text']}>JavaScript</span>
            </div>
          <div className={styles['logo']}>
            <div className={styles['logo-css']}><SiCss3 /></div>
            <span className={styles['hover-text']}>CSS</span>
          </div>
          <div className={styles['logo']}>
            <div className={styles['logo-ts']}><SiTypescript /></div>
            <span className={styles['hover-text']}>TypeScript</span>
          </div>
          <div className={styles['logo']}>
            <div className={styles['logo-react']}><SiReact /></div>
            <span className={styles['hover-text']}>React</span>
          </div>
          <div className={styles['logo']}>
            <div className={styles['logo-nextjs']}><SiNextdotjs /></div>
            <span className={styles['hover-text']}>NextJS</span>
          </div>
          <div className={styles['logo']}>
            <div className={styles['logo-postgre']}><BsFiletypeSql /></div>
            <span className={styles['hover-text']}>SQL</span>
          </div>
          <div className={styles['logo']}>
            <div className={styles['logo-swr']}><SiSwr /></div>
            <span className={styles['hover-text']}>SWR</span>
          </div>
        </div>

      </div>
    </section>
  )
}