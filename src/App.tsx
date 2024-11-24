import './App.css'
import './fonts.css'
import CategorySelector from './assets/components/Cards'

import { useState } from "react"

function App() {
  const [selected, setSelected] = useState("Projects");

  const handleSelected = (section:string) => {
    setSelected(section)
  }

  const renderSelectedData = () => {
    switch (selected) {
      case "Projects":
        return <CategorySelector category={selected}/>
      case "Designs":
        return <CategorySelector category={selected}/>
      default:
        return <CategorySelector category={selected}/>
    }
  }

  return (
    <>
      <section className='section-home'>
        <header className='home-wrapper'>
          <div className='home-info-container'>
            <div className='home-info-header'>
              <h1>Hello,<br/>I'm Adrian!</h1>
            </div>
            <div className='home-info-introduction'>
              <p>
                I'm an aspiring software developer residing
                in the Philippines. I like to make responsive websites with
                neat designs.
              </p>
            </div>
          </div>
          <div className='home-links-container'>
            
            <div className='circle-container'>
              <div className='circle-link'>
                <a href='https://github.com/cdricn' target='_blank'>
                  <img src='github_circle.png'></img>
                </a>
              </div>
              <div className='circle-link'>
                <a href='https://www.linkedin.com/in/adrian-cortezano-95b749254/' target='_blank'>
                  <img src='linkedin_circle.png'></img>
                </a>
              </div>
              <div className='circle-link'>
                <a href='https://cdricn.itch.io/' target='_blank'>
                  <img src='itch_circle.png'></img>
                </a>
              </div>
            </div>

          </div>
        </header>
      </section>
      <nav className='section-menu'>
        <div className='menu'>
          <h3 onClick={() => handleSelected('Projects')}>Projects</h3>
          <h3 onClick={() => handleSelected('Designs')}>Designs</h3>
          <h3 onClick={alert}>Top</h3>
        </div>
      </nav>
      <section className='section-cards'>
        {renderSelectedData()}
      </section>
    </>
  );
}

export default App