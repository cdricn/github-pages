import './App.css'
import './fonts.css'
import icon from './assets/githubicon.png'
import Items from './assets/components/Items.tsx'
import { useRef } from 'react';

function App() {
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    const div = scrollableDivRef.current;
    if (div) {
      div.scrollLeft += 10; // Scroll down by 10 pixels
    }
  };

  return (
    <>
      <div className='main-container'>
        <div className='page-header'>
          CDRICN
          <a
            href="https://github.com/cdricn"
            target="_blank">
            <img 
              src={icon}
              className="gh-icon"
              alt="GitHub account link icon"
              >
            </img>
          </a><button onClick={handleScrollDown}>Scroll Down</button>
        </div> 
        <div className='itemview'>
          <div className='arrow-left'></div>
          <div className='content' ref={scrollableDivRef}>
            <Items />
          </div>
          <div className='arrow-right'></div>
        </div>
      </div>
    </>
  );
}

export default App
