import React, { Component } from 'react';
import Character from './Character';

class DisneyCharacters extends Component {

    state = {
        characters: []
    }

    componentDidMount() {
        fetch('https://api.disneyapi.dev/characters')
            .then(resp => resp.json())
            .then(data => {
                console.log(data.data)
                this.setState({
                    characters: data.data
                })
            })
    }



    render() {
        return (
            <main>
                {/* <h1>Disney Characters</h1> */}
                {this.state.characters.map(character => {
                    return (
                        <Character 
                            key={character.id}
                            characterName={character.name}
                            characterImg={character.imageUrl}
                        />
                    )
                })}
            </main>
        );
    }
}

export default DisneyCharacters;