const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const hobbies = ["Sports", "Cooking", 1, true, {}];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

console.log(
  hobbies.map((hobby) => {
    return "Hobby: " + hobby;
  })
);
console.log(hobbies);
