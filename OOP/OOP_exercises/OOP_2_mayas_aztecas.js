class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  };
  attack() {
    return this.power;
  };
  defend(damage) {
    return this.life = this.life - damage;
  };
};

class Maya extends Warrior {
  constructor(life, power) {
    super(life, power)
  };
  drinkcolaCao() {
    console.log('Maya life: ', this.life);
    console.log('Maya power: ', this.power + 10);
    this.power = this.power + 10;
  };
};

class Aztec extends Warrior {
  constructor(life, power) {
    super(life, power)
  };
  drinkNesquik() {
    console.log('Aztec power: ', this.power);
    console.log('Aztec life: ', this.life + 10);
    this.life = this.life + 10;
  };
};
let azteca = new Aztec(100, 10);
let maya = new Maya(60, 10);

//combat
azteca.drinkNesquik();
maya.drinkcolaCao();
maya.defend(azteca.attack());
azteca.defend(maya.attack());