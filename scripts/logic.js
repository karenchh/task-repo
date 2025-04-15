/*Exercise1: */
//Time complexity = O(n) * O(n) = O(n^2)
function generateReports(students){
    // mapping O(n) passing on students
    /*  let newArray = array.map(element => {
            //Transformation logic
            return transformedValue; // New value for the new array
            //element is each element in the array
            });   */
    let updatedStudents = students.map(student => {
        let scoreforeach = student.scores;
        let sum = scoreforeach.reduce((total , score ) => { return total + score } ,0); 
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

// =======================================================================
//Time complexity = O(1) for each method inside the class and for the total methods too with and withount the bonus
//Exercise 2:
class BankAccount{
    constructor(ownerName, initialBalance){
        this.ownerName = ownerName;
        this.initialBalance = initialBalance;
        this.history = [];
    }
    deposit(amount){
        this.initialBalance += amount; //O(1)
        this.history.push(`Deposited $${amount}`) //O(1)
    }
    withdraw(amount){
        this.initialBalance -= amount; //O(1)
        this.history.push(`Withdrew $${amount}`) //O(1)
    }
    transferTo(anotherAccount, amount){
        if (this.initialBalance >= amount){
            this.withdraw(amount);
            anotherAccount.deposit(amount);
        } //O(1)
        else {
            console.log("Insufficient balance")
        }
    } 
    getSummary(){
        console.log(`${this.ownerName}'s balance is $${this.initialBalance}`) //O(1)
    }
    //"John's balance is $400"
    printHistory(){
        if (this.history.length != 0) {
            console.log(this.history);
        }
        else{
            console.log("No history for this account.")
        }
    }
}

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300); 
acc1.printHistory();
acc1.transferTo(acc2, 200); 
acc1.getSummary(); // John's balance is $300 
acc2.getSummary(); // Sara's balance is $500 
acc1.printHistory();


// =======================================================================
//Exercise 3:

const Addbtn = document.getElementById("Addbtn"); // to be able to reach the button

Addbtn.addEventListener("click", function() {
    let task = document.getElementById("taskinput");
    let taskvalue = task.value;
    console.log(taskvalue);
});

