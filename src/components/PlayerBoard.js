import React, { useState, useEffect } from "react";
import Board from "./Board";

const PlayerBoard = (props) => {
  let { game, player, coords, setCoords, updateBoards} = props;

  useEffect(() => {
    let board = null;
    if (player === "computer") {
      board = game.computer.board;
    } else {
      board = game.human.board;
    }

    let positions = [];
    for (let i = 0; i < board.ships.length; i++) {
      const ship = board.ships[i];
      positions.push(...ship.position);
    }

    let newCoords = [...coords];

    for (let i = 0; i < newCoords.length; i++) {
      if (positions.find((coord) => coord === newCoords[i].coord) !== undefined) {
        newCoords[i].ship = true;
      }
    }

    setCoords(newCoords);
  }, []);

  return (
    <div className="col-12 col-md-6 text-center board player-board">
      <h2>{player} Board</h2>
      <Board updateBoards={updateBoards} coords={coords} setCoords={setCoords} player={player} game={game} />
    </div>
  );
};

export default PlayerBoard;
