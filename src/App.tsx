import './App.css'
import './fonts.css'
import icon from './assets/githubicon.png'
import About from './assets/components/About'
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
      case "About":
        return <About />
      default:
        return <CategorySelector category={selected}/>
    }
  }

  return (
    <>
      <div className='header'>
        <h1>CDRICN</h1>
        <span>
          <a href='https://github.com/cdricn'>
            <img src={icon} className='test'></img>
          </a>
        </span>
      </div>
      <div className='menu-container'>
        <div className='menu'>
          <h3 onClick={() => handleSelected('Projects')}>Projects</h3>
          <h3 onClick={() => handleSelected('Designs')}>Designs</h3>
          <h3 onClick={() => handleSelected('About')}>About</h3>
          <h3 onClick={alert}>Top</h3>
        </div>
      </div>
      <div id='display-component'>
      {renderSelectedData()}
      </div>
    </>
  );
}

export default App