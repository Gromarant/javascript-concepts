//First part
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  getDetails () {
    alert(`This person name is ${this.name}, is ${this.age} years old and is a ${this.gender}`)
  }
}
let luisFer = new Person('Luis Fernando', 57, 'male');

//Second part
class Student extends Person {
  constructor(name, age, gender, course, group) {
    super(name, age, gender)
    this.course = course;
    this.group = group;
  }
  enroll() {
    alert(`Student: name= ${name}, age= ${age}, gender= ${gender}, course= ${course} and group= ${group}`)
  }
}
let Carol = new Student('art', '3º');