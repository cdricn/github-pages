import './App.css'
import './fonts.css'
import icon from './assets/githubicon.png'
import About from './assets/components/About'
import Cards from './assets/components/Cards'

function App() {

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
          <h2>Projects</h2>
          <h2>About</h2>
          <h2>Top</h2>
        </div>
      </div>
      <div id='component'>
        <Cards />
      </div>
    </>
  );
}

export default App