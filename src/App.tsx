import './fonts.css';
import Project from './projectsection/project';
import Cursor from './components/cursor/cursor';
import Landing from './landing/landing';
import Techstack from './components/techstack/techstack';
import GridTest from './components/test/GridTest';
import Navbar from './components/navbar/navbar';

export default function App() {

  return (
    <>
      <GridTest />

      <Navbar />
      <Cursor />
      <Landing />
      <Techstack />
      <Project />
    </>
  );
}