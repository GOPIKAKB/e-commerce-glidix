import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { newContext } from '../App';
import './../Style/Cart.css'

function Cart() {
    const { cart, setCart } = useContext(newContext)
    const [total, setTotal] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        let sum = cart.reduce((total, item) => total + (item.count * item.price), 0)
        let totalCount = cart.reduce((sum, item) => sum + item.count, 0)
        setCount(totalCount)
        setTotal(sum)
    }, [cart])

    const decrement = (index) => {
        const newData = [...cart]
        let newCount = newData[index].count
        if (newData[index].count >1) {
            newData[index].count = newCount - 1
        }
        setCart([...newData])

    }
    const increment = (index) => {
        const newData = [...cart]
        let newCount = newData[index].count
        if (newData[index].count < 5) {
            newData[index].count = newCount + 1
        }
        setCart([...newData])
    }
    const handleDelete = (index) => {
        const newData = [...cart];
        newData.splice(index, 1);
        setCart(newData);
    }

    return (
        <div key="cart-item" className='cart-cntnr'>
            {console.log(cart)}
            {total > 0 && <h2>Sub Total ({count} Items ) : ${total}</h2>}
            {total === 0 && <h2>Cart is Empty</h2>}
            {cart.map((item, index) =>
                <Card key={item.id} className='card-cntnr'>
                    <Container>
                        <Row>
                            <Col xs={12} md={4} className='img-cntnr'>
                                <Card.Img src={item.thumbnail} alt={item.title} style={{ height: '110px' }} />
                            </Col>
                            <Col xs={12} md={8}>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text><b>${item.price}</b></Card.Text>
                                    <div >
                                        <button onClick={() => decrement(index)}>-</button>
                                        <label style={{ width: '10%' }}>{item.count}</label>
                                        <button onClick={() => increment(index)}>+</button>
                                        <button onClick={() => handleDelete(index)} style={{ marginLeft: '20px' }}>Delete</button>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            )}
            <div>
                <button>{`Proceed to Buy (${count}items)`}</button>
            </div>
        </div>
    )
}

export default Cart