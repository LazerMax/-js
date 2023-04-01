export default class Character{
  constructor(name, type) {

    this.health = 100;
    this.level = 1;

    this.checkName(name);
    this.checkType(type);
  }

  checkType(type){
    const possibleCharacters = ["Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
    if(!(possibleCharacters.includes(type))){
      throw new Error("Некорректный класс персонажа!");
    }{
      this.type = type;
    }
  }
  checkName(name){
    if(name.length < 2){
      throw new Error("Имя персонажа должно быть больше 2-х символов!");
    }{
      this.name = name;
    }
  }

  levelUp(){
    if(this.health <= 0){
      throw new Error("Персонаж мертв!");
    }else{
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    }
  }

  damage(points){
    if(this.health <= 0){
      throw new Error("Персонаж мертв!");
    }else {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
