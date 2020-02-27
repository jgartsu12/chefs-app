import {
    SET_USER_ORDERS,
    SET_ORDER_DETAIL,
    SET_BAGGED_FOODS,
    ADD_BAGGED_FOOD,
    AUTHENTICATE_USER
} from '../actions/types';

const INITIAL_STATE = {
    user: {},
    baggedFoods: [],
    orders: [],
    orderDetail: {
        _id: -1,
        total: 0,
        orderNumber: '',
        orderDate: null,
        creditCard: '',
        user: {
            name: '',
            email: ''
        }
    }
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
            const { user } = action.payload;
            return {
                ...state,
                user
            }
        case ADD_BAGGED_FOOD:
            let exists = false;
            const newBF = action.payload;
            let baggedFoods = [];
            state.baggedFoods.map(baggedFood => {
                if(baggedFood.food._id == newBF._id) {
                    exists = true
                    baggedFood.amount += 1;
                }
                baggedFoods.push(baggedFood);
            })
            if(exists == false) {
                baggedFoods.push({
                    _id: state.baggedFoods.length + 1,
                    food: newBF,
                    amount: 1
                })
            }
            return {
                ...state,
                baggedFoods: baggedFoods
            }
        case SET_BAGGED_FOODS:
            return {
                ...state,
                purchases: action.payload
            }
        case SET_USER_ORDERS:
            let orderDetail;
            state.orders.map(order => {
                if(order._id == action.payload) {
                    orderDetail = order;
                }
            })
            return {
                ...state,
                orderDetail
            }
        default: return state;
    }
}