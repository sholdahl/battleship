import React, { useState, useEffect } from "react";
import Board from "./Board";

const PlayerBoard = (props) => {
  let { game, player } = props;

  const [coords, setCoords] = useState([
    { coord: "A1", ship: false },
    { coord: "A2", ship: false },
    { coord: "A3", ship: false },
    { coord: "A4", ship: false },
    { coord: "A5", ship: false },
    { coord: "A6", ship: false },
    { coord: "A7", ship: false },
    { coord: "A8", ship: false },
    { coord: "A9", ship: false },
    { coord: "A10", ship: false },
    { coord: "B1", ship: false },
    { coord: "B2", ship: false },
    { coord: "B3", ship: false },
    { coord: "B4", ship: false },
    { coord: "B5", ship: false },
    { coord: "B6", ship: false },
    { coord: "B7", ship: false },
    { coord: "B8", ship: false },
    { coord: "B9", ship: false },
    { coord: "B10", ship: false },
    { coord: "C1", ship: false },
    { coord: "C2", ship: false },
    { coord: "C3", ship: false },
    { coord: "C4", ship: false },
    { coord: "C5", ship: false },
    { coord: "C6", ship: false },
    { coord: "C7", ship: false },
    { coord: "C8", ship: false },
    { coord: "C9", ship: false },
    { coord: "C10", ship: false },
    { coord: "D1", ship: false },
    { coord: "D2", ship: false },
    { coord: "D3", ship: false },
    { coord: "D4", ship: false },
    { coord: "D5", ship: false },
    { coord: "D6", ship: false },
    { coord: "D7", ship: false },
    { coord: "D8", ship: false },
    { coord: "D9", ship: false },
    { coord: "D10", ship: false },
    { coord: "E1", ship: false },
    { coord: "E2", ship: false },
    { coord: "E3", ship: false },
    { coord: "E4", ship: false },
    { coord: "E5", ship: false },
    { coord: "E6", ship: false },
    { coord: "E7", ship: false },
    { coord: "E8", ship: false },
    { coord: "E9", ship: false },
    { coord: "E10", ship: false },
    { coord: "F1", ship: false },
    { coord: "F2", ship: false },
    { coord: "F3", ship: false },
    { coord: "F4", ship: false },
    { coord: "F5", ship: false },
    { coord: "F6", ship: false },
    { coord: "F7", ship: false },
    { coord: "F8", ship: false },
    { coord: "F9", ship: false },
    { coord: "F10", ship: false },
    { coord: "G1", ship: false },
    { coord: "G2", ship: false },
    { coord: "G3", ship: false },
    { coord: "G4", ship: false },
    { coord: "G5", ship: false },
    { coord: "G6", ship: false },
    { coord: "G7", ship: false },
    { coord: "G8", ship: false },
    { coord: "G9", ship: false },
    { coord: "G10", ship: false },
    { coord: "H1", ship: false },
    { coord: "H2", ship: false },
    { coord: "H3", ship: false },
    { coord: "H4", ship: false },
    { coord: "H5", ship: false },
    { coord: "H6", ship: false },
    { coord: "H7", ship: false },
    { coord: "H8", ship: false },
    { coord: "H9", ship: false },
    { coord: "H10", ship: false },
    { coord: "I1", ship: false },
    { coord: "I2", ship: false },
    { coord: "I3", ship: false },
    { coord: "I4", ship: false },
    { coord: "I5", ship: false },
    { coord: "I6", ship: false },
    { coord: "I7", ship: false },
    { coord: "I8", ship: false },
    { coord: "I9", ship: false },
    { coord: "I10", ship: false },
    { coord: "J1", ship: false },
    { coord: "J2", ship: false },
    { coord: "J3", ship: false },
    { coord: "J4", ship: false },
    { coord: "J5", ship: false },
    { coord: "J6", ship: false },
    { coord: "J7", ship: false },
    { coord: "J8", ship: false },
    { coord: "J9", ship: false },
    { coord: "J10", ship: false },
  ]);

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

    let newCoords = coords;

    for (let i = 0; i < newCoords.length; i++) {
      if (positions.find((coord) => coord === newCoords[i].coord) !== undefined) {
        newCoords[i].ship = true;
      }
    }

    setCoords( newCoords )
  }, []);

  return (
    <div className="col-12 col-md-6 text-center board player-board">
      <h2>{player} Board</h2>
      <Board coords={coords} setCoords={setCoords} />
    </div>
  );
};

export default PlayerBoard;
