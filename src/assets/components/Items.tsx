import './Items.css'
import linkImg from '../../assets/arrowdark.png'
import data from '../../../src/pagecontent.json'

function status(item:any){
  return item.status === "done" ? "(Finished)" : "(In Progress)";
}

function contentVisible(item:any){
  if(item.header === ""){
    return "";
  }else{
    return (
      <>
        <h1 className='content-header'>
          {item.header}
          <span className='content-status'>
            {status(item)}
          </span>
        </h1>
        <p className='content-body'>
          {item.body}
          <span className='content-link'>
            <a href={item.link} target="_blank">
              <img src={linkImg} alt="Link"></img>
            </a>
          </span>
        </p>
        <div className="content-image">
          {item.image}
        </div>
      </>
    );  
  }
}

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
              {contentVisible(item)}
            </div>
          </li>
        </div>
      ))}
    </>
  )
}

export default Items