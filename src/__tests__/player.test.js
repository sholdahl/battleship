import player from "../player";

test("returns obj", () => {
    expect(player("name")).toMatchObject({name: "name"})
});

test("attack opponent", () => {
    let player1 = player("Player 1");
    let player2 = player("Player 2");
    player1.attack("1A", player2);

    expect(player2.board.missedAttacks).toEqual(["1A"])
})

// players can take turns playing the game by attacking the enemy Gameboard.

// The game is played against the computer, 
// so make ‘computer’ players capable of making random plays. 
// The AI does not have to be smart, 
// but it should know whether or not a given move is legal. 
// (i.e. it shouldn’t shoot the same coordinate twice).
