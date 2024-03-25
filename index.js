const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function (total, batch) {
  return total + batch;
}, 0);

console.log(totalBatteries);

const doubledAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
  return element * 2 + accumulator;
}, 0);
console.log(doubledAndSummed);

const hogwartsHouses = {
  Slytherin: [],
  Gryffindor: [],
  Hufflepuff: [],
  Ravenclaw: [],
};

const incomingStudents = ["Harry", "Ron", "Hermione"];

const sortingHat = {
  houseAssign: function (studentName) {
    const houses = Object.keys(hogwartsHouses);
    return houses[Math.floor(Math.random() * houses.length)];
  },
};

const updatedHogwartsHouses = incomingStudents.reduce(function (
  houses,
  student
) {
  const assignedHouse = sortingHat.houseAssign(student);
  houses[assignedHouse].push(student);
  return houses;
},
hogwartsHouses);

console.log(updatedHogwartsHouses);
