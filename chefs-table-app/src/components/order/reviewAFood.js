import React, { Component } from 'react';

import ChefsGreenPriceTag from '../chefs-greenPriceTag';

class ReviewAFood extends Component {
    render() {
        const { food, amount } = this.props;
        const { imageURL, title, price } = food;
        return (
            <div className='review-a-food'>
                <img className='review-a-food__image' src={imageURL}/>
                <div className='review-a-food__title'>{title}</div>
                <div className='review-a-food__amount'>{amount}</div>
                <ChefsGreenPriceTag className='review-a-food__price' title={price * amount}/>
            </div>
        )
    }
}

export default ReviewAFood;