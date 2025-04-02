import styles from './homesection.module.css'
import { SiItchdotio, SiGithub, SiLinkedin } from "react-icons/si";


export default function HomeSection() {

  return(
    <section className={styles['section']}>
      <div className={styles['home-header-container']}>
        <h1 className={styles['header']}>
          Hello, I'm Adrian!
        </h1>
        <div className={styles['links']}>
          <a href='https://github.com/cdricn' 
            target='_blank' 
            className={styles['link-container']}
            style={{backgroundColor: 'var(--color-dark)'}}
          >
            <SiGithub 
              className={styles['link-icon']}
              style={{color: 'var(--color-white)'}}
            />
          </a>
          <a href='https://www.linkedin.com/in/adrian-mcortezano/' 
            target='_blank' 
            className={styles['link-container']}
            style={{backgroundColor: 'var(--color-deepblue)'}}
          >
            <SiLinkedin 
              className={styles['link-icon']}
              style={{color: 'var(--color-white)'}}
            />
          </a>
          <a href='https://cdricn.itch.io/' 
            target='_blank' 
            className={styles['link-container']}
            style={{backgroundColor: 'var(--color-deepred)'}}
          >
            <SiItchdotio 
              className={styles['link-icon']}
              style={{color: 'var(--color-white)'}}
            />
          </a>
        </div>
      </div>
    </section>
  );
}