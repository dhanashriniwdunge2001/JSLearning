console.log(`~~~~~~~~~~~~~~~~~~~   Assignment B  Sorting Employee Details in Ascending and Descending Order  ~~~~~~~~~~~~~~~~~~~`);

class Employee {
    constructor(empId,empName,empDept,empSalary,empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const empAnil = new Employee (22,"Anil","IT",50000,"TCS");
const empRadha = new Employee (33,"Radha","HR",74000,"Wipro");
const empRishi = new Employee (55,"Rishi","Finance",47000,"TCS");
const empSonali = new Employee (66,"Sonali","Finance",45000,"Infy");
const empMonika = new Employee (77,"Monika","IT",40000,"Wipro");
const empViny = new Employee (88,"Vinyak","IT",75000,"TCS");
const empMahi = new Employee (99,"Mahesh","HR",85000,"Infy");

arrayEmployee = [empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi]


// class Employee{
//     constructor(id, name, department, salary, company){
//         this.id=id;
//         this.name=name;
//         this.department=department;
//         this.salary=salary;
//         this.company=company;
//     }
// }

// const anil= new Employee(22, "Anil", "IT", 50000, "TCS");
// const radha= new Employee(33, "Radha", "HR", 74000, "Wipro");
// const rishi= new Employee(45, "Rishi", "Finance", 47000, "TCS");
// const sonali= new Employee(66, "Sonali", "Finance", 45000, "Infy");
// const monica= new Employee(77, "Monica", "IT", 40000, "Wipro");
// const viny= new Employee(88, "Vinayak", "IT", 75000, "TCS");
// const mahi= new Employee(99, "Mahesh", "HR", 85000, "Infy");

// const arrayOfEmployees=[anil, radha, rishi, sonali, monica, viny, mahi];

// console.log(`--------------1. Sort the ‘arrayEmployees’ in ascending order of Employee Id’s--------------`);
// const sortWithId=arrayOfEmployees.sort((a,b)=>{
//     return a.id>b.id ? 1 : -1;
// })
// sortWithId.forEach(Employee=>{
//     console.log(`Employee Id: ${Employee.id}, Employee Name: ${Employee.name}, Employee Department: ${Employee.department}`);
// }) 

// console.log(`--------------2. Sort the ‘arrayEmployees’ in ascending order of employee department--------------`);
// let sortWithDept=arrayOfEmployees.sort((a,b)=>{
//     return a.department>b.department ? 1 : -1;
// })
// sortWithDept.forEach(Employee=>{
//     console.log(`Employee Id: ${Employee.id}, Employee Department: ${Employee.department}, Employee Company: ${Employee.company}`);
// })

// console.log(`--------------3. Sort the employee array in descending order of employee salary--------------`);
// let sortWithSalary=arrayOfEmployees.sort((a,b)=>{
//     return a.salary<b.salary ? 1 : -1;
// })
// sortWithSalary.forEach(Employee => {
//     console.log(`Employee Name: ${Employee.name}, Employee Salary: ${Employee.salary}, Employee Company: ${Employee.company}`);
// });

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "WIPRO");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [emp_anil,emp_radha,emp_rishi, emp_sonali,emp_monika, emp_viny, emp_mahi];