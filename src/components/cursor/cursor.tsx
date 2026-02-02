import styles from './cursor.module.css'
import { useEffect, useRef } from "react"

export default function Cursor() {
  const mainCursor = useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      if (mainCursor.current) {
        const mouseX = clientX - mainCursor.current.clientWidth / 2;
        const mouseY = clientY - mainCursor.current.clientHeight / 2;

        mainCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        mainCursor.current.style.top = `0`
        mainCursor.current.style.left = `0`

        document.addEventListener("scroll", ()=>{
          if (mainCursor.current) {
            mainCursor.current.style.transition = `.1s`
          }
        })
      }
    });
    return () => {
    };
  }, [])
  

  return (
    <div id="cursorID" 
      className={styles['cursor']} 
      ref={mainCursor}>
    </div>
  )
}