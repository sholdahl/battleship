import React, { useState, useEffect } from "react";
import PlayerBoard from "./PlayerBoard";
import gameLoop from "../gameLoop";
import computerAI from "../computerAI";
import blankBoard from "../blankBoard";
import GameMessages from "./GameMessages";

const GameBoardDisplay = () => {
  const [game, setGame] = useState(gameLoop(computerAI));
  const [player1Board, setPlayer1Board] = useState(blankBoard());
  const [computerBoard, setComputerBoard] = useState(blankBoard());

  let updateCoords = (gameBrd, displayBoard) => {
    let newCoords = [...displayBoard];

    for (let i = 0; i < newCoords.length; i++) {
      if (gameBrd.attacksReceived.find((coord) => coord === newCoords[i].coord) !== undefined) {
        newCoords[i].hit = true;
      }
    }

    return newCoords;
  };

  let updateBoards = () => {
    setPlayer1Board(updateCoords(game.human.board, player1Board));
    setComputerBoard(updateCoords(game.computer.board, computerBoard));
  };

  return (
    <div className="row game-board">
      <GameMessages game={game}/>
      <PlayerBoard
        player="Player"
        game={game}
        coords={player1Board}
        setCoords={setPlayer1Board}
        updateBoards={updateBoards}
      />
      <PlayerBoard
        player="Computer"
        game={game}
        coords={computerBoard}
        setCoords={setComputerBoard}
        updateBoards={updateBoards}
      />
    </div>
  );
};

export default GameBoardDisplay;
