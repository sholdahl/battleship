import React from "react";

const GameMessages = (props) => {
  const { game } = props;

  let message = "";

  if (!game.completed && game.computerAI.lastAttack) {
    message = "The computer has attacked: " + game.computerAI.lastAttack;
  } else if (!game.completed) {
    message = "Take your first shot!";
  } else if (game.winner === "Player") {
    message = "Congratulations! you have won";
  } else {
    message = "You Lose :(";
  }

  return (
    <div className="col-12 text-center game-messages">
      <h3>{message}</h3>
    </div>
  );
};

export default GameMessages;
