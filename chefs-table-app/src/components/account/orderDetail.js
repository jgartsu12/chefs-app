import React, { Component } from 'react';
import { connect } from 'react-redux';

function OrderDetailLabel({className, title, value}) {
    return (
        <div className={`${className} order-detail-label`}>
            <div className='order-detail-label__title'>{title}</div>
            <div className='order-detail-label__value'>{value}</div>
        </div>
    )
}

class OrderDetail extends Component {
    render() {
        const { className, orderNum, orderDate, orderTime, user, total, creditCard } = this.props;
        const { name, pickUpTime } = user;
        const namePickUpTime = `${name}         ${pickUpTime}`
        return (
            <div className={`${className} order-detail`}>
                <OrderDetailLabel
                    className='order-detail__order-num'
                    title='Order Number'
                    value={orderNum}
                />
                <OrderDetailLabel
                    className='order-detail__order-date'
                    title='Order Date'
                    value={orderDate}
                />
                <OrderDetailLabel
                    className='order-detail__order-time'
                    title='Order Time'
                    value={orderTime}
                />
                <OrderDetailLabel
                    className='order-detail__total'
                    title='Total'
                    value={total}
                />
                <OrderDetailLabel
                    className='order-detail__credit-card'
                    title='Credit Card'
                    value={creditCard}
                />
                <a className='order-detail__track-order-status'>Track Order Status</a>
                <a className='order-detail__print-receipt'>Print Receipt</a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { OrderDetail } = state.user;
    return {
        ...OrderDetail
    }
}

OrderDetail = connect(mapStateToProps)(OrderDetail);

export default OrderDetail;