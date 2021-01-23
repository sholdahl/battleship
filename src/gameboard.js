import ship from "./ship";

const gameboard = () => {
  let missedAttacks = [];
  let ships = [];
  let attacksReceived = [];

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
    attacksReceived.push(coordinates)

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

  return { missedAttacks, ships, receiveAttack, attacksReceived, shipsSunk, placeShip };
};

export default gameboard;
