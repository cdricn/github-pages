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

//TODO: Combine projects and design into one function.
//Put data in another array and pass that to the prop?
function Selector({deck}: DeckProps) {
  switch (deck) {
    case 'Projects':
      return <Cards data={dataPush(data.projects)}/>
    case 'Designs':
      dataPush(data.designs)
      return <Cards data={dataPush(data.designs)}/>
  }
}

function dataPush(data:any) {
  const dataProp: DataProps[] = [];

  for(let i=0; i<data.length; ++i){
    dataProp.push({
      id: data[i].id,
      tags: data[i].tags,
      title: data[i].title,
      header: data[i].header,
      body: data[i].body,
      link: data[i].link,
      image: data[i].image,
    })
    console.log("test", i, dataProp)
  }

  return dataProp
}

export default Selector