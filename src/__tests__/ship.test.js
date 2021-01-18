import ship from "../ship";

test("return an object", () => {
  expect(ship("Battle Ship", 3, ["1A", "1B", "1C"])).toMatchObject({ name: "Battle Ship", length: 3, hits: [], position: ["1A", "1B", "1C"] });
});

test("hit function works", () => {
  let testShip = ship("test ship", 2);
  testShip.hit("1A");
  expect(testShip.hits).toEqual(["1A"]);
});

test("isSunk function works", () => {
  let testShip = ship("test ship", 2);
  testShip.hit("1A");
  testShip.hit("1B");
  expect(testShip.isSunk()).toEqual(true);
});
