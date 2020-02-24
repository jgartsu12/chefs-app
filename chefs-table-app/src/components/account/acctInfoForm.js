import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton, LongGrayButton } from '../formFields';
import history from '../../history';

class AcctInfoForm extends Component {

    constructor(){
        super()

        this.state = {
            showPasswords: false
        }
    }

    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} acct-info-form`}>
                <Field className='acct-info-form__name'
                    type='name'
                    title='Name'
                    placeholder='Name'
                    name='name'
                    component={FormInput} 
                />

                <Field className='acct-info-form__email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    name='email'
                    component={FormInput}
                />

                <Field className='acct-info-form__street-address'
                    type='address'
                    title='Street Address'
                    placeholder='Street Address'
                    name='address'
                    component={FormInput}
                />

                <Field className='acct-info-form__city'
                    type='city'
                    title='City'
                    placeholder='City'
                    name='city'
                    component={FormInput}
                />

                <Field className='acct-info-form__state'
                    type='state'
                    title='State'
                    placeholder='State'
                    name='state'
                    component={FormInput}
                />

                <Field className='acct-info-form__zipcode'
                    type='zipcode'
                    title='Zipcode'
                    placeholder='Zipcode'
                    name='zipcode'
                    component={FormInput}
                />

                <div className='acct-info-form__line'></div>
                {
                    this.state.showPasswords ? 
                        [
                            <Field key={0} className='acct-info-form__current'
                                type='password'
                                title='Current Password'
                                placeholder='Current Password'
                                name='current'
                                component={FormInput}
                            />,
                            <Field key={1} className='acct-info-form__new'
                                type='password'
                                title='New Password'
                                placeholder='New Password'
                                name='new'
                                component={FormInput}
                            />,
                            <Field key={2} className='acct-info-form__confirm'
                                type='password'
                                title='Confirm Password'
                                placeholder='Confirm Password'
                                name='confirm'
                                component={FormInput}
                            />,
                            <Field key={3} className='acct-info-form__update-info'
                                onClick={() => this.setState({ showPasswords: false })}
                                type='submit'
                                title='Update Information'
                                name='update-info'
                                component={FormButton}
                            />,
                            <Field key={4} className='acct-info-form__cancel'
                                onClick={() => this.setState({ showPasswords: false })}
                                type='button'
                                title='Cancel'
                                name='cancel'
                                short={true}
                                component={FormButton}/>
                        ]
                    :
                        <Field className='acct-info-form_change-password'
                            onClick={() => this.setState({ showPasswords: true })}
                            type='button'
                            labelTitle='Password'
                            title='Change Password'
                            name='change-password'
                            component={LongGrayButton}
                        />
                }
            </form>
        )
    }
}

AcctInfoForm = reduxForm({
    form: 'AccountInformationForm'
}) (AcctInfoForm);

export default AcctInfoForm;
