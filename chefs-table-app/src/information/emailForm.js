import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../components/formFields';
import history from '../history';
import OrderSummary from './orderSummary';

class EmailForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} email-form`}>
                <Field className='email-form__name'
                    type='name'
                    title='Name'
                    placeholder='Name'
                    name='name'
                    component={FormInput}
                />

                <Field className='email-form__email'
                    type='email'
                    title='E-Mail'
                    placeholder='email'
                    name='email'
                    component={FormInput}
                />

                <div className='email-form__line'></div>

                <Field className='email-form__use-this-email'
                    onClick={() => history.push('/infomation/pay')}
                    type='submit'
                    title='Use This E-mail'
                    name='use-this-email'
                    component={FormButton}
                />

                <Field className='email-form__back'
                    onClick={() => history.push('/')}
                    type='button'
                    title='Back'
                    name='back'
                    short={true}
                    component={FormButton}
                />
                <OrderSummary className='email-form__order-summary' />
            </form>
        )
    }
}

EmailForm = reduxForm({
    form: 'EmailForm'
})(EmailForm);

export default EmailForm;