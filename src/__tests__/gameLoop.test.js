import gameLoop from "../gameLoop";
import computerAI from "../computerAI";

it("returns variables required", () => {
  expect(gameLoop(null)).toMatchObject({ completed: false, winner: null });
});

it("returns two player objects", () => {
  expect(gameLoop(null)).toMatchObject(
    expect.objectContaining({
      human: expect.objectContaining({ attack: expect.anything(), board: expect.anything() }),
      computer: expect.objectContaining({ attack: expect.anything(), board: expect.anything() }),
    })
  );
});

it("player attacks CPU", () => {
  let game = gameLoop(computerAI);
  game.playRound("A1");
  expect(game.computer.board.missedAttacks).toEqual(["A1"]);
});

it("CPU attacks player after being attacked", () => {
  let computerAI = {
    attack: (computer, player) => {
      computer.attack("A1", player);
    },
  };

  let game = gameLoop(computerAI);
  game.playRound("A1");
  expect(game.human.board.missedAttacks).toEqual(["A1"]);
});

it("Game is winnable", () => {
  let computerAI = {
    attack: (computer, player) => {
      computer.attack("A1", player);
    },
  };

  let game = gameLoop(computerAI);
  game.playRound("C2");
  game.playRound("C3");
  game.playRound("C4");
  game.playRound("C5");
  game.playRound("C6");

  game.playRound("F5");
  game.playRound("G5");
  game.playRound("H5");
  game.playRound("I5");

  game.playRound("A2");
  game.playRound("A3");
  game.playRound("A4");

  game.playRound("D9");
  game.playRound("E9");
  game.playRound("F9");

  game.playRound("E3");
  game.playRound("F3");

  expect(game.winner).toEqual("Player");
});
