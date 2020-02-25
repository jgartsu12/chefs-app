import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';
import { FormButton } from '../formFields';
import ReviewFoodOrder from './reviewFoodOrder';

class ReviewOrderForm extends Component {
    render() {
        const { className, handleSubmit, subTotal } = this.props;
        let tax = 0.0635;
        return (
            <form onSubmit={handleSubmit} className={`${className} review-order-form`}>
                <div className='review-order-form__legend'>
                    <div className='review-order-form__legend__name'>Name</div>
                    <div className='review-order-form__legend_amount'>Amount</div>
                    <div className='review-order-form__legend__price'>Price</div>
                </div>

                <ReviewFoodOrder className='review-food-order__food'/>
                <div className='review-order-form__line'></div>

                <Field className='review-order-form__proceed'
                    onClick={() => history.push('./information/shipping')}
                    type='submit'
                    title='Proceed to Checkout'
                    name='proceed'
                    component={FormButton}
                />

                <Field className='review-order-form__back'
                    onClick={() => history.push('/online-restaurant')}
                    type='button'
                    title='Go Back'
                    name='back'
                    short={true}
                    component={FormButton}
                />

                <div className='reivew-order-form__details review-order-details'>
                    <div className='review-order-details__subtotal review-order-detail'>
                        <div className='review-order-detail__title'>Subtotal</div>
                        <div className='review-order-detail__price'>${subTotal}</div>
                    </div>
                    <div className='review-order-details__subtotal review-order-detail'>
                        <div className='review-order-detail__title'>Tax</div>
                        <div className='review-order-detail__price'>${tax}</div>
                    </div>
                    <div className='review-order-details__subtotal review-order-detail'>
                        <div className='review-order-detail__title'>Email</div>
                        <div className='review-order-detail__price'>$0.00</div>
                    </div>
                    <div className='review-details__total review-order-detail review-order-detail-green'>
                        <div className='review-order-detail__title review-order-detail-green__title'>Total</div>
                        <div className='review-order-detail__price review-order-detail-green__price'>${subtotal + tax}</div>
                    </div>
                
                </div>
            </form>
        )
    }
}

ReviewOrderForm = reduxForm({
    form: 'ReviewOrderForm'
})(ReviewOrderForm);

export default ReviewOrderForm;