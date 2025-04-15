/*Exercise1: */
let sum = 0
function generateReports(students){
    const nameslist = [];
    for (let i = 0; i < students.length ; i++) {
        let eachobj = {}
        eachobj["names"] = students[i].name;
        nameslist.push(eachobj);
      }
    console.log(nameslist)
}

const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];

generateReports(students)