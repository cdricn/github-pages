import './App.css'
import './fonts.css'
import Items from './assets/components/Items.tsx'

function App() {

  return (
    <>
      <div className='main-container'>
        <div className='header'>
          HEADER
        </div>
        <div className='itemview'>
          <Items />
        </div>
      </div>
    </>
  );
}

export default App
