import {React, useState, useEffect} from 'react';
import './App.css';


function ComponentHead({title, url}){

    return(
        <div className='mx-2 px-2' style={{width:'10rem', height:'6rem'}}>
                <a href={url}>
                <h6 style={{color:'white'}}>{title}</h6>
                </a>
            </div>
    );
}

function Headlines(){
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey="+process.env.REACT_APP_API_KEY1;
        // ${import.meta.env.API_KEY}
        async function fetchNews(){
            try{
                const response = await fetch(url, { method: "GET" });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            let data = result.articles, d=[];
            for(let i=0; i<4; i++){
                d.push(data[i]);
            }
            setArticles(d);

            console.log('Success:');
            }
            catch(error){
                console.error('Error:', error);
            }
        }
        fetchNews();

    }, []);

        

    return(
        <>
        <div className='d-flex justify-content-center flex-row m-1 p-1 w-auto overflow-x-hidden' style={{backgroundColor:'red'}}>
        {
            articles.map((news, index)=>{
                return(
                        <ComponentHead title={news.title} url={news.url} key={index} />
                );
            })
        }
        </div>
        </>
    );
}

export {Headlines};