const initialState = {
    loading: false, 
    characters: [], 
    error: ''
}

const charactersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCHING_CHARACTERS':
            return {
                ...initialState, 
                loading: true
            }
        case 'FETCHING_CHARACTERS_SUCCESS':
            console.log(action);
            return {
                ...initialState, 
                characters: action.characters
            }
        case 'FETCHING_CHARACTERS_ERROR':
            return {
                ...initialState,
                characters: action.error
            }
        default:
            return state;
    }
}

export default charactersReducer