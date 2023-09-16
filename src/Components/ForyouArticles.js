import React, { useEffect, useState } from 'react'
import { useArticle } from './ArticleProvider'
import { useParams } from 'react-router-dom';


const ForyouArticles = () => {
    
    const {id} = useParams();
    const articles = useArticle();

    const [article , setArticle] = useState([]);

    useEffect(() => {

      // fetch article by title from context 

      const fetchedArticles = articles.find(article => article.title === id);
      if (fetchedArticles) {
        setArticle(fetchedArticles);
      }
     
    },[id , articles]);

   
    
  return (
    <div>
      <div key={article._id} >
            <h1>{article.title}</h1>
            <img src={article.imageUrl} alt='dikh jaega' />
            <div>{article.content}</div>
        </div>
    </div>
  )
}

export default ForyouArticles