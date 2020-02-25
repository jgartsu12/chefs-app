import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Orders from './orders'
import OrderDetail from './orderDetail';

class OrderHistory extends Component {
    render() {
        return (
            <div className='order-history'>
                <PageTitle className='order-detail__page-title' title='Order History'/>
                <div className='order-history__content'>
                    <Orders className='order-history__orders'/>
                    <OrderDetail className= 'order-history__detail'/>
                </div>
                <div className='order-history__border-bottom'></div>
            </div>
        )
    }
}

export default OrderHistory;