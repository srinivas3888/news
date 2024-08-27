import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './news-back-api-loading.jpg';


function Component({title, description, url, img}){


    return(
        <div className='mb-3 p-1 text-light d-inline-block'>        
        <Card style={{ width: '28rem', height:'25rem', border:"3px double red", backgroundColor:"black", color:"white" }}  >
        <Card.Img variant="top" src={img?img:image} style={{width:'27.7rem', height:'15rem'}} alt='News-Image' />
        <Card.Body>
        <Card.Title style={{fontSize:'medium'}}>{title?title.slice(0,120):""}</Card.Title>
        <Card.Text  style={{fontSize:'small'}}>
            {description?description.slice(0,130):""}
        </Card.Text>
        <a href={url} target='_blank' rel='noreferrer'>
        <Button variant="primary" className="text-decoration-underline" style={{fontSize:'small', width:'5.6rem', height:'2.2rem'}}>Read-more</Button>
        </a>
        </Card.Body>
    </Card>
    </div>
    );
}

export {Component};