import {React, useState, useEffect} from 'react';
import { Component } from './Component';
import './App.css';


function News({category}){
    const [articles, setArticles] = useState([]);

    useEffect(()=>{        
        async function fetchNews(){
            let response;
            try{
                response = await fetch("https://fastapi-newsfetch.onrender.com/fetch/" , { 
                    method: "POST",
                    headers:{
                        'Content-Type':'text/plain'
                    },
                    body: category
                });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            response = await response.json();
            console.log(response);
            // let data = await response.articles;
            // setArticles(data);

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
            ( articles && articles.length>0 )?( articles.map((news, index)=>{
                return(
                        <Component title={news.title} description={news.description} url={news.url} img={news.urlToImage} key={index} />
                );
            })
        ):( <p style={{color:'white'}}>No News Available</p> )
        }
        </div>
        </>
    );
}

export {News};