import styles from "./landing.module.css";

export default function Landing() {

  return (
    <section className='section'>
      <div className='content-wrapper'>
        <div className={styles['map-container']}>
          <span className={styles['bottom-border']}></span>
          <div className={styles['map']}></div>
          <div className={styles['header-container']}>
            <h1>NAMEAA<br/>HEADERAAA</h1>
          </div>
        </div>
        <div className={styles['info-container']}>
          <div className={styles['flex-item']}>
            <p>
              Some normal text to explain an about me section. This way I won’t need to make a bum about me section.
            </p>
          </div>
          <div className={[styles['flex-item'], styles['links-container']].join(' ')}>
            <div className={styles['links']}>
              <a href="./"></a>
              <a href="./"></a>
            </div>
            <div className={styles['links']}>
              <a href="./"></a>
              <a href="./"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}