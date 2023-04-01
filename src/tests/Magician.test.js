import Character from "../Character";

test('testing Character constructor function', () => {
  const expectCharacter = {
    name: 'Jhon',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  }
  const person = new Character ("Jhon", "Magician");
  expect(person).toEqual(expectCharacter);
});
