





const names = ['Stephen', 'Austin', 'Eric', 'Sam', 'Bob']
const jobtitle = ['TA','Prof', 'Master Prof']
const salary = ['$55,000', '$70,000', '$90,000']
// const hourlystatus = [   ] We will not use this array because we can use a default value = 'fulltime' in the function Employee(parameters)

function Employee(name, jobtitle, salary, hourlystatus = 'fulltime') {
    // use the "this" keyword to reference each object parameter
    // that is created from this constructor function
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    this.hourlystatus = hourlystatus;

    this.printEmployeeForm = function() {

        console.log(`name: ${name} jobtitle: ${jobtitle} 
                     salary ${salary} hourlystatus ${hourlystatus}`)
    }
}

const employeesArr = []
//                                                              hourlystatus = 'parttime' is where we override the default 'fulltime' status
const employeeOne = new Employee(names[0],jobtitle[0],salary[0],hourlystatus = 'parttime') 
const employeeTwo = new Employee(names[1],jobtitle[0],salary[0],hourlystatus)
const employeeThree = new Employee(names[2],jobtitle[1],salary[1],hourlystatus)
const employeeFour = new Employee(names[3],jobtitle[1],salary[1],hourlystatus)
const employeeFive = new Employee(names[4],jobtitle[2],salary[2],hourlystatus)

employeesArr.push(employeeOne,employeeTwo,employeeThree,employeeFour,employeeFive)

employeeOne.printEmployeeForm()
employeeTwo.printEmployeeForm()
employeeThree.printEmployeeForm()
employeeFour.printEmployeeForm()

console.log(employeesArr)



