import React, { useContext, useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BsCartFill } from "react-icons/bs";
import { newContext } from '../App';
import './../Style/Header.css'
import { Link } from 'react-router-dom';

function Header() {
  const { cart } = useContext(newContext)
  const [count, setCount] = useState('')

  useEffect(() => {
    let totalCount = cart.reduce((sum, item) => sum + item.count, 0)
    setCount(totalCount)
  }, [cart])

  return (
    <div className='header-cntnr'>
      <Navbar variant="light" >
        <Container >
          <Nav className="me-auto  d-flex flex-wrap" style={{ color: '444242' }}>
            <Nav.Link><Link to='/' style={{ textDecoration: 'none', color: 'black' }}><b>Home</b> </Link></Nav.Link>
           
          </Nav>
          <Nav className="me-auto, justify-content-end" style={{ width: '35px', height: `${count > 0 ? '40px' : '35px'}` }} >
            <Nav.Link className='cart'>
              <Link to='/cart' style={{ textDecoration: 'none', color: 'white' }}>
                <BsCartFill />
              </Link>{count > 0 && <sup>{count}</sup>}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header