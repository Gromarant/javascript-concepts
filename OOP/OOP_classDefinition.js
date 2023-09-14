//Class definition OOP
class building {
  constructor(zone, floors, flatsPerFloor ) {
    this.zone = zone || 'Center of Madrid';
    this.floors = floors || 16;
    this.flatsPerFloor = flatsPerFloor || 2;
  }
  details() {
    console.log(`this building is in ${this.zone} is ${this.floors} floors heigth and have ${this.flatsPerFloor} flats per floor.`);
  }
}

let myBuildng = new building('Center of Madrid', 8, 4);
myBuildng.details();

//Class extension
class skyscraper extends building {
  constructor(zone, floors, flatsPerFloor, company, employees, isTheHighest) {
    super(company, employees, isTheHighest)
    this.company = company || 'Google';
    this.employees = employees || 5000;
    this.isTheHighest = isTheHighest || false;
  }
}

let googleBuilding = new skyscraper();

//Static methods
class Animal {
  static info(type) {
    console.log(`This is a ${type} class of animal`);
  };

  constructor(familyOf, type, food) {
    this.familyOf = familyOf;
    this.type = type;
    this.food = food;
  }

  details() {
    console.log(`Animal to the family of ${this.familyOf}, type ${this.type} that eats ${this.food}`);
  }
}

let cat = new Animal('felines', 'pet', 'cat food');
cat.details();