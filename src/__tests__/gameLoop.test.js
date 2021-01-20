import gameLoop from "../gameLoop";
import computerAI from "../computerAI";

it("returns variables required", () => {
  expect(gameLoop(null)).toMatchObject({ completed: false, winner: null });
});

it("returns two player objects", () => {
  expect(gameLoop(null)).toMatchObject(expect.objectContaining({
    human: expect.objectContaining({ attack: expect.anything(), board: expect.anything() }),
    computer: expect.objectContaining({ attack: expect.anything(), board: expect.anything() }),
  }));
});

it("player attacks CPU", () => {
    let game = gameLoop(computerAI);
    game.playRound("A1");
    expect(game.computer.board.missedAttacks).toEqual(["A1"]);
})

it("CPU attacks player after being attacked", () => {
    let computerAI = {
        attack: (computer, player) => {        
            computer.attack("A1", player);
          }
    }

    let game = gameLoop(computerAI);
    game.playRound("A1");
    expect(game.human.board.missedAttacks).toEqual(["A1"]);
})