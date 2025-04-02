import styles from './homesection.module.css'

export default function HomeSection() {

  return(
    <section className={styles['section']}>
      <div className={styles['home-header-container']}>
        <h1 className={styles['header']}>
          Hello, I'm Adrian
        </h1>
        <div className={styles['links']}>
          <a href='' target='_blank' className={styles['link-container']}>
          </a>
          <a href='' target='_blank' className={styles['link-container']}>
          </a>
          <a href='' target='_blank' className={styles['link-container']}>
          </a>
        </div>
      </div>
    </section>
  );
}