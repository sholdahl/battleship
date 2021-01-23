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
    playerObj.board.placeShip("Carrier", 5, ["C2", "C3", "C4", "C5", "C6"]);
    playerObj.board.placeShip("Battleship", 4, ["F5", "G5", "H5", "I5"]);
    playerObj.board.placeShip("Cruiser", 3, ["A2", "A3", "A4"]);
    playerObj.board.placeShip("Submarine", 3, ["D9", "E9", "F9"]);
    playerObj.board.placeShip("Destroyer", 2, ["E3", "F3"]);
  };

  placeShips(human);
  placeShips(computer);

  let playerAttack = (coords) => {
    obj.human.attack(coords, obj.computer);
  };

  let playRound = (coords) => {
    console.log("Player attacked: " + coords);
    console.log(this)
    console.log(obj)
    playerAttack(coords); 

    if (obj.computer.board.shipsSunk() === true) {
      obj.completed = true;
      obj.winner = obj.human.name;
      return;
    }
    computerAI.attack(computer, human);
    if (obj.human.board.shipsSunk() === true) {
      obj.completed = true;
      obj.winner = obj.computer.name;
    }
  };

  let obj = { human, computer, playRound, completed, winner, computerAI };
  return obj
};

export default gameLoop;
