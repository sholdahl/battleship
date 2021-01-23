const computerAI = {
  getCoords: () => {
    let xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let yAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    let randomNum = () => {
      return Math.floor(Math.random() * 10);
    };

    let coords = yAxis[randomNum()] + xAxis[randomNum()];

    return coords;
  },
  attack: (computer, player) => {
    let coords = "";
    let coordValid = false;
    let shipHits = [];

    for (let i = 0; i < player.board.ships.length; i++) {
      const ship = player.board.ships[i];
      shipHits.push(...ship.hits);
    }

    while (coordValid !== true) {
      coords = computerAI.getCoords();

      if (
        player.board.missedAttacks.find((missedShots) => missedShots === coords) === undefined &&
        shipHits.find((hit) => hit === coords) === undefined
      ) {
        coordValid = true;
        computer.attack(coords, player);
        computerAI.lastAttack = coords
      }
    }
  },
  lastAttack: null
};

export default computerAI;
