import './Cards.css'
import data from '../../pagecontent.json'
import CardEnlarged from './CardsEnlarged';
import { useState } from 'react';
import { CardProps, CategoryProps, DataProps, DataPropsArr } from './interface';

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
      <div className='card-container'>
        {data.map((item, index) => (
          <div className='card-box' 
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

function Card( {cardCount, cardTags, cardHeader, cardBody} : CardProps ) {
  return (
    <>
      <div className='card-number'>{cardCount}</div>
      <div className='card-description'>
        <span className='card-tags'>{cardTags}</span>
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