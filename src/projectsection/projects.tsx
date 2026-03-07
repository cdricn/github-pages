import styles from './projects.module.css'
import ProjectCard from './projectcard';
import data from '../projects.json'
import { ProjectEntry } from '../lib/interface';
import GridTest from '../components/test/GridTest';

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
          github_link = {item.github_link}
          index = {index}
          image = {item.image}
        />
      )
    })
  }

  return (
    <>
    <GridTest />
    <section className={styles['section']}>
      <div className={styles['grid']}></div>
      <div className={styles['section-container']}>
        <div className={styles['section-title']}>
          <h2>Projects</h2>
        </div>
        <div className={styles['project-info']}>
          <h3>Web development</h3>
          <p>Projects about front-end web development.</p>
        </div>
        <div className={styles['project-entries']}>
          {mapItems(data.main_projects)}
        </div>
        <div className={styles['project-info']}>
          <h3>Miscellaneous</h3>
          <p>Projects that I’ve created or participated in that are unrelated to web development.</p>
        </div>
        <div className={styles['project-entries']}>
          {mapItems(data.misc_projects)}
        </div>
      </div>
    </section>
    </>
  );
}