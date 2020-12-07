import React from 'react';
import Cell from './TicTacToeCell';

export default class Board extends React.Component<any> { 

    render = () => {
        const {next, cells} = this.props.values
        console.log(next, cells)
        return (
            <div className='container' >
                <div className='row'>
                    <Cell value={cells[0]} cellClicked={() => this.props.onCellClick(0)} move='X' />
                    <Cell value={cells[1]} cellClicked={() => this.props.onCellClick(1)} move='X' />
                    <Cell value={cells[2]} cellClicked={() => this.props.onCellClick(2)} move='X' />
                </div>
                <div className='row'>
                    <Cell value={cells[3]} cellClicked={() => this.props.onCellClick(3)} move='X' />
                    <Cell value={cells[4]} cellClicked={() => this.props.onCellClick(4)} move='X' />
                    <Cell value={cells[5]} cellClicked={() => this.props.onCellClick(5)} move='X' />
                </div>
                <div className='row'>
                    <Cell value={cells[6]} cellClicked={() => this.props.onCellClick(6)} move='X' />
                    <Cell value={cells[7]} cellClicked={() => this.props.onCellClick(7)} move='X' />
                    <Cell value={cells[8]} cellClicked={() => this.props.onCellClick(8)} move='X' />
                </div>

            </div>
        );
    };

}