let age = 32;
let userName = "Sub";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "Seoul",
  salary: 50000,
};

let adultYears;
function calculateAdultYears(userAge) {
  return userAge - 18;
}

console.log(calculateAdultYears(age));

age = 45;
adultYears = calculateAdultYears(age);
console.log(adultYears);
