for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["max", "anna", "joel"];

console.log(users);

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "sub",
  age: 30,
  isAdmin: true,
};

for (const info in loggedInUser) {
  console.log(loggedInUser[info]);
}

let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Do youn want to quit?");
}

console.log("Done!");
