import React from "react";

import Home from "./Components/Home";
import ForyouArticles from "./Components/ForyouArticles"

import { Routes , Route } from "react-router-dom";
import ArticleList from "./Components/articleList";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/articles" element={<ArticleList/>} /> 
    <Route path="/article/:id" element={<ForyouArticles/>}/>
    
    
  </Routes>
    
   
  );
}

export default App;
