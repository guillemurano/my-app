import 'whatwg-fetch';

const fetchingCharacters = () => ({
    type: 'FETCHING_CHARACTERS'
});

const fetchingCharactersSuccess = characters => ({
    type: 'FETCHING_CHARACTERS_SUCCESS',
    characters: characters
});

const fetchingCharactersError = error => ({
    type: 'FETCHING_CHARACTERS_ERROR',
    error: error
});

export const getCharacters = (dispatch) => {
    return dispatch => {
        dispatch(fetchingCharacters())

        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(characters => 
                dispatch(fetchingCharactersSuccess(characters.results)))
            .catch(err => dispatch(fetchingCharactersError('Something went wrong')))
    }
}