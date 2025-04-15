/*Exercise1: */

function generateReports(students){
    for (let i = 0; i < students.length ; i++) {
        let scoreforeach = students[i].scores;
        let sum = scoreforeach.reduce((total , score ) => { return total + score} ,0); 
        //reduce function will set the value of total intially to zero 
        //and each value in scoreforeach array will be considered as a score and will be added to the total
        //since reduce() passes on each element in the array 
        let numberofscores = scoreforeach.length;
        let average = sum/numberofscores;
        let grade = "";
        if (average >= 90){
            grade = "A";
        }
        else if (average > 80 && average <= 89){
            grade = "B";
        }
        else if (average > 70 && average <= 79){
            grade = "C";
        }
        else if (average > 60 && average <= 69){
            grade = "D";
        }
        else{
            grade = "F";
        }
        
    }
}
// grade (A if avg ≥ 90, B if 80–89, C if 70–79, D if 60–69, F otherwise)
const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];

generateReports(students)