import React, { Component } from 'react';
import { connect } from 'react-redux';

import BaggedFood from './BaggedFood';
import * as actions from '../../store/actions';
import eBagButton from './eBagButton';
import history from '../../history';

function eBaggedContent({className, foods}) {
    let count = foods.length;
    let foodsJSX = foods.map(food => <BaggedFood {...food} key={food._id}/>);
    return (
        <div className={`${className} e-bagged-content`}>
            <div className='e-bagged-content__title'>
                e-Bag ({count})
            </div>
            <div className='e-bagged-content__foods'>
                {foodsJSX}
            </div>
            <eBagFooter className='e-bagged-content__footer' foods={foods}/>
        </div>
    )
}

function eBagFooter({className, foods}) {
    let subtotal = 0;
    foods.map(eBaggedFood => {
        subtotal += eBaggedFood.amount * eBaggedFood.food.price;
    })
    return (
        <div className={`${className} e-bag-footer`}>
            <a onClick={() => history.push('/order/reviewFood')} className='e-bag-footer__checkout'>
                Checkout
            </a>
            <div className='e-bag-footer__subtotal'>
                Subtotal
            </div>
            <div className='e-bag-footer__price'>
                ${subtotal}
            </div>
        </div>
    )
}

class eBag extends Component {
    
    componentDidMount(){
        this.props.fetchBaggedFoods();
    }

    handleAddToBag = () => {
        if(document.getElementById('e-bag').classList.contains('e-bag-hidden')) {
            document.getElementById('e-bag').classList.remove('e-bag-hidden');
        } else {
            document.getElementById('e-bag').classList.add('e-bag-hidden')
        }
    }

    render() {
        const { className } = this.props;
        return (
            <div id='e-bag' className={`${className} e-bag e-bag-hidden`}>
                <eBagButton className='e-bag__toggle' icon='fas fa-times' onClick={this.handleAddToBag}/>
                <eBaggedContent className='e-bag__content' foods={this.props.eBaggedFood}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { BaggedFood } = state.user;
    return {
        BaggedFood
    }
}

BaggedFood = connect(mapStateToProps, actions)(BaggedFood);

export default eBag;