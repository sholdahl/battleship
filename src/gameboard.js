import ship from "./ship";

const gameboard = () => {
  let missedAttacks = [];
  let ships = [];

  const shipsSunk = () => {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].isSunk() === false) {
        return false;
      }
    }
    return true;
  };

  const placeShip = (name, length, position) => {
    ships.push(ship(name, length, position));
  };

  const receiveAttack = (coordinates) => {
    for (let i = 0; i < ships.length; i++) {
      let coordIndex = ships[i].position.findIndex(
        (shipCoordinate) => shipCoordinate === coordinates
      );
      if (coordIndex !== -1) {
        ships[i].hit(coordinates);
        break;
      }
    };
    missedAttacks.push(coordinates);
  };

  return { missedAttacks, ships, receiveAttack, shipsSunk, placeShip };
};

export default gameboard;

// board is 1 - 8, A - G
// carrier - 5
// battleship - 4
//  cruiser - 3
// submarine - 3
// detroyer - 2
