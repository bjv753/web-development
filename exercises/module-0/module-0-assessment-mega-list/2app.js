//Write a function to assign numbers a school grade value. 
//The function should take 1 argument, the number value. 
//Your function should console log a grade for the number value provided, 
//either "A", "B", "C", "D", or "F". 
//Can you take it a step further and account for +’s and -’s (ex: A+, A, A-)!

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        console.log(getGrade(students[i]))
        console.log(students[i][0])
        var letterGrade = getGrade(students[i])
} 


var avg = (Avgmarks/students.length);
console.log("Average grade: " + (Avgmarks)/students.length);

function getGrade(student) {
        const percent = student[1]
        if (percent < 55) {
                return "F-"
        } else if (percent == 55) {
                return "F"      
        } else if (percent < 60) {
                return "F+"      
        } else if (percent < 65) {
            return "D-"      
        } else if (percent == 65) {
          return "D"      
        } else if (percent < 70) {
            return "D+"      
        } else if (percent < 75 ) {
                return "C-" 
        } else if (percent == 75 ) {
                return "C" 
        } else if (percent < 80 ) {
                return "C+" 
        } else if (percent < 85 ) {
                return "B-"
        } else if (percent == 85 ) {
                return "B" 
        } else if (percent < 90) {
                return "B+"
        } else if (percent < 95) {
                return "A-"
        } else if (percent == 95) {
                return "A"
        } else if (percent < 100) {
                return "A+"
        }

}
