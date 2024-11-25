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
    console.log("test", item.link2)
    return <CardEnlarged 
      tags = {item.tags}
      header = {item.header || "//"}
      details = {item.details}
      content = {item.content}
      link = {item.link}
      link2 = {item.link2}
      image = {item.image}
      handlePopUp = {handleClickHide}
    />
  }

  return (
    <>
      <ul className='card-container'>
        {data.map((item, index) => (
          <li className='card-box' 
            onClick={() => {handleClickShow(index)}} key={item.id}>
              <Card 
                cardCount = {"0".concat((data.length-index).toString())}
                cardTags = {item.tags}
                cardTitle = {item.title ? item.title : "//"}
                cardDetails = {item.details!}
              />
          </li>
        ))}
      </ul>
      {selectedItem.showPopUp ? renderItemPopUp(selectedItem.index) : null}
    </>
  );
}

function Card( {cardCount, cardTags, cardTitle, cardDetails} : CardProps ) {
  return (
    <>
      <div className='card-number'>{cardCount}</div>
      <div className='card-description'>
        <span className='card-tags'>{cardTags}</span>
        <h4>{cardTitle}</h4>
        <p>
          {cardDetails}
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
    details: item.details,
    content: item.content,
    link: item.link,
    link2: item.link2,
    image: item.image,
  }));
}

export default CategorySelector