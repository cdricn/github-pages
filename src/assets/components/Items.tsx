import './Items.css'
import data from '../../../src/pagecontent.json'

function Items() {
  return (
    <>
      {data.pageContent.map((item, index) => (
        <div key={index}>
          <li className='item-container' >
            <div className='title-container'>
              <div className='title-shadow'>{item.title}</div>
              <div className='title-overlay'>{item.title}</div>
            </div>
            <div className='content-container'>
            <h1 className='content-header'>
              {item.header}
              <span>
                {item.status}
              </span>
            </h1>
            <p className='content-body'>
              {item.body}
              <span className='content-link'>
                {item.link}
              </span>
            </p>
            <div className="content-image">
              {item.image}
            </div>
            </div>
          </li>
        </div>
      ))}
    </>
  )
}

export default Items