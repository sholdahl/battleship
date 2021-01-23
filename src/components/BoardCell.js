import React from "react";

const BoardCell = (props) => {
  const { text, cellClass, coord, hit, game, player, updateBoards } = props;

  let containerClasses = cellClass + " grid-item";
  if (player === "Computer" && hit === false && game.winner === null) {
    containerClasses += " clickable";
  }

  const handleClick = (e) => {
    if (player === "Computer" && hit === false && game.winner === null) {
      let coords = e.target.getAttribute("data-coord");

      game.playRound(coords);
      updateBoards();
    }
  };

  return (
    <div className={containerClasses} onClick={handleClick} data-coord={coord} data-hit={hit}>
      <span className="inner-grid-item">{text}</span>
    </div>
  );
};

export default BoardCell;
