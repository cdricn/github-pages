import styles from './project.module.css'
import ProjectCard from './projectcard';
import data from '../projects.json'
import { ProjectEntry } from '../lib/interface';

export default function Project() {

  function mapItems(entries: ProjectEntry[]) {
    return entries.map((item, index)=>{
      return (
        <ProjectCard
          key = {index+item.title}
          tags = {item.tags}
          title = {item.title}
          details = {item.details}
          link = {item.link}
          index = {index}
          image = {item.image}
        />
      )
    })
  }

  return (
    <section className={styles['section']}>
      <div className={styles['wrapper']}>
        <div className={styles['projects-container']}>
          <div className={styles['header-container']}>
            <h2>Main Projects</h2>
            <p>Web development projects I’ve created.</p>
          </div>
          <div className={styles['entries-container']}>
            {mapItems(data.main_projects)}
          </div>
        </div>

        <div className={styles['projects-container']}>
          <div className={styles['header-container']}>
            <h2>Other Projects</h2>
            <p>Miscellaneous projects that I’ve created or participated in that are unrelated to web development.</p>
          </div>
          <div className={styles['entries-container']}>
            {mapItems(data.misc_projects)}
          </div>
        </div>
      </div>
    </section>
  );
}