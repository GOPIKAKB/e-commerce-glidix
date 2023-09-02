
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './../Style/ProductDetail.css'

const ProductDetail = ({ }) => {
    const [product, setProduct] = useState(null);
    const productId = useParams()

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setProduct(response.data);
        })

    }, []);

    if (!product) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <div className="product-detail">
                <div className="product-thumbnail">
                    <img src={product.thumbnail} alt={product.title} loading="lazy"/>
                </div>
                <div className="product-info">
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Discount: {product.discountPercentage}%</p>
                    <p>Brand: {product.brand}</p>
                    <p>Category: {product.category}</p>
                    <p>In Stock: {product.stock}</p>
                </div>
                <div className="image-gallery">
                    <h3>Image Gallery</h3>
                    <div className="gallery-images">
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index}`} loading="lazy"/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
