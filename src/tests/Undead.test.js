import Character from "../Character";

test('testing Character constructor function', () => {
  const expectCharacter = {
    name: 'Jhon',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  }
  const person = new Character ("Jhon", "Undead");
  expect(person).toEqual(expectCharacter);
});
