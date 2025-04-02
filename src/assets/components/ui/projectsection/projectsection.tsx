import styles from './projectsection.module.css'
import ProjectCard from './projectcard';
import { ProjectSectionProps } from '../../../lib/interface';

export default function ProjectSection({
  header,
  subtitle,
  items
} : ProjectSectionProps) {

  return (
    <section className={styles['section']}>
      <div className={styles['section-header']}>
        <h2>{header}</h2>
        <p>
          {subtitle}
        </p>
      </div>
      <div className={styles['projects-wrapper']}>
        <div className={styles['projects-list']}>
          {
            items.map((item, index)=>{
              return(
                <ProjectCard 
                  tags = {item.tags}
                  title = {item.title}
                  details = {item.details}
                  link = {item.link}
                  number = {
                    index < 10 ? "0"+(index+1).toString() :
                    (index+1).toString()
                  }
                  image = {item.image}
                  key = {index}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  );
}