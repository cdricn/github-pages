import './Cards.css'
import data from '../../pagecontent.json'
import { useState } from 'react';
import { ItemProps, DeckProps, DataProps, DataPropsArr } from './interface';

function Item( {itemCount, itemTags, itemHeader, itemBody} : ItemProps ) {
  return (
    <>
      <div className='item-number'>{itemCount}</div>
      <div className='item-description'>
        <span className={`item-tags`}>{itemTags}</span>
        <h4>{itemHeader}</h4>
        <p>
          {itemBody}
        </p>
      </div>
    </>
  );
}

function ItemEnlarged( {tags, title, body, link, image} : DataProps ) {
  {console.log("test", title)}
  return(
      <div className='card-popup'>
        <span>{tags}</span>
        <h2>{title}</h2>
        <div className='card-body'>
          <p>{body}</p>
          <h4>Links</h4>
          <p>Github: {link}</p>
          <h4>Gallery</h4>
          <div>{image}</div>
        </div>
      </div>
  );
}

function Cards({data} : DataPropsArr) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [currentPopUpState, setCurrentPopUpState] = useState(false);

  const handleClick = ((index:number) => {
    setSelectedItem(index)
  })
  const handlePopUp = ((toggle:boolean) => {
    setCurrentPopUpState(toggle)
  })
  const displayPopUp = ((toggle:boolean) => {
    let className = toggle ? 
    'overlay-popup-container' : 
    ['overlay-popup-container', 'hidden'].join(' ')
    return className
  })
  const renderSelectedItem = (index:number) => {  
    const item = data[index];
    return <ItemEnlarged 
      tags = {item.tags}
      title = {item.header || "//"}
      body = {item.body}
      link = {item.link}
      image = {item.image}
    />
  }

  return (
    <>
      <div className='items-container'>
        {data.map((item, index) => (
          <div className='item-box' 
            onClick={() => {handleClick(index); handlePopUp(true)}} 
            key={item.id}>
              <Item 
                itemCount = {"0".concat((data.length-index).toString())}
                itemTags = {item.tags}
                itemHeader = {item.header ? item.header : "//"}
                itemBody = {item.body}
              />
          </div>
        ))}
      </div>
      <div className='overlay-popup-container'>
        {renderSelectedItem(selectedItem)}
        <div className="shadow-overlay" onClick={() => handlePopUp(false)}>
        </div>
      </div>
    </>
  );
}

function Selector({deck}: DeckProps) {
  switch (deck) {
    case 'Projects':
      return <Cards data={dataPush(data.projects)}/>
    case 'Designs':
      return <Cards data={dataPush(data.designs)}/>
  }
}

function dataPush(data:any): DataProps[] {
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

export default Selector