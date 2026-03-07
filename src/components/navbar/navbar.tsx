import styles from './navbar.module.css'

export default function Navbar() {

  return (
    <div className={styles['navbar']}>
      <h5>Home</h5>
      <div></div>
      <h5>Projects</h5>
      <div></div>
      <h5>Experience</h5>
      <div></div>
      <h5>Link</h5>
    </div>
  )
}