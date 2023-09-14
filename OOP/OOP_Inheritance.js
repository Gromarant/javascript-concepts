//Classical heritage
let Car = function (brand, model, age, color, type) {
  this.brand = brand;
  this.model = model;
  this.age = age;
  this.color = color;
  this.type = type;
  this.details = details;
};

let PartnerTepee = function ( seatsNumber, weigth, length) {
  this.seatsNumber = seatsNumber;
  this.weigth = weigth;
  this.length = length;
  this.technicalDetails = technicalDetails;
}

function details() {
  console.log('brand: '+this.brand+', model: '+this.model+', age: '+this.age+', color: '+this.color+'and type: '+this.type);
}

function technicalDetails() {
  console.log('seatsNumber: '+this.seatsNumber+', weigth: '+this.weigth+', and length: '+this.length);
}

let aVehicle = new Car ('Deutsche', 'Van', 1, 'Dark aqua', 'Commercial');
aVehicle.prototype = new PartnerTepee(7, 50000, '5.6 mts');

aVehicle.details();
aVehicle.prototype.technicalDetails();

//Public and private attibutes, methods and optional data
let CompanyCar = function (brand, model, age, color, type) {
  //public
  this.brand = brand || 'Toyota';
  this.model = model || 'Alphard';
  this.age = age || 1.5;
  this.color = color || 'Dark aqua';
  this.type = type || 'Suv';

  //private
  let ITVpassed = true;
  let ITVFrequency = 'every year';
  let insuranceInOrder = true;
  let insuranceCompany = 'Mapfre';
  let insuranceType = 'third party'

  //public
  this.getDetails = function() {
    console.log(`Your car is a ${this.brand} ${this.model} with ${this.age} years old, class ${this.type} and color ${this.color}`);
  }

  //private
  function privateData() {
    if (ITVpassed && insuranceInOrder) {
      console.log(`INFO: All ok, you will have to pass the ITV test ${ITVFrequency}. You have an insurace for ${insuranceType} with ${insuranceCompany} company.`);
    }
    else {
      console.error('ALERT! The car isn\'t ok to be use. the insurance or the ITV isn\'t in order');
    }
  }

  privateData();
  this.getDetails();
};

let myCar = new CompanyCar ("Audi", "S8", 2, "negro", "Berlina");
let yourCar = new CompanyCar ("Audi", "S4", 2, "Rojo", "Compacto");
let defaultCar = new CompanyCar ();

//make a copy of an object
let cloneOfComapnyCar = Object.create(CompanyCar);

//methods
  // ---> Object.create()
  let Car = {
    brand: "Toyota",
    model: "Alphard",
    year: "2023",
    color: "Dark grey",
    type: "suv"
  };

  let cloneCar = Object.create(Car);
  console.log(cloneCar.brand, cloneCar.model);

  // ---> Object.prototype.isPrototypeOf()
  console.log(Car.isPrototypeOf(cloneCar));

  // ---> Object.prototype.constructor
  function Person(name) {
    this.name = name;
  }

  let myBrother = new Person('Luis Alejandro');
  console.log('myBrother.constructor: ', myBrother.constructor);

  // ---> Object.prototype.toString()
  myBrother.toString();