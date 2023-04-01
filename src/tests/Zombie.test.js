import Character from "../Character";

test('testing Character constructor function', () => {
  const expectCharacter = {
    name: 'Zombie',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  }
  const person = new Character ("Jhon", "Zombie");
  expect(person).toEqual(expectCharacter);
});
