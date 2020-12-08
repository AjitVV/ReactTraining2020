import React from 'react';
import Cell from './TicTacToeCell';


interface BoardProps{
    cells: string[];
    onCellClick(cellId:number):void;
    winningMoves:null|number[];
    winner:string|null;
    over:boolean;

}
    

 const board= (props:BoardProps) => {

        return (
            <div className='container' >
                <div className='row' style={{justifyContent: "center"}}>
                    <Cell over={props.over} id={0} winningMoves={props.winningMoves}  value={props.cells[0]} cellClicked={() => props.onCellClick(0)}  />
                    <Cell over={props.over} id={1} winningMoves={props.winningMoves}  value={props.cells[1]} cellClicked={() => props.onCellClick(1)}  />
                    <Cell over={props.over} id={2} winningMoves={props.winningMoves}  value={props.cells[2]} cellClicked={() => props.onCellClick(2)}  />
                </div>
                <div className='row' style={{justifyContent: "center"}}>
                    <Cell over={props.over} id={3} winningMoves={props.winningMoves}  value={props.cells[3]} cellClicked={() => props.onCellClick(3)}  />
                    <Cell over={props.over} id={4} winningMoves={props.winningMoves}  value={props.cells[4]} cellClicked={() => props.onCellClick(4)}  />
                    <Cell over={props.over} id={5} winningMoves={props.winningMoves}  value={props.cells[5]} cellClicked={() => props.onCellClick(5)}  />
                </div>
                <div className='row' style={{justifyContent: "center"}}>
                    <Cell over={props.over} id={6} winningMoves={props.winningMoves}  value={props.cells[6]} cellClicked={() => props.onCellClick(6)}  />
                    <Cell over={props.over} id={7} winningMoves={props.winningMoves}  value={props.cells[7]} cellClicked={() => props.onCellClick(7)}  />
                    <Cell over={props.over} id={8} winningMoves={props.winningMoves}  value={props.cells[8]} cellClicked={() => props.onCellClick(8)}  />
                </div>
                
           </div>
        );
    };

    export default board;

