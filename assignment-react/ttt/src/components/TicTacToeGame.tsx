import React, { Component } from 'react';
import TicTacToeBoard from './TicTacToeBoard';
import TicTacToe from '../services/TicTacToe';


let resetStyle = {

    color: 'white',
    align: 'left',
    width: '40%',
    marginBottom: '10px'
}



export default class Game extends Component {
    private game: TicTacToe;
    state = {
        next: 'O',
        cells: ['', '', '',
            '', '', '',
            '', '', ''
        ],
        winner: '',
        winningMoves: null,
        over: false,
        message: 'Start : O'
    }

    constructor() {
        super({});
        this.game = new TicTacToe();
        this.onCellClick = this.onCellClick.bind(this);
    }



    onCellClick(cellId: number) {

        if (!this.game.move(cellId))
            return; //nothing changed in the game

        if (this.game.winner) {
            this.setState({
                winner: this.game.winner,
                message: `Winner is ${this.game.winner}`,
                winningMoves: this.game.winningMoves
            });
        }
        else if (this.game.gameover && !this.game.winner)
            this.setState({ message: 'Stalemate' });
        else {
            this.setState({
                message: `Next Move : ${this.game.next}`,
            })
        }

        this.setState({ cells: [...this.game.cells], over: this.game.gameover });







    }


    resetGame = () => {

        this.game = new TicTacToe();

        this.setState({
            next: this.game.next,
            cells: [...this.game.cells],
            winner: this.game.winner,
            winningMoves: this.game.winningMoves,
            over: false,
            message: 'Start: O'
        });
    }


    render() {
        return (
            <div className='container game' style={{ alignItems: 'center center'}}>
                <h1>Tic Tac Toe Game</h1>
                <h2>{this.state.message}</h2>
                <button onClick={this.resetGame} className='btn btn-danger' style={resetStyle} >Reset</button>

                <TicTacToeBoard
                    cells={this.state.cells}
                    onCellClick={this.onCellClick}
                    winningMoves={this.state.winningMoves}
                    winner={this.state.winner}
                    over={this.state.over}

                />

            </div>
        );
    }
};
