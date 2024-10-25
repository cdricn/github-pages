import './Cards.css'
import data from '../../pagecontent.json'
import { ItemProps } from './interface';

function Item( {itemCount, itemHeader, itemBody} : ItemProps ) {
  return (
    <div className='item-box' onClick={alert}>
      <div className='item-number'>{itemCount}</div>
      <div className='item-description'>
        <h3>{itemHeader}</h3>
        <p>
          {itemBody}
        </p>
      </div>
    </div>
  );
}

function Projects() {
  return (
      <div className='items-container'>
        { data.pageContent.map((item, index) => (
          <Item
            itemCount = {"0".concat(index.toString())}
            itemHeader = {item.header ? item.header : "//"}
            itemBody = {item.body}
          />
        ))}
        
      </div>
  );
}

export default Projects