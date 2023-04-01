import Character from "../Character";

test('testing Character constructor function', () => {
  const expectCharacter = {
    name: 'Jhon',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  }
  const person = new Character ("Jhon", "Bowman");
  expect(person).toEqual(expectCharacter);
});
