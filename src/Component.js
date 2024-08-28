import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './news-back-api-loading.jpg';


function Component({title, description, url, img}){


    return(
        <div className='mb-3 p-1 text-light d-inline-block'>        
        <Card style={{ width: '25rem', height:'24rem', border:"3px double red", backgroundColor:"black", color:"white" }}  >
        <Card.Img variant="top" src={img?img:image} style={{width:'24.6rem', height:'13rem'}} alt='News-Image' />
        <Card.Body>
        <Card.Title style={{fontSize:'medium'}}>{title?title.slice(0,120):""}</Card.Title>
        <Card.Text  style={{fontSize:'small'}}>
            {description?description.slice(0,90):""}
        </Card.Text>
        <a href={url} target='_blank' rel='noreferrer'>
        <Button variant="primary" className="text-decoration-underline" style={{fontSize:'small', width:'5.6rem', height:'1.8rem'}}>Read-more</Button>
        </a>
        </Card.Body>
    </Card>
    </div>
    );
}

export {Component};