import React from 'react'
import { useArticle } from './ArticleProvider';
const ArticleList = () => {

   const articles = useArticle();
  return (
      <div>
          
          <ul>
              {articles.map(article => (
                  <li key={article._id}>
                      <h2>{article.title}</h2>
                      <p>{article.content}</p>
                      {/* Render other article details */}
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default ArticleList
