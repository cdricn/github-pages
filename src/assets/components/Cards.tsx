import './Cards.css'
import data from '../../pagecontent.json'
import { useState } from 'react';
import { CardProps, CategoryProps, DataProps, DataPropsWithState, DataPropsArr } from './interface';

function CardsRenderer({data} : DataPropsArr) {
  const [selectedItem, setSelectedItem] = useState({
    index: 0,
    showPopUp: false
  });

  const handleClickShow = ((index:number) => {
    setSelectedItem({ index, showPopUp: true })
  })
  const handleClickHide = () => {
    setSelectedItem({ index: 0, showPopUp: false })
  }
  const renderItemPopUp = (index:number) => {  
    const item = data[index];
    return <CardEnlarged 
      tags = {item.tags}
      title = {item.header || "//"}
      body = {item.body}
      link = {item.link}
      image = {item.image}
      handlePopUp = {handleClickHide}
    />
  }

  return (
    <>
      <div className='items-container'>
        {data.map((item, index) => (
          <div className='item-box' 
            onClick={() => {handleClickShow(index)}} key={item.id}>
              <Card 
                cardCount = {"0".concat((data.length-index).toString())}
                cardTags = {item.tags}
                cardHeader = {item.header ? item.header : "//"}
                cardBody = {item.body}
              />
          </div>
        ))}
      </div>
      {selectedItem.showPopUp ? renderItemPopUp(selectedItem.index) : null}
    </>
  );
}

function CardEnlarged({ tags, title, body, link, image, handlePopUp } : DataPropsWithState) {
  return(
    <div className='overlay-popup-container'>
      <div className='card-popup'>
        <span>{tags}</span>
        <h2>{title}</h2>
        <div className='card-body'>
          <p>{body}</p>
          <h4>Links</h4>
          <p>Github: <a href={link}>{link}</a></p>
          <h4>Gallery</h4>
          <div>{image}</div>
        </div>
      </div>
      <div className="shadow-overlay" onClick={handlePopUp}>
      </div>
    </div>
  );
}

function Card( {cardCount, cardTags, cardHeader, cardBody} : CardProps ) {
  return (
    <>
      <div className='item-number'>{cardCount}</div>
      <div className='item-description'>
        <span className={`item-tags`}>{cardTags}</span>
        <h4>{cardHeader}</h4>
        <p>
          {cardBody}
        </p>
      </div>
    </>
  );
}

function CategorySelector({category}: CategoryProps) {
  switch (category) {
    case 'Projects':
      return <CardsRenderer data={dataPusher(data.projects)}/>
    case 'Designs':
      return <CardsRenderer data={dataPusher(data.designs)}/>
  }
}

function dataPusher(data:any): DataProps[] {
  return data.map((item:any) => ({
    id: item.id,
    tags: item.tags,
    title: item.title,
    header: item.header,
    body: item.body,
    link: item.link,
    image: item.image,
  }));
}

export default CategorySelector