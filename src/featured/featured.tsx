import styles from "./featured.module.css"

export default function Featured() {

  return (
    <section>
      <div className={styles['section-container']}>
        <div className={styles['section-title']}>
          <h1>Featured</h1>
        </div>
      </div>
    </section>
  )
}