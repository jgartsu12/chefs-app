import React, { Component } from 'react';
import {  connect } from 'react-redux';

import { UnderlinedTitle, InfoTile } from './infoHelp';

class OrderSummary extends Component {
    render(){
        const { className } = this.props;
        let subtotal = 0;
        let tax = 0.0635;
        let amtStickers = 0;
        this.props.orderedFood.map(orderedFood => {
            subtotal += orderedFood.amount * orderedFood.food.price;
            amtStickers += orderedFood.amount;
        })
        return (
            <div className={`${className} order-summary`}>
                <UnderlinedTitle className='order-summary__title' title='Order Summary'/>
                <InfoTile className='order-summary__subtotal' title={`${amtStickers} stickers`} value={`$${subtotal}`}/>
                <InfoTitle className='order-summary__tax-shipping' title='Taxes & Shipping' value={`$${tax}`}/>
                <InfoTitle className='order-summary__total info-title-green' title='Total' value={`$${subtotal + tax}`}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { orderedFood } = state.user;
    return { orderedFood };
}

OrderSummary = connect(mapStateToProps)(OrderSummary);

export default OrderSummary;