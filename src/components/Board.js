import React from "react";
import BoardCell from "./BoardCell";

const Board = (props) => {
  const { coords, player, game, updateBoards } = props;

  return (
    <div className="board-wrapper">
      <BoardCell text="" cellClass="coord-label" />
      <BoardCell text="1" cellClass="P1 coord-label" />
      <BoardCell text="2" cellClass="P2 coord-label" />
      <BoardCell text="3" cellClass="P3 coord-label" />
      <BoardCell text="4" cellClass="P4 coord-label" />
      <BoardCell text="5" cellClass="P5 coord-label" />
      <BoardCell text="6" cellClass="P6 coord-label" />
      <BoardCell text="7" cellClass="P7 coord-label" />
      <BoardCell text="8" cellClass="P8 coord-label" />
      <BoardCell text="9" cellClass="P9 coord-label" />
      <BoardCell text="10" cellClass="P10 coord-label" />

      <BoardCell text="A" cellClass="a coord-label" />
      <BoardCell text="B" cellClass="b coord-label" />
      <BoardCell text="C" cellClass="c coord-label" />
      <BoardCell text="D" cellClass="d coord-label" />
      <BoardCell text="E" cellClass="e coord-label" />
      <BoardCell text="F" cellClass="f coord-label" />
      <BoardCell text="G" cellClass="g coord-label" />
      <BoardCell text="H" cellClass="h coord-label" />
      <BoardCell text="I" cellClass="i coord-label" />
      <BoardCell text="J" cellClass="j coord-label" />

      {coords.map((coordInfo, index) => {
        return (
          <BoardCell
            text=""
            cellClass={coordInfo.ship ? "ship" : ""}
            coord={coordInfo.coord}
            hit={coordInfo.hit}
            ship={coordInfo.ship}
            player={player}
            game={game}
            key={coordInfo.coord}
            updateBoards={updateBoards}
          />
        );
      })}
    </div>
  );
};

export default Board;
