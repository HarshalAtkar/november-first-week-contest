
const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter((person) => person.profession === "developer");
  console.log(developers);
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = prompt("Enter age:");
  const profession = prompt("Enter profession:");
  data.push({ name, age, profession });
}

// 3. Remove Admins
function removeAdmin() {
  data = data.filter((person) => person.profession === "admin");
 
}

// 4. Concatenate Array
function concatenateArray() {
  const arr1 = ["john", "jani", "janardhan"];
  const arr2 = ["alan", "smith", "warker"];
  const result = arr1.concat(arr2);
  console.log(result);
}

// 5. Average Age
function averageAge() {
  const sum = data.reduce((total, person) => total + person.age, 0);
  const avg = sum / data.length;
  console.log(avg);
}

// 6. Age Check
function checkAgeAbove25() {
  const result = data.some((person) => person.age > 25);
  console.log(result);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = data.map((person) => person.profession);
  const uniqueProfessions = [...new Set(professions)];
  console.log(uniqueProfessions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find((person) => person.name === "john");
  john.profession = "manager";
}

// 10. Profession Count
function getTotalProfessions() {
  const developers = data.filter((person) => person.profession === "developer");
  const admins = data.filter((person) => person.profession === "admin");
  console.log(`Developers: ${developers.length}, Admins: ${admins.length}`);
}
