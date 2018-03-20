import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCharacters } from '../redux/actions/characters'

class Characters extends Component{

    componentDidMount() {
        const {characters, onGetCharacters} = this.props;
        if(!characters.characters.length){
            onGetCharacters()
        }
    }
    
    render() {
        console.log(this.props)
        const { loading, error, characters } = this.props.characters
        if (loading) return <h1>Loading...</h1>
        if (error) return <h1>{error}</h1>

        return (
            <div>
                <h1>Characters!</h1>
                <ul>
                    {characters.map(character => 
                        <li key={character.id}>{character.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    characters: state.characters
})

const mapDispatchToProps = dispatch => ({
    onGetCharacters: () => dispatch(getCharacters())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(Characters)