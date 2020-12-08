import React from 'react';

interface CellProps{
    value:string;
    id:number|string;    
    winningMoves:number[]|null;
    over:boolean;
    cellClicked():void;
}

const cell= ({value,cellClicked,id,winningMoves,over}:CellProps)=>{

    let cellStyle={
        background: value||over?'#EEE':'white',
        cursor: value||over? 'not-allowed':'pointer'
    };

    let handler= value||over? (()=>console.log('you cant click here')) : cellClicked;
    
    //const disabled= value?true:false;
    const disabled=false;

    if(winningMoves ){
        let [a,b,c]=winningMoves;
        if(id===a || id===b || id===c)
            cellStyle.background='lightgreen';
    }

    return (
        <button onClick={handler}
                style={cellStyle}
                disabled={disabled}
                className='cell'>{value}</button>
    );
};  

export default cell;
