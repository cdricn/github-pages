import './CardsEnlarged.css'
import { DataPropsWithState } from './interface'

function CardEnlarged({ tags, title, body, link, image, handlePopUp } : DataPropsWithState) {
  return(
    <section className='overlay-popup-container'>
      <div className='popup-card'>
        <span>{tags}</span>
        <h2>{title}</h2>
        <div className='popup-body'>
          <p>{body}</p>
          <h4>Links</h4>
          <p>Github: <a href={link}>{link}</a></p>
          <h4>Gallery</h4>
          <div>{image}</div>
        </div>
      </div>
      <div className="shadow-overlay" onClick={handlePopUp}>
      </div>
    </section>
  );
}

export default CardEnlarged