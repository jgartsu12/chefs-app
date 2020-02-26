import React, { Component } from 'react';
import {  reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
    return (
        <div className='search-bar-grid'>
            <i className='fas fa-search search-bar-grid__icon'></i>
            <input className={`${props.className} form-search-bar search-bar-grid__input`}{...props.input} type='text' placeholder={`${props.placeholder}`} />
        </div>
    )
}

class eRestaurantSearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit} className={`${className} e-restaurant-search-bar`}>
                <Field name='query'
                    className='e-restaurant-search-bar__form-search-bar'
                    placeholder='Search'
                    component={FormSearchBar}
                />
            </form>
        )
    }
}

eRestaurantSearchBar = reduxForm({
    form: 'eRestaurantSearchBar'
}) (eRestaurantSearchBar);

export default eRestaurantSearchBar;