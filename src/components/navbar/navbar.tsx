import styles from './navbar.module.css'

export default function Navbar() {

  return (
    <div className={styles['navbar']}>
      <div className={styles['navbar-container']}>
        <h5>About</h5>
        <h5>Featured</h5>
        <h5>Techstack</h5>
        <h5>Projects</h5>
      </div>
    </div>
  )
}