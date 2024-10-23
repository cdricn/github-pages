import './App.css'
import './fonts.css'
import Item from './assets/components/Item.tsx'
import icon from './assets/githubicon.png'

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
      <div className='items-container'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
}

export default App
