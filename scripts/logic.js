/*Exercise1: */
//Time complexity = O(n) * O(n) = O(n^2)
function generateReports(students){
    // mapping O(n) passing on students
    const updatedStudents = students.map(student => {
        let scoreforeach = student.scores;
        let sum = scoreforeach.reduce((total , score ) => { return total + score} ,0); 
        //reduce function will set the value of total intially to zero 
        //and each value in scoreforeach array will be considered as a score and will be added to the total
        //since reduce() passes on each element in the array so the time complexity is O(n) where n is scores of each student
        let numberofscores = scoreforeach.length;
        let average = sum/numberofscores;
        let grade = "";
        if (average >= 90){
            grade = "A";
        }
        else if (average >= 80 && average < 90){
            grade = "B";
        }
        else if (average >= 70 && average < 80){
            grade = "C";
        }
        else if (average >= 60 && average < 70){
            grade = "D";
        }
        else{
            grade = "F";
        }

        return {
        "name" : student.name,
        "average" : average,
        "grade" : grade,
        };
    } ) 

    console.log(updatedStudents)
}

// grade (A if avg ≥ 90, B if 80–89, C if 70–79, D if 60–69, F otherwise)
const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];

generateReports(students)