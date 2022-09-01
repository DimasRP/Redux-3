import TYPES from "../Types"

const initialState = {
    data: []
}

const data = (state = initialState, action) =>{

    switch (action.type) {
        case TYPES.FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
    
        default:
            return state;
    }
}

export default data
