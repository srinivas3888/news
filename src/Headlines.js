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
        async function fetchNews(){
            let response;
            try{
                let t="headlines";
                response = await fetch("https://fastapi-newsfetch.onrender.com/fetch/" , {
                    method: "POST",
                    headers:{
                        'Content-Type':'text/plain'
                    },
                    body: t
                });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            response = await response.json();
            // console.log(response);
            let data = await response.articles;
            let d=[];
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
            ( articles && articles.length>0 )?( articles.map((news, index)=>{
                return(
                        <ComponentHead title={news.title} url={news.url} key={index} />
                );
            })
        ):( <p style={{color:'white'}}>No News Available</p> )
        }
        </div>
        </>
    );
}

export {Headlines};