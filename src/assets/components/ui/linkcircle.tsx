import styles from './linkcircle.module.css'
import { LinkCircleProps } from '../../lib/interface'
import { animDelay } from '../../lib/utils'

export default function LinkCircle({url, img, alt, delay} : LinkCircleProps) {
  if (url==="") {
    return (
      <div className={styles['link-circle-container']} style={animDelay(.2, .3, delay)}>
        <div className={styles['empty']}></div>
      </div>
    )
  }
  else {
    return (
      <a href={url} 
        target='_blank' 
        className={styles['link-circle-container']}
        style={animDelay(.2, .3, delay)}>
          <img src={img} alt={alt} className={styles['img']}/>
      </a>
    )
  }
}