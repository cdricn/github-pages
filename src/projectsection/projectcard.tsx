import styles from './projectcard.module.css'
import { ProjectCardInfo } from '../lib/interface';
import { DiGithubBadge } from "react-icons/di";
import { SlLink } from "react-icons/sl";

export default function ProjectCard({tags, title, details, link, github_link, index, image} : ProjectCardInfo) {
  let cardIndex = index < 10 ? 
   "0"+(index+1).toString() : (index+1).toString()
  
  return(
    <div className={styles['card-container']}>
      <h3 className={styles['card-header']}>
        {title}
        <span className={styles['card-number']}>{cardIndex}</span>
      </h3>
      <span className={styles['card-links']}>{link ? <a href={link}><SlLink /></a>: <></>}</span>
      <span className={styles['card-links']}>
        {
          github_link ? 
            <a href={github_link} className={styles['github-logo']}>
              <DiGithubBadge />
            </a> : <></>
        }
      </span>
      <div className={styles['card-tags']}>
        {tags}
      </div>
      <p className={styles['card-description']}>
        {details}
      </p>
    </div>
  );
}