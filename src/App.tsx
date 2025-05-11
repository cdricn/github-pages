import './fonts.css';
import HomeSection from './assets/components/ui/homesection/homesection';
import AboutSection from './assets/components/ui/aboutsection/aboutsection';
import ProjectSection from './assets/components/ui/projectsection/projectsection';
import Divider from './assets/components/ui/divider';
import Navbar from './assets/components/ui/navbar/navbar';
import Cursor from './assets/components/ui/cursor/cursor';
import projectsData from './projects.json'
import othersData from './others.json'


export default function App() {

  return (
    <>
      <Cursor/>
      <Navbar />
      <HomeSection />
      <Divider color={'--color-purple'}/>
      <AboutSection />
      <Divider color={'--color-cyan'}/>
      <ProjectSection 
        id='project'
        header='Projects'
        subtitle='Front-end development projects.'
        items={projectsData}
      />
      <Divider color={'--color-green'}/>
      <ProjectSection 
        id='others'
        header='Others'
        subtitle='A collection of miscellaneous projects I’ve created or was part in.'
        items={othersData}
      />
      <Divider color={'--color-gray'}/>
    </>
  );
}