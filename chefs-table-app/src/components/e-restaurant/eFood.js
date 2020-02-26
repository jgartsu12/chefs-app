import React, { Component } from 'react';
import { connect } from 'react-redux';

import Amount from '../amount';
import ChefsGreenPriceTag from '../chefs-greenPriceTag';
import * as actions from '../../store/actions';

class eFood extends Component {
    
    handleAddToBag = () => {
        if(document.getElementById('e-bag').classList.contains('e-bag-hidden')) {
            document.getElementById('e-bag').classList.remove('e-bag-hidden');
            const { _id, title, description, price, belongsTo, imageUrl } = this.props;
            this.props.addBaggedFood({ _id, title, description, price, belongsTo, imageUrl });
        } else {
            document.getElementById('e-bag').classList.add('e-bag-hidden');
        }
    }

    render() {
        const { _id, title, description, price } = this.props;
        return (
            <div className='e-food'>
                <div className='e-food__front'>
                    <img className='e-food__front__image' src='http://via.placeholder.com/220x220'/>
                    <div className='e-food__front__title'>{title}</div>
                </div>
                <div className='e-food__back'>
                    <div className='e-food__back__title'>
                        {title}
                    </div>
                    <div className='e-food__back__description'>
                        {description}
                    </div>
                    <ChefsGreenPriceTag className='e-food__back__price' title={price}/>
                    <Amount className='e-food__back__amount' amount={1}/>
                    <a onClick={this.handleAddToBag} className='e-food__back__add-to-e-bag'>
                        Add To e-Bag
                    </a>
                </div>
            </div>
        )
    }
}

eFood = connect(null, actions)(eFood);

export default eFood;