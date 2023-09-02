import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './../../Style/Card.css'
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Cards = React.memo(({ data, addItem }) => {
    return (
            <div className='align-card'>
                {data.map(item =>
                    <Card key={item.id} className='card-cont' >
                        <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <Card.Img variant="top" src={item.thumbnail} style={{height:'180px'}} loading="lazy"/>
                        <Card.Body style={{height:'150px'}}>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.rating}<AiFillStar/></Card.Text>
                            <Card.Title>${item.price}</Card.Title>
                        </Card.Body>
                        </Link>
                        <Button style={{backgroundColor:'#fbd351',color:'black'}} onClick={()=>addItem(item)}>Buy Now</Button>
                    </Card>
                )}
        </div>
    )
})

export default Cards