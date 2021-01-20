import player from "./player";

const gameLoop = (computerAI) => {
  let winner = null;
  let completed = false;


  const setUpGame = (playerName) => {
    let human = player(playerName);
    let computer = player("Computer");
    return { human, computer };
  };

  let { human, computer } = setUpGame("Player");

  const placeShips = (playerObj) => {
    playerObj.board.placeShip("Carrier", 5, ["B2", "B3", "B4", "B5", "B6"]);
    playerObj.board.placeShip("Battleship", 4, ["F5", "G5", "H5", "I5"]);
    playerObj.board.placeShip("Cruiser", 3, ["A2", "A3", "A4"]);
    playerObj.board.placeShip("Submarine", 3, ["D9", "E9", "F9"]);
    playerObj.board.placeShip("Destroyer", 2, ["E3", "F3"]);
  };

  placeShips(human);
  placeShips(computer);
  

  let playerAttack = (coords) => {
    human.attack(coords, computer);
  };

  let playRound = (coords) => {
    playerAttack(coords);
    if(computer.board.shipsSunk() === true) {
        completed = true;
        winner = human.name
        return
    }
    computerAI.attack(computer, human);
    if(human.board.shipsSunk() === true) {
        completed = true;
        winner = computer.name
    }

  };

  return { human, computer, playRound,completed, winner };
};

export default gameLoop;
