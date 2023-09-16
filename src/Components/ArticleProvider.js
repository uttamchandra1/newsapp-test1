import React,{createContext , useContext , useEffect , useState } from "react";
import axios from "axios";

const ArticleContext = createContext();

export function ArticleProvider({children}) {
    
    const [articles , setArticles] = useState([]);

    useEffect(()=> {
        //fetch
        axios.get("http://localhost:4000/api/articles")
        .then(response => {
            setArticles(response.data);
        })
        .catch(error => {
            console.error("error in fetching articles" , error)
        })
    },[]);

    return (
        <ArticleContext.Provider value={articles}>
            {children}
        </ArticleContext.Provider>
    );
}

export function useArticle() {
    return useContext(ArticleContext);
}