import React from 'react';
import ReactModal from '../ReactModal/ReactModal';

const SingleProduct = (props) => {
    const {setCartCount, deleteCartCount, product} = props;
    const {title, image, price} = props.product || {};
    return (
        <div className='border col-md-3 card g-3 m-5 py-3' data-aos="flip-right">
           <div>
               <img className='w-50' src={image} alt="" />
               <h3>{title.slice(0, 10)}</h3>
               <h4>Price: {price}</h4>
               <div className="d-flex justify-content-around">
                   <button onClick={setCartCount} className='btn btn-primary'>Add to Cart</button>
                   <button onClick={deleteCartCount} className='btn btn-danger'>Delete</button>
                   <ReactModal product={product}></ReactModal>
               </div>
           </div>
        </div>
    );
};

export default SingleProduct;