import { Student } from "./modules/student.js";
import { Boat } from "./modules/prototype.js";

const s1 = new Student(30, 'Max');
const s2 = new Student(230, 'Lenny', 'Java');

s1.giveGrade('A');
s2.giveGrade('A+');

// console.log(s1.getAge())

// s1.setAge();
// console.log(s1.getAge());

// console.log(s2);
// s2.ago = 33;
// console.log(s2);

// console.log(s1)


// Object.seal(s1);
// s1.newProperty = 10;

const b1 = new Boat(60, false);
b1.logInfo();

console.log(s1, b1);

console.log(Object.getPrototypeOf(s1));
console.log(Object.getPrototypeOf(b1));

const str = 'hej hej';
console.log( str.charAt(2) );
console.log(Object.getPrototypeOf(str));

String.prototype.hello = function(){
    console.log('Hello!!');
}

str.hello();

const x = 'blabla';
x.hello();