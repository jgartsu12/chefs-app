import {
    SET_FOOD_CATEGORIES,
    SET_FOODS,
    FILTER_FOOD_WITH_CATEGORY_ID,
    FILTER_FOOD_WITH_QUERY
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    foods: [],
    filteredFoods: []
}

export default function(state= INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FOOD_CATEGORIES:
            const categories = action.payload;
            return {
                ...state,
                categories
            }
        case SET_FOODS:
            return {
                ...state,
                foods: action.payload
            }
        case FILTER_FOOD_WITH_CATEGORY_ID:
            var filteredFoods = [];
            state.foods.map(food => {
                if(food.belongsTo.includes(action.payload)) {
                    filteredFoods.push(food);
                }
            })
            return {
                ...state,
                filteredFoods
            }
        case FILTER_FOOD_WITH_QUERY:
            let filteredFoods = [];
            state.foods.map(food => {
                if(food.title.toLowerCase().includes(action.payload.query.toLowerCase())) {
                    filteredFoods.push(food)
                }
            })
            return {
                ...state,
                filteredFoods
            }
        default: return state;
    }
}