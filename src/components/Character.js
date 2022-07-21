import React, { Component } from 'react';

class Character extends Component {
    render() {
        return (
            <main>
                <h3>{this.props.characterName}</h3>
                <img src={this.props.characterImg} />
                <p>lorem ipsum</p>
            </main>
        );
    }
}

export default Character;