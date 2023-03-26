import definitionHealth from '../definitionHealth';
import Character from "../Character.js";
import Swordsman from "../Swordsman.js";
import {re} from "@babel/core/lib/vendor/import-meta-resolve.js";

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

test('testing checkType function', () => {
  const person = new Character ("1", "1");
  const result = person.checkType();
  expect().toThrow("Некорректный класс персонажа!");
});

test('testing checkName function', () => {
  const person = new Character ("1", "1");
  const result = person.checkName();
  expect(result).toThrow("Имя персонажа должно быть больше 2-х символов!");
});

test('positive testing levelUp function', () => {
  const person = new Character ("Jhon", "Swordsman");
  const expectPerson = {
    name: 'Jhon',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12
  }
  const result = person.levelUp();
  expect(result).toEqual(expectPerson);
});

test('negative testing levelUp function', () => {
  const person = new Character ("Jhon", "Swordsman");
  person.health = 0;
  const result = person.levelUp();
  expect(result).toThrow("Персонаж мертв!");
});

test('positive testing damage function', () => {
  const person = new Character ("Jhon", "Swordsman");
  const expectPerson = {
    name: 'Jhon',
    type: 'Swordsman',
    health: 91.2,
    level: 1,
    attack: 40,
    defence: 10
  }
  const result = person.damage();
  expect(result).toEqual(expectPerson);
});

test('negative testing levelUp function', () => {
  const person = new Character ("Jhon", "Swordsman");
  person.health = 0;
  const result = person.damage();
  expect(result).toThrow("Персонаж мертв!");
});


