import React, { useContext, useEffect } from 'react'
import { newContext } from '../../App'
import axios from 'axios'
import Cards from './Cards'
import SearchBar from './SearchBar'

function ProductList() {

    const { data, setData, cart, setCart } = useContext(newContext)

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((response) => {
            setData(response.data.products)
        })
        .catch((error) => {
            console.error('Error fetching product details:', error);
          });
    }, [])

    const addItem = (item) => {
        const founditem = Boolean(cart.find(i => item.title === i.title))
        if (founditem) {
            setCart(pre =>
                pre.map(data => {
                    if (data.title === item.title) {
                        return { ...data, count: data.count + 1 }
                    }
                    return data
                })
            )

        }
        else {
            const newItem = { ...item, count: 1 }
            setCart((pre) => [...pre, newItem])
        }
    }
         

    return (
        <div >
            <SearchBar  />
            <Cards data={data} addItem={addItem} cart={cart} />
        </div>
    )
}

export default ProductList