class Bank {
    constructor (bankName, location, account, ifsc, interestRate){
this.bankName = bankName;
this.location = location;
this.account = account;
this.ifsc = ifsc;
this.interestRate = interestRate;
    }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate}`);
}
}
const sbiBank = new Bank("SBI Bank"," Wakad", " 234567234567","SBIN004598", 10.75);
console.log(sbiBank);

const axisBank = new Bank("Axis Bank", "Bajirao Road, pune", "4567890987","AXIS456789",10.59);
console.log(axisBank);
class Person {
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;
    }
}
const personDhoni = new Person("MS Dhoni", "Ranchi");
const personShubham = new Person("Shubham Gill", "Mumbai");

console.log(personDhoni instanceof Person);
console.log(personShubham instanceof Bank);
console.log(sbiBank instanceof Bank);