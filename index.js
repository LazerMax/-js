import Swordsman from "./src/Swordsman.js";
import Bowman from "./src/Bowman.js";
import Magician from "./src/Magician.js";
import Undead from "./src/Undead.js";
import Zombie from "./src/Zombie.js";
import Daemon from "./src/Daemon.js";

const person = new Swordsman ("Jhon", "Swordsman");
console.log(person);

person.levelUp();
console.log(person);

person.damage(10);
console.log(person);
