import './CardsEnlarged.css'
import { DataPropsWithState } from './interface'

function CardEnlarged({ tags, header, details, content, link, link2, image, handlePopUp } : DataPropsWithState) {

  return(
    <section className='overlay-popup-container'>
      <article className='popup-card'>
        <section className='popup-body'>
          <span>{tags}</span>
          <h1>{header}</h1>
          <p>{details} {content}</p>
        </section>
        <section className='popup-links'>
          <h2>Links</h2>
          <p>{link[0]}: <a href={link[1]} target='_blank'>{link[1]}</a></p>
          {
            link2![0] == null ? null : 
            <p>{link2![0]}: <a href={link2![1]} target='_blank'>{link2![1]}</a></p>
          }
        </section>
        <section className='popup-gallery'>
          <h2>Gallery</h2>
          {
            image != "" ? <img src={image}></img>: <p>No Image</p>
          }
        </section>
      </article>
      <div className="shadow-overlay" onClick={handlePopUp}>
      </div>
    </section>
  );
}

export default CardEnlarged