import React, { Component } from 'react';

import amount from '../amount';
import ChefsGreenPriceTag from '../chefs-greenPriceTag';

class OrderedFood extends Component {
    render() {
        console.log(this.props);
        const { className, food, amount } = this.props;
        const { title, price } = food;
        return (
            <div className={`${className} ordered-food`}>
                <img className='ordered-food__image' src='http://via.placeholder.com/130x130' />
                <div className='ordered-food__title'>{title}</div>
                <Amount className='ordered-food__amount' amount={amount}/>
                <a className='ordered-food__remove'>Remove</a>
                <ChefsGreenPriceTag className='ordered-food__price' title={price}/>
            </div>
        )
    }
}

export default OrderedFood;