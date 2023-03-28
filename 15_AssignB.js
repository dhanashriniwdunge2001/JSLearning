class Employee {
    constructor(empId,empName,empDept,empSalary,empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
console.error("~~~~~~~~~~~~~~~~~~~~~~~~~~~ Created All Employee Objects Using Class ~~~~~~~~~~~~~~~~~~~~~~~~~~~");
const empShree = new Employee (22,"Anil","IT",50000,"TCS");
console.log(empShree);
const empRadha = new Employee (33,"Radha","HR",74000,"Wipro");
console.log(empRadha);
const empDhanu = new Employee (55,"Rishi","Finance",47000,"TCS");
console.log(empDhanu);
const empSonali = new Employee (66,"Sonali","Finance",45000,"Infy");
console.log(empSonali);
const empMonika = new Employee (77,"Monika","IT",40000,"wipro");
console.log(empMonika);
const empkrishna = new Employee (88,"Vinyak","IT",75000,"TCS");
console.log(empkrishna);
const empMahi = new Employee (99,"Mahesh","HR",85000,"Infy");
console.log(empMahi);