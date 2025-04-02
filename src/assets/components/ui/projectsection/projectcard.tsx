import styles from './projectcard.module.css'
import { DataProps } from '../../../lib/interface';

export default function ProjectCard({tags, title, details, link, number, image} : DataProps) {
  
  const linkImage:React.CSSProperties = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  
  return(
    <div className={styles['card-container']}>
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
        <div className={styles['card-tags']}>
          {tags}
        </div>
      </div>
      <a className={styles['card-image']} 
        href={link} 
        style={linkImage}
        target='_blank'
      >
        {
          image == "" ? <span>No Image</span> :null
        }
      </a>
    </div>
  );
}