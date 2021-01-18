import gameboard from "../gameboard"

test("return an object", () => {
    expect(gameboard("Battle Ship", 3)).toMatchObject({ missedAttacks: [], ships: [] });
  });

test("create a ship and add to array",  () => {
    let testGB = gameboard();
    testGB.placeShip("destroyer", 2, ["1A", "1B"]);
    expect(testGB.ships[0]).toMatchObject({name: "destroyer", length: 2, hits: [], position: ["1A", "1B"]})
});

test("ships not sunk", () => {
    let testGB = gameboard();
    testGB.placeShip("destroyer", 2, ["1A", "1B"]);
    testGB.placeShip("cruiser", 3, ["5A", "5B", "5C"]);
    expect(testGB.shipsSunk()).toBe(false);
});

test("missed attack", () => {
    let testGB = gameboard();
    testGB.placeShip("destroyer", 2, ["1A", "1B"]); 
    testGB.receiveAttack("1C");
    testGB.receiveAttack("5E");
    expect(testGB.missedAttacks).toEqual(["1C", "5E"])
});


test("attack hit a boat", () => {
    let testGB = gameboard();
    testGB.placeShip("destroyer", 2, ["1A", "1B"]); 
    testGB.receiveAttack("1B");
    expect(testGB.ships[0].hits).toEqual(["1B"])
});

test("ships sunk", () => {
    let testGB = gameboard();
    testGB.placeShip("destroyer", 2, ["1A", "1B"]);
    testGB.placeShip("cruiser", 3, ["5A", "5B", "5C"]);
    testGB.receiveAttack("1A");
    testGB.receiveAttack("1B");
    testGB.receiveAttack("5A");
    testGB.receiveAttack("5B");
    testGB.receiveAttack("5C");
    expect(testGB.shipsSunk()).toBe(true);
});
