import styles from './projectcard.module.css'
import { DataProps } from '../../lib/interface';

export default function ProjectCard({title, details, link, number} : DataProps) {
  return(
    <a className={styles['card-container']} href={link} target="_blank">
      <div className={styles['card-content']}>
        <h3 className={styles['card-title']}>
          {title}
        </h3>
        <p className={styles['card-description']}>
          {details}
        </p>
        <div className={styles['card-number']}>
          {number}
        </div>
      </div>
    </a>
  );
}
