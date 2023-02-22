const Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: create the class Teacher and a method teach
const Teacher = function () {};
Object.setPrototypeOf(Teacher.prototype, Person.prototype);
Teacher.prototype.teach = function (subject) {
  this.subject = subject;
  console.log(`${this.name} is now teaching ${this.subject}`);
};

const him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");