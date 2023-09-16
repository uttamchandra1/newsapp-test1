import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ArticleProvider } from './Components/ArticleProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
         <React.StrictMode>
            <ArticleProvider>
            <App/>
            </ArticleProvider>
          
        </React.StrictMode>
    </Router>
        
   
       
  
   

);

