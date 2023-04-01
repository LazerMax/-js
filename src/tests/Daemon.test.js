import Character from "../Character";

test('testing Character constructor function', () => {
  const expectCharacter = {
    name: 'Jhon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  }
  const person = new Character ("Jhon", "Daemon");
  expect(person).toEqual(expectCharacter);
});
