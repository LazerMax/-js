import Character from "../Character";

test('testing Character constructor function', () => {
  const expectCharacter = {
    name: 'Jhon',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  }
  const person = new Character ("Jhon", "Swordsman");
  expect(person).toEqual(expectCharacter);
});
