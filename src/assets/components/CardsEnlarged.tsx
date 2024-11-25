import './CardsEnlarged.css'
import { DataPropsWithState } from './interface'

function CardEnlarged({ tags, header, details, content, link, link2, image, handlePopUp } : DataPropsWithState) {

  return(
    <section className='overlay-popup-container'>
      <div className='popup-card'>
        <span>{tags}</span>
        <h2>{header}</h2>
        <div className='popup-body'>
          <p>{details}<br/>{content}</p>
          <h4>Links</h4>
          <p>{link[0]}: <a href={link[1]} target='_blank'>{link[1]}</a></p>
          {
            link2![0] == null ? null : 
            <p>{link2![0]}: <a href={link2![1]} target='_blank'>{link2![1]}</a></p>
          }
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