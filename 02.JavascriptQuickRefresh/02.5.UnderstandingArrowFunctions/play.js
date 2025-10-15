const name = "max";
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return userName + ", " + userAge + " years old, has hobbies: " + userHasHobby;
};

const add = (a, b) => a + b;

const addone = (a) => a + 1;

const addRandom = () => 1 + 2;

console.log(addRandom());

console.log(addone(5));

console.log(add(1, 2));
console.log(summarizeUser(name, age, hasHobbies));
