import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import eRestaurantSearchBar from './eRestaurantSearchBar';
import eFood from './eFood';
import eBag from './eBag';
import eBagButton from './eBagButton';

class eRestaurant extends Component {
    
    constructor() {
        super()

        this.state = {
            showFood: true
        }
    }

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'

            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchFoodCategories();

        // filter food with links
        this.props.fetchFood();
    }

    shouldComponentUpdate(nextProps) {
        if(this.props != nextProps) {
            this.props.setNavbarLinks(nextProps.categories, (_id_) => this.props.filterFoodWithCategoryId(_id));
        }
        return true
    }

    onSubmit = (fields) => {
        this.props.filterFoodWithQuery(fields)
    }

    handleAddToBag = () => {
        if(document.getElementById('e-bag').classList.contains('e-bag-hidden')) {
            document.getElementById('e-bag').classList.remove('e-bag-hidden');
        } else {
            document.getElementById('e-bag').classList.add('e-bag-hidden');
        }
    }

    render() {
        return (
            <div className='e-restaurant'>
                <eRestaurantSearchBar onSubmit={this.onSubmit} className='e-restaurant__search-bar'/>
                <div className='e-restaurant__food'>
                    {
                        this.props.filteredFood.map(food => {
                            return (
                                <eFood {...food} key={food._id} />
                            )
                        })
                    }
                </div>
                {
                    this.state.showEBag ? <eBag className='e-restaurant__bag' /> : ''
                }

                <eBagButton onClick={this.handleAddToBag} className='e-restaurant__bag' icon='fas fa-bag-plus'/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { categories, filteredFood } = state.eRestaurant;
    return {
        categories,
        filteredFood
    }
}

eRestaurant = connect(mapStateToProps, actions)(eRestaurant);

export default eRestaurant;