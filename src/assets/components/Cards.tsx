import './Cards.css'
import data from '../../pagecontent.json'
import { ItemProps, DeckProps, DataProps, DataPropsArr } from './interface';

function Item( {itemCount, itemTags, itemHeader, itemBody} : ItemProps ) {
  return (
    <>
      <div className='item-number'>{itemCount}</div>
      <div className='item-description'>
        <span className={`item-tags`}>{itemTags}</span>
        <h3>{itemHeader}</h3>
        <p>
          {itemBody}
        </p>
      </div>
    </>
  );
}

function Cards({data} : DataPropsArr) {
  let count = data.length
  return (
      <div className='items-container'>
        {data.map((item) => (
          <div className='item-box' onClick={alert} key={item.id}>
            <Item 
              itemCount = {"0".concat(count.toString())}
              itemTags = {item.tags}
              itemHeader = {item.header ? item.header : "//"}
              itemBody = {item.body}
            />
            {count--}
          </div>
        ))}
      </div>
  );
}

function Selector({deck}: DeckProps) {
  switch (deck) {
    case 'Projects':
      return <Cards data={dataPush(data.projects)}/>
    case 'Designs':
      dataPush(data.designs)
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