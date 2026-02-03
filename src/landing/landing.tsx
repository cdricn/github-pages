import { useState } from "react"
import styles from "./landing.module.css"

export default function Landing() {
  const [dropdown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  return (
    <div className={styles['test']}>
    </div>
  )
}