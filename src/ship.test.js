import ship from "./ship";

test("return an object", () => {
  expect(ship("Battle Ship", 3)).toMatchObject({ name: "Battle Ship", length: 3, hits: [] });
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
