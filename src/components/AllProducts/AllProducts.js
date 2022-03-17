import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = ({setCartCount, deleteCartCount}) => {
    const [products, setProducts] = useState([]);
    
    useEffect( () => {
        
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    return (
        <div className='row'>
            {
                products.map((pd) => <SingleProduct 
                product={pd}
                key={pd.id}
                setCartCount={setCartCount}
                deleteCartCount={deleteCartCount}
                ></SingleProduct>)
            }
        </div>
    );
};

export default AllProducts;