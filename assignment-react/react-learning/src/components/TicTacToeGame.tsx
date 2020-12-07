import React from 'react';
import TicTacToeBoard from './TicTacToeBoard';

let resetStyle = {
    background: 'black',
    color: 'white',
    align: 'left',
    marginBottom: '10px'
}


export default class Game extends React.Component {

    state = {
        next: 'O',
        cells: ['', '', '',
            '', '', '',
            '', '', ''
        ]
    }

    handleStateChange = (changedState: any) => {
        let cells = [...this.state.cells];
        cells[changedState] = this.state.next;
        let next = this.state.next === 'O' ? 'X' : 'O';
        this.setState({ cells, next });
    }

    render() {
        return (
            <div className='container game' style={{ alignItems: 'center center', width: '500px' }}>
                <h1>Tic Tac Toe Game</h1>
                <h2>Next Move: {this.state.next}</h2>
                <button style={resetStyle} >Reset</button>
                <TicTacToeBoard values={this.state} onCellClick={this.handleStateChange} />

            </div>
        );
    }

};
