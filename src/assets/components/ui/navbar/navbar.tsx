import styles from './navbar.module.css'
import { useState } from 'react'

export default function Navbar() {
  const [sideNav, setSideNav] = useState(false);

  const navRotate = (degree:number, origin:string) => {
    const property : React.CSSProperties = {
      transform: `rotate(${degree}deg)`,
      transformOrigin: `${origin}`
    } 
    return sideNav ? property : undefined
  }

  const itemDelay = (delay:number) => {
    const property : React.CSSProperties = {
      transform: 'translateX(0%)',
      transition: `${delay}s`
    } 
    return sideNav ? property : undefined
  }

  return (
    <div className={styles['navbar-container']}>
      <div className={styles['nav-burger']}
        onClick={()=>setSideNav(!sideNav)}
      >
        <div className={styles['burger-line']}
          style={navRotate(-30, 'right')}></div>
        <div className={styles['burger-line']}
          style={navRotate(-30, 'center')}></div>
        <div className={styles['burger-line']}
          style={navRotate(30, 'right')}></div>
      </div>
      <div className={styles['nav-items-container']}>
        <div className={styles['item-container']}>
          <a href='#home' style={itemDelay(.4)}>Home</a>
        </div>
        <div className={styles['item-container']}>
          <a href='#about' style={itemDelay(.6)}>About</a>
        </div>
        <div className={styles['item-container']}>
          <a href='#project' style={itemDelay(.8)}>Projects</a>
        </div>
        <div className={styles['item-container']}>
          <a href='#others' style={itemDelay(1.0)}>Others</a>
        </div>
      </div>
    </div>
  )
}