import './App.css'
import './fonts.css'
import icon from './assets/githubicon.png'
import Items from './assets/components/Items.tsx'
import { useRef } from 'react';

function App() {
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    const div = scrollableDivRef.current;
    if (div) {
      div.scrollLeft += 2* 100; // 11vw
    }
  };
  const handleScrollLeft = () => {
    const div = scrollableDivRef.current;
    if (div) {
      div.scrollLeft -= 2 * 100; // Scroll down by 10 pixels
    }
  };

  const handleWheel = (event:any) => {
    if(event.deltaY > 0){
      handleScrollRight();
    }else{
      handleScrollLeft();
    }
    // Positive for up-right, negative for down-left
    console.log('Wheel event:', event.deltaY);
  };

  return (
    <>
      <div className='main-container' onWheel={handleWheel}>
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
          </a>
        </div> 
        <div className='itemview'>
          <div className='arrow-left' onClick={handleScrollLeft}>
          </div>
          <div className='content' ref={scrollableDivRef}>
            <Items />
          </div>
          <div className='arrow-right' onClick={handleScrollRight}>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
