const name = "max";
let age = 29;
const hasHobbies = true;

age = 30;

function summarizeUser(userName, userAge, userHasHobby) {
  return userName + ", " + userAge + " years old, has hobbies: " + userHasHobby;
}

console.log(summarizeUser(name, age, hasHobbies));
