// write product card here
import React from 'react';
import Button from './button';
import "../App.css"

const Productcard = () => {
    return (
        <div className='box'>
            <div className='image'>
                <img src='https://cdna.artstation.com/p/assets/images/images/053/463/500/large/dark_icar-1u.jpg?1662282934'/>
            </div>
            <div className='name'>
                <p>Watch</p>
            </div>
            <div className='price'>
                <p>$20.0</p>
            </div>
            <Button/>
        </div>
    );
}

export default Productcard;
