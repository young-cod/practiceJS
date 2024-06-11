let age = 32;
let userName = "Sub";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "Seoul",
  salary: 50000,
};

let adultYears;
function calculateAdultYears() {
  adultYears = age - 18;
}

calculateAdultYears();
alert(adultYears);

age = 45;
calculateAdultYears();
alert(adultYears);
