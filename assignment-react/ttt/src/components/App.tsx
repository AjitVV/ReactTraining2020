import React from 'react';
import logo from './logo.svg';
import '../App.css';
import TicTacToeGame from './TicTacToeGame';
import MoveList from './MoveList'
import TicTacToe from '../services/TicTacToe';
import cell from './TicTacToeCell';

class App extends React.Component {
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
    message: 'Start : O',
    moveTrace: []
  }

  constructor(props: any) {
    super(props);
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
    this.setState({ moveTrace: [...this.game.moveTrace] })
  }

  resetGame = () => {
    this.game = new TicTacToe();
    this.setState({
      next: this.game.next,
      cells: [...this.game.cells],
      winner: this.game.winner,
      winningMoves: this.game.winningMoves,
      over: false,
      message: 'Start: O',
      moveTrace: []
    });
  }

  resetMove = (move: any, index: number) => {
    
  }

  render() {
    return (
      <div className="App">
        <TicTacToeGame {...this.state} resetGame={this.resetGame} onCellClick={this.onCellClick} />
        <MoveList moveList={this.state.moveTrace} resetMove={this.resetMove} />
      </div>
    );
  }
}

export default App;
