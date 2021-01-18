import React from "react";
import PlayerBoard from "./PlayerBoard";
import ComputerBoard from "./ComputerBoard";


const GameBoardDisplay = () => {
    return (
        <div className="row game-board">
            <PlayerBoard/>
            <ComputerBoard/>
        </div>
    )
}

export default GameBoardDisplay;