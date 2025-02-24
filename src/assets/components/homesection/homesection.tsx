import styles from './homesection.module.css'
import LinkCircle from '../ui/linkcircle';
import { animDelay } from '../../lib/utils';

export default function HomeSection() {

  return(
    <section className={styles['section']}>
      <div className={styles['home-intro-container']}>
        <div className={styles['home-header']}>
          <span style={animDelay(.4, .3)}>Hello,</span><br/>
          <span style={animDelay(.8, .3)}>I'm </span>
          <span style={animDelay(1.2, .3)}>Adrian!</span>
        </div>
        <p className={styles['home-about']}>I’m an aspiring software developer residing 
          in the Philippines. I enjoy creating websites, from thinking of the design
          to coding and deploying it!<br/><br/>
        </p>
      </div>
      <div className={styles['links-container']}>
        <div className={styles['links-column-left']}>
          <LinkCircle url="" img="" delay={3}/>
          <LinkCircle url="" img="" delay={1}/>
          <LinkCircle url="https://github.com/cdricn" img="github_circle.png" alt="github"
                                    delay={3}/>
          <LinkCircle url="https://www.linkedin.com/in/adrian-cortezano-95b749254/" img="linkedin_circle.png" alt="linkedin"
                                    delay={5}/>
          <LinkCircle url="" img="" delay={2}/>
          <LinkCircle url="" img="" delay={2}/>
        </div>
        <div className={styles['links-column-right']}>
          <LinkCircle url="" img="" delay={0}/>
          <LinkCircle url="" img="" delay={2}/>
          <LinkCircle url="https://cdricn.itch.io/" img="itch_circle.png" alt="itch"
                                    delay={4}/>
          <LinkCircle url="" img="" delay={3}/>
          <LinkCircle url="" img="" delay={1}/>
        </div>
      </div>
    </section>
  );
}