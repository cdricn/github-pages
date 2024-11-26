import './CardsEnlarged.css'
import { DataPropsWithState } from './interface'

function CardEnlarged({ tags, header, details, content, link, link2, image, handlePopUp } : DataPropsWithState) {

  return(
    <section className='overlay-popup-container'>
      <article className='popup-card'>
        <span>{tags}</span>
        <h1>{header}</h1>
        <div className='popup-body'>
          <p>{details} {content}</p>
          <h2>Links</h2>
          <p>{link[0]}: <a href={link[1]} target='_blank'>{link[1]}</a></p>
          {
            link2![0] == null ? null : 
            <p>{link2![0]}: <a href={link2![1]} target='_blank'>{link2![1]}</a></p>
          }
          <h2>Gallery</h2>
          <div>{image}</div>
        </div>
      </article>
      <div className="shadow-overlay" onClick={handlePopUp}>
      </div>
    </section>
  );
}

export default CardEnlarged