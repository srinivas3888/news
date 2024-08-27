import {React, useState, useEffect} from 'react';
import { Component } from './Component';
import './App.css';


function News({category}){
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        let url="https://newsapi.org/v2/everything?q="+category+"&apiKey="+process.env.REACT_APP_API_KEY;          
        // ${import.meta.env.API_KEY}
        async function fetchNews(){
            try{
                const response = await fetch(url, { method: "GET" });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            let data = result.articles;
            setArticles(data);

            console.log('Success:');
            }
            catch(error){
                console.error('Error:', error);
            }
        }
        fetchNews();

    }, [category]);

        

    return(
        <>
        <div id='all' className='d-flex justify-content-center flex-row flex-wrap m-1 p-1 w-auto overflow-x-hidden'>
        {
            articles.map((news, index)=>{
                return(
                        <Component title={news.title} description={news.description} url={news.url} img={news.urlToImage} key={index} />
                );
            })
        }
        </div>
        </>
    );
}

export {News};