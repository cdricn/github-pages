import './fonts.css';
import Projects from './projectsection/projects';
import Cursor from './components/cursor/cursor';
import Landing from './landing/landing';
import Techstack from './components/techstack/techstack';
import GridTest from './components/test/GridTest';
import Navbar from './components/navbar/navbar';

export default function App() {

  return (
    <>
      <GridTest />
      <Cursor />
      <Navbar />

      <Landing />
      <Projects />
      <Techstack />
    </>
  );
}