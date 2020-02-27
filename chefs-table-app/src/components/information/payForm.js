import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { FormInput, FormButton } from '../components/formFields';
import history from '../../history'
import OrderSummary from './orderSummary';
import { UnderlinedTitle } from './infoHelp';

class PayForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`{className} pay-form`}>
                <Field className='pay-form__name'
                    type='name'
                    title='Name on Credit Card'
                    placeholder='Name'
                    name='name'
                    component={FormInput}
                />

                <Field className='pay-form__card'
                    type='card'
                    title='Credit Card Number'
                    placeholder='____-____-____-____'
                    name='card'
                    component={FormInput}
                />

                <Field className='pay-form__expiration'
                    type='expiration'
                    title='Expiration Date'
                    placeholder='expiration'
                    name='expiration'
                    component={FormInput}
                />

                <Field className='pay-form__ccv'
                    type='ccv'
                    title='CCV'
                    placeholder='CCV'
                    name='ccv'
                    component={FormInput}
                />

                <div className='pay-form__line'></div>

                <Field className='pay-form__pay-complete'
                    onClick={() => history.push('/information/pay')}
                    type='submit'
                    title='Pay & Complete'
                    name='pay-complete'
                    component={FormButton}
                />

                <Field className='pay-form__back'
                    onClick={() => history.push('/')}
                    type='button'
                    title='Back'
                    name='back'
                    short={true}
                    component={FormButton}
                />

                <OrderSummary className='pay-form__order-summary'/>
                <div className='pay-form__email-info email-info'>
                    <UnderlinedTitle className='email-info__title' title='E-mail to' />
                    <div className='email-info__name small-text'>{this.props.name}</div>
                    <div className='email-info__email small-text'>{this.props.email}</div>
                </div>
            </form>
        )
    }
}

PayForm = reduxForm({
    form: 'PayForm'
}) (PayForm);

function mapStateToProps(state) {
    const { name, email } = state.user.user;
    return { name, email }
}

PayForm = connect(mapStateToProps)(PayForm);

export default PayForm;