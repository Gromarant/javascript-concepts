function createAPerson(name) {
  let obj = {};
  obj.name = name;
  obj.greeting = function () {
    alert('Hi! I\'m' + this.name + '.');
  };
  return obj;
}

let salva = createAPerson('salva');
console.log(salva.name);
console.log(salva.greeting());

//this is a constructor function
function Person(firstName, lastName, age, gender, interests) { 
  this.name = {
    'first': firstName,
    'last': lastName
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    let pronoun;
    let hobbies = this.interests[0] + ',' + ' ';
    
    if ( gender === 'male') {pronoun = 'He'} 
    else { pronoun = 'She'}

    for ( let i=1; i<this.interests.length; i++){
      if (i === this.interests.length - 2) {
        hobbies += `${this.interests[i]} and `;
      } else if (i === this.interests.length - 1) {
        hobbies += `${this.interests[i]}.`;
      } else {
        hobbies += `${this.interests[i]}, `;
      }
    };
    alert(`${this.name.first} ${this.name.last} is ${this.age} years old. ${pronoun} likes ${hobbies}`)
  }
  this.greeting = function() {
    alert(`Hi! I'm ${this.name}`)
  };
}

let person1 = new Person('Miguel', 'Varona', 31, 'male',['tennis', 'Problem solving', 'Programming', 'video games']);
console.log(migue.name);
let person2 = new Person('Vicky', 'Varona', 27, 'female',['design', 'Shark movies', 'Cats', 'programming']);
console.log(vicky.name);
let person3 = new Person('Luis', 'Rodriguez', 31, 'male',['design', 'make agendas', 'Sarcasm', 'Visual design']);
console.log(luis.name);

//Object constructor --> other way to make objects
let person4 = new Object();

person4.name = 'Chris';
person4['age'] = 38;
person4.greeting = function() {
  alert(`Hi! I'm ${this.name}.`);
}

  //other way
  person4 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  });

//create an object base on other
let person5 = Object.create(person4);

//Methods, add and delete them
//assignment in the builder
let Dog = function(breed, color, age, weight) {
  this.breed = breed;
  this.color = color;
  this.age = age;
  this.weight = weight;
  this.bark = function() {
    console.log('woof, woof');
  };
}

//Prototype extension
Dog.prototype.sit = function() {
  console.log('sit down');
}
//instace of Dog
let dog1 = new Dog('pug', 'Black and brown', 5, '10kg');

//External linking
let Cat = function(breed, color, age, weight) {
  this.breed = breed;
  this.color = color;
  this.age = age;
  this.weight = weight;
  this.purr = purr;
}

function purr() {
  console.log('Purr...');
}
  //instace of Cat
  let sindy = new Cat(persian, gold, 1, '4kg');