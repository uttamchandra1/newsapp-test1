import React from 'react'
import { useArticle } from './ArticleProvider';
import './EvNews.css'
import { Link } from 'react-router-dom';
import ArticleList from './articleList'


const EvNews = () => {

   const articles = useArticle();

  return (
    <div>
      <div id='evnews' className='categorydiv'>
      <h1>Electric Vehicles News</h1>
      <div className='evnews'>
       {articles.map((item) =>(
        <div className='newscard' key={item._id}>
          <div>
            <img src={item.imageUrl} alt='article image' />
          </div>
          <Link to={`/article/${item.title}`}className='title'>{item.title}</Link>
          <p className='createdat'>{item.createdAt}</p>
        </div>
       ))}
      </div>
      <div>
        <Link to={`/articles`} className='cardfooter'>View all Electric Vehicles News</Link>
      </div>
      <div className='evTab'>
      <h1>Electric Cars News</h1>
      <div className='evnews'>
       {articles.map((item) =>(
        <div className='newscard' key={item._id}>
          <div>
            <img src={item.imageUrl} alt='article image' />
          </div>
          <Link to={`/article/${item.title}`}className='title'>{item.title}</Link>
          <p className='createdat'>{item.createdAt}</p>
        </div>
       ))}
      </div>
      <div >
      <Link to={`/articles`} className='cardfooter'>View all Electric Cars News</Link>
      </div>
      </div>
      <div className='evTab'>
      <h1>Electric Bikes News</h1>
      <div className='evnews'>
       {articles.map((item) =>(
        <div className='newscard' key={item._id}>
          <div>
            <img src={item.imageUrl} alt='article image' />
          </div>
          <Link to={`/article/${item.title}`}className='title'>{item.title}</Link>
          <p className='createdat'>{item.createdAt}</p>
        </div>
       ))}
      </div>
      <div>
         <Link to={`/articles`} className='cardfooter'>View all Electric Bikes News</Link>
      </div>
      </div>
      <div>
        <ArticleList/>
      </div>
    
      </div>
    </div>
    
  )
}

export default EvNews
