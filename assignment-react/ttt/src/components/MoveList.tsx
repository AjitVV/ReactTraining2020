import React from 'react'

interface MoveListProps {
    moveList: any[]
    resetMove: (move: any, index: number) => void
}

export default class MoveList extends React.Component<MoveListProps> {
    constructor(props: MoveListProps) {
        super(props)
    }
    render() {
        return (
            <table className="table">
                <th>Play</th>
                <th>To</th>
                <th></th>
                <tbody>
                    {this.props.moveList.map((move: any, index: number) => {
                        return <tr key={index}>
                            <td>{move[0]}</td>
                            <td>{move[1]}</td>
                            <td onClick={() => this.props.resetMove(move, index + 1)}>REVERT</td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}