import styles from './projects.module.css'
import ProjectCard from './projectcard';
import data from '../projects.json'
import { ProjectEntry } from '../lib/interface';
import GridTest from '../components/test/GridTest';

export default function Project() {


    
  const styleCardsContainer = {
    display: 'grid',
    gridTemplateColumns: `repeat(${(data.main_projects.length * 3) + (data.main_projects.length - 1)}, 1fr)`,
    gap: '30px'
  }

  const styleCardsGridStart = (index:number) => {
    let colStart = (index*4)+1;
    let colEnd = colStart+3;
    return {
      gridColumn: `${colStart}/${colEnd}`
    }
  }

  function mapItems(entries: ProjectEntry[]) {
    return entries.map((item, index)=>{
      return (
        <div key={index+item.title}
          style={styleCardsGridStart(index)}>
            <ProjectCard
              tags = {item.tags}
              title = {item.title}
              details = {item.details}
              link = {item.link}
              github_link = {item.github_link}
              index = {index}
              image = {item.image}
            />
        </div>
      )
    })
  }

  return (
    <>
    <GridTest />
    <section className={['section', styles['projects-section']].join(' ')}>
      <div className='content-wrapper'>
        <div className={['wrapper-grid', styles['section-header']].join(' ')}>
          <h2>PROJECTS</h2>
          <span>My web development projects.</span>
        </div>
      </div>
      <div className={styles['cards-container']} style={styleCardsContainer}>
        {mapItems(data.main_projects)}
      </div>
    </section>
    </>
  );
}