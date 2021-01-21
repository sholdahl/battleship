import React, { useState, useEffect } from "react";
import PlayerBoard from "./PlayerBoard";
import gameLoop from "../gameLoop";
import computerAI from "../computerAI";

const GameBoardDisplay = () => {
  const [game, setGame] = useState(gameLoop(computerAI));

//   useEffect(() => {
//       let newGame = game.
//     setGame(gameLoop(computerAI));
//   }, []);

  return (
    <div className="row game-board">
      <PlayerBoard player="Player" game={game}/>
      <PlayerBoard player="Computer" game={game}/>
    </div>
  );
};

export default GameBoardDisplay;
