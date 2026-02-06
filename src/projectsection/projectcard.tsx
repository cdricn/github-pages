import styles from './projectcard.module.css'
import { ProjectCardInfo } from '../lib/interface';
import { DiGithubBadge } from "react-icons/di";
import { SlLink } from "react-icons/sl";

export default function ProjectCard({tags, title, details, link, github_link, index, image} : ProjectCardInfo) {
  let cardIndex = index < 10 ? 
   "0"+(index+1).toString() : (index+1).toString()
                  
  const linkImage:React.CSSProperties = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  
  return(
    <div className={styles['card-container']}>
      <div className={styles['card-content']}>
        <h3 className={styles['card-header']}>
          {title}
          {link ? <a href={link}><SlLink /></a>: <></>}
          {
            github_link ? 
              <a href={github_link} className={styles['github-logo']}>
                <DiGithubBadge />
              </a> : <></>
          }
        </h3>
        <div className={styles['card-tags']}>
          {tags}
        </div>
        <p className={styles['card-description']}>
          {details}
        </p>
        <div className={styles['card-number']}>
          {cardIndex}
        </div>
      </div>
    </div>
  );
}