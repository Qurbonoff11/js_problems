"use strict";

// ============= Masala 1 =============

const locations = [
  {
    country: "Uzbekistan",
    city: "Tashkent",
  },
  {
    country: "Uzbekistan",
    city: "Samarkand",
  },
  {
    country: "Uzbekistan",
    city: "Tashkent",
  },
  {
    country: "USA",
    city: "New York",
  },
  {
    country: "USA",
    city: "Chicago",
  },
];

const citys = new Map();

locations.forEach(({ country, city }) => {
  if (!citys.has(country)) {
    citys.set(country, new Set());
  }
  citys.get(country).add(city);
});

console.log(citys);

// ============= Masala 2 =============

const reactions = [
  {
    user: "Ali",
    postId: 1,
  },
  {
    user: "Vali",
    postId: 1,
  },
  {
    user: "Ali",
    postId: 2,
  },
  {
    user: "Sami",
    postId: 1,
  },
  {
    user: "Ali",
    postId: 1,
  },
];

const users = new Map();

// ForEach orqali
// reactions.forEach(({user, postId}) => {
//   if (!users.has(user)) {
//     users.set(user, new Set())
//   }
//   users.get(user).add(postId)
// })

// do while orqali
let i = 0;
do {
  const { user, postId } = reactions[i];

  if (!users.has(user)) {
    users.set(user, new Set());
  }
  users.get(user).add(postId);

  i++;
} while (i < reactions.length);

// For orqali
// for (let i = 0; i < reactions.length; i++) {
//   const {user, postId} = reactions[i]

//   if (!users.has(user)) {
//     users.set(user, new Set())
//   }
//   users.get(user).add(postId)
// }

console.log(users);

// ============= Masala 3 =============

/*
const users = [
  {
    username: "Qurbonoff",
    age: 20,
    kasb: "Web Dev"
  },
  {
    username: "Alijonov",
    age: 25,
    kasb: "Web Dev"
  },
  {
    username: "Samandarov",
    age: 20,
    kasb: "Web Dev"
  },
]

const userInfo = new Map()

users.forEach(({username, age, kasb}) => {
  if (!userInfo.has(age)) {
    userInfo.set(age, new Set())
  }
  userInfo.get(age).add(username)
  userInfo.get(age).add(kasb)
})

console.log(userInfo);
 */

// ========================================
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

let bmw = new Car("BMW M3 GTR", 220)
let supra = new Car("Supra MK4", 180)

Car.prototype.carSpeed = function () {
  console.log(`${this.make} tezligi ${(this.speed += 10)}km/h ga oshdi.`);
}
Car.prototype.carBreak = function () {
  console.log(`${this.make} tezligi ${(this.speed -= 5)}km/h ga kamaydi.`);
}

bmw.carSpeed()
supra.carSpeed()
bmw.carBreak()
supra.carBreak()