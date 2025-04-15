/*Exercise1: */
let sum = 0
function generateReports(students){
    for (let i = 0; i < students.length ; i++) {
        console.log(students[i].name);
      }
}

const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];

generateReports(students)