import {
    SET_USER_ORDERS,
    SET_ORDER_DETAILS,
    SET_BAGGED_FOODS,
    ADD_BAGGED_FOOD,
    AUTHENTICATE_USER
} from './types';

export function signIn({email, password}) {
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: 'default first last',
                address: 'asdas',
                baggedFoods: []
            }
        }
    })
}

export function setOrderDetail(_id) {
    return ({
        type: SET_ORDER_DETAILS,
        payload: _id
    })
}

export function addBaggedFood(food) {
    return ({
        type: ADD_BAGGED_FOOD,
        payload: food
    })
}

export function fetchBaggedFoods() {
    return ({
        type: SET_BAGGED_FOODS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                    price: 1.99,
                    belongsTo: [0, 1],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                    price: 1.99,
                    belongsTo: [0, 6],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 1
            },
        ]
    })
}

export function fetchUserOrders() {
    return ({
        type: SET_USER_ORDERS
        payload: [
            {
                 _id: 0,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'name name',
                    shippingAddress: 'some address Street'
                }
            }
        ]
    })
}
