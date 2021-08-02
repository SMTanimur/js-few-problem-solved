// ARRAY 1
const texasss = [
  {
    name: 'Mike',
    age: 23,
    gender: 'm',
    us: false,
  },
  {
    name: 'Liz',
    age: 20,
    gender: 'f',
    us: true,
  },
  {
    name: 'Chris',
    age: 102,
    gender: 'm',
    us: true,
  },
  {
    name: 'Chuloo',
    age: 27,
    gender: 'm',
    us: false,
  },
  {
    name: 'Annie',
    age: 30,
    gender: 'f',
    us: true,
  },
];
const users24 = texasss.filter(val => {
  return val.age > 24;
});
// Part 2 - Find the total age of all users
console.log(users24);
const totalAge = texasss
  .map(user => user.age)
  .reduce((prev, next) => {
    return prev + next;
  });
console.log(totalAge);

// Part 3 - List all female coders
const femaleCoders = texasss.filter(val => val.gender.includes('f'));

console.log(femaleCoders);
// ARRAY 2
const newieyork = [
  {
    name: 'Michelle',
    age: 19,
    coder: true,
    gender: 'f',
    us: true,
  },
  {
    name: 'Sam',
    age: 25,
    coder: false,
    gender: 'm',
    us: false,
  },
  {
    name: 'Ivy',
    age: 26,
    coder: true,
    gender: 'f',
    us: false,
  },
  {
    name: 'Nick',
    age: 32,
    coder: true,
    gender: 'm',
    us: true,
  },
  {
    name: 'Jim Beglin',
    age: 65,
    coder: false,
    gender: 'm',
    us: true,
  },
];

// Part 1 - List all users in US in ascending order
const usUser = newieyork.filter(user => {
  return user.us == true;
});

console.log(usUser);
// Part 2 - Sort all users by age
const finalSorted = newieyork;

finalSorted.sort((a, b) => {
  return a.age - b.age;
});

console.log(finalSorted);
// Part 3 -  List all female coders
const fCoders = newieyork.filter(val => val.gender.includes('f'));

console.log(fCoders);

// ARRAY 3
const vegzas = [
  {
    name: 'Charly',
    age: 32,
    coder: true,
    gender: 'm',
  },
  {
    name: 'Law',
    age: 21,
    coder: true,
    gender: 'm',
  },
  {
    name: 'Rosey',
    age: 42,
    coder: false,
    gender: 'f',
  },
  {
    name: 'Steph',
    age: 18,
    coder: true,
    gender: 'f',
  },
  {
    name: 'Jon',
    age: 47,
    coder: false,
    gender: 'm',
  },
];

// Part 1 - Find the total age of male coders under 25
const totalamale = vegzas
  .filter(val => val.gender.includes('m') && val.age < 25)
  .map(male => male.age)
  .reduce((prev, curr) => prev + curr);
console.log(totalamale);

// Part 2 - List all male coders over 30
const ageOverThirty = vegzas.filter(
  val => val.gender.includes('m') && val.age > 30
);
console.log(ageOverThirty);

// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
const totalAgesOfAllPeople = [];

texasss.map(val => totalAgesOfAllPeople.push(val.age));
newieyork.map(val => totalAgesOfAllPeople.push(val.age));
vegzas.map(val => totalAgesOfAllPeople.push(val.age));

const ageSum = totalAgesOfAllPeople.reduce((prev, next) => prev + next);
console.log(ageSum);

// 1. Convert the function to an ES6 Arrow Function

const golden = () => {
  console.log('this is golden');
};
golden();

// 2. Simplify the following with es6 enhanced object literals
const newFunction = function literal(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(firstName + ' ' + lastName);
      return;
    },
  };
};

newFunction('William', 'Imoh').fullName();

// 3. Condense this to 8 lines with destructuring
const newObject = {
  firstName: 'Harry',
  lastName: 'Potter Holt',
  destination: 'Hogwarts React Conf',
  occupation: 'Deve-wizard Avocado',
  spell: 'Vimulus Renderus!!!',
};
const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation);

// 4. Combine these arrays with array spreading
const west = ['Will', 'Chris', 'Sam', 'Holly'];

const east = ['Gill', 'Brian', 'Noel', 'Maggie'];

const combined = [...west, ...east];

console.log(combined);

// 5. Tidy up this multi-line string using Template Literals
const planet = 'earth';
const view = 'glass';
var after = `Lorem ${view}dolor sit amet,consectetur adipiscing elit,${planet}do
 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`;

console.log(after);

//find the lowest number from an array
