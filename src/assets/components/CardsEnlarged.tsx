import './CardsEnlarged.css'

function CardEnlarged() {

  return(
    <section className='overlay-popup-container'>
      <article className='popup-card'>
        <div className='close-btn-container'>
        </div>
        <section className='popup-body'>
          <span>{}</span>
          <h1>{}</h1>
          <p>{} {}</p>
        </section>
        <section className='popup-links'>
          <h2>Links</h2>
          <p>: <a href='' target='_blank'></a></p>
        </section>
        <section className='popup-gallery'>
          <h2>Gallery</h2>
          {
          }
        </section>
      </article>
      <div className="shadow-overlay">
      </div>
    </section>
  );
}

export default CardEnlarged