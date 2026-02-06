import './fonts.css';
import Project from './projectsection/project';
import Cursor from './components/cursor/cursor';
import Landing from './landing/landing';
import Techstack from './components/techstack/techstack';

export default function App() {

  return (
    <>
      <Cursor />
      <Landing />
      <Techstack />
      <Project />
    </>
  );
}