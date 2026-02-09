import styles from "./landing.module.css"

export default function Landing() {

  return (
    <section className={styles['section']}>
      <div className={styles['section-container']}>
        <h1 className={styles['section-title']}>
          <span>Name</span>
          <span>Namename</span>
        </h1>
        <p className={styles['section-info']}>
          Test description nice descripton very long web development yada yada
        </p>
        <div className={styles['section-links']}>
          <a href='' target='_'>Github</a>
          <a href='' target='_'>LinkedIn</a>
          <a href='' target='_'>itch.io</a>
        </div>
      </div>
    </section>
  )
}