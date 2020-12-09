import React, { Component } from 'react';
import TicTacToeBoard from './TicTacToeBoard';
import TicTacToe from '../services/TicTacToe';

let resetStyle = {
    color: 'white',
    align: 'left',
    width: '40%',
    marginBottom: '10px'
}

interface GameProps {
    cells: string[]
    next: string
    winner: string | null
    winningMoves: null | number[]
    moveTrace: any[]
    over: boolean
    message: string
    resetGame: () => void
    onCellClick: (pos: number) => void

}
export default class Game extends Component<GameProps> {

    constructor(props: GameProps) {
        super(props)
    }

    render() {
        return (
            <div className='game' style={{ alignItems: 'center center' }}>
                <h1>Tic Tac Toe Game</h1>
                <h2>{this.props.message}</h2>
                <button onClick={this.props.resetGame} className='btn btn-danger' style={resetStyle} >Reset</button>
                <TicTacToeBoard
                    cells={this.props.cells}
                    onCellClick={this.props.onCellClick}
                    winningMoves={this.props.winningMoves}
                    winner={this.props.winner}
                    over={this.props.over}
                />
            </div>
        );
    }
};
