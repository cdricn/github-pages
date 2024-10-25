import './Cards.css'
import data from '../../pagecontent.json'

function Item() {
  return (
    <div className='item-box'>
      <div className='item-number'>{}</div>
      <div className='item-description'>
        <h3>PIXIV Downloader</h3>
        <p>
          A scraping tool used to
          download images from
          PIXIV.
        </p>
      </div>
    </div>
  );
}

function Projects() {

  let itemCount = 1
  let displayCount = "0".concat(itemCount.toString()) 

  return (
    <div className='items-container'>
      <Item />
    </div>
  );
}

export default Projects