const computerAI = {
  attack: (computer, player) => {
    let xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let yAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    let randomNum = () => {
      return Math.floor(Math.random() * 10);
    };

    let coords = yAxis[randomNum()] + xAxis[randomNum()];

    computer.attack(coords, player);
  },
}

export default computerAI;
