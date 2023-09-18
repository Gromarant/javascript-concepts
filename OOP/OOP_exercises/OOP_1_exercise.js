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
let carol = new Student('Carol', 21, 'female', 'art', '3º');

//Third part
class Professor extends Person {
  constructor(name, age, gender, subject, level) {
    super(name, age, gender)
    this.subject = subject;
    this.level = level;
  }
  asignet() {
    alert(`Professor: name= ${name}, age= ${age}, gender= ${gender}, subject= ${subject} and level= ${level}`)
  }
}
let alex = new Professor('Alex', 45, 'male', 'developmet', 'master');