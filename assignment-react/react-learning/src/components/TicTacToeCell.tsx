import React from 'react';

export default (props:any)=>{

    return (
        <button onClick={props.cellClicked}
                className='cell'>{props.value}</button>
    );
};  

