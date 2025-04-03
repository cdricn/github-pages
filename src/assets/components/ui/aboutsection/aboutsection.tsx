import styles from './aboutsection.module.css'

export default function AboutSection() {

  // make every word slide up on page view

  return(
    <section id='about' className={styles['section']}>
      <div className={styles['about-container']}>
        <p className={styles['about']}>
        I'm a computer science graduate aspiring to be a 
        software developer residing in the Philippines. I 
        enjoy creating websites and I’m always in pursuit 
        to learn what makes design beautiful.
        </p>
      </div>
    </section>
  );
}