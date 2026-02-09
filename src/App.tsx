import './fonts.css';
import Project from './projectsection/project';
import Cursor from './components/cursor/cursor';
import Landing from './landing/landing';
import Techstack from './components/techstack/techstack';
import GridTest from './components/test/GridTest';

export default function App() {

  return (
    <>
      <GridTest />
      <Cursor />
      <Landing />
      <Techstack />
      <Project />
    </>
  );
}