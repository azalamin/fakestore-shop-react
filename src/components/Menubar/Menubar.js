import React from 'react';
import './Menubar.css';

const Menubar = ({count}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">Logo</div>
                    <div className="col-md-10 menu-container">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Cart <sup className='text-danger'>{count}</sup> </li>
                        <li>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;