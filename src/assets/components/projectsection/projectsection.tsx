import styles from './projectsection.module.css'
import ProjectCard from './projectcard';
import data from '../../../pagecontent.json'

export default function ProjectSection() {


  return (
    <section className={styles['section']}>
      <div className={styles['section-wrapper']}>
        <h2 className={styles['section-header']}>Projects</h2>
        <div className={styles['projects-container']}>
          {
            data.projects.map((item, index)=>{
              let dataLength = data.projects.length;
              return(
                <ProjectCard 
                  title = {item.title}
                  details = {item.details}
                  link = {item.link}
                  number = {
                    index < 10 ? "0"+(dataLength-index).toString() :
                    (dataLength-index).toString()
                  }
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