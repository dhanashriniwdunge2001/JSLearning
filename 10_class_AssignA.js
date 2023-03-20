console.log("-----Defined Class vehical with data member &constructor-----");

class Vehical{
    constructor(Carname, carColor, company, prize, engine){
    this.CarName = Carname;
    this.carColor = carColor;
    this.company = company;
    this.prize = prize;
    this.engine = engine;
}


}
const  swift = new Vehical("swiftDezire", "Black","swift", "365400","1255cc");
console.log(swift );

const  fortuner= new Vehical("fortuner", "white","toyota", "6566700","2754cc");
console.log(fortuner );

const  creta = new Vehical("creta", "white","Hyundai", "456780","1497cc");
console.log( creta );

const  Harrier = new Vehical(" Harrier", "red","TATA", "876540","34.5kwh");
console.log( Harrier );

const  Baleno = new Vehical("Baleno", "white","Maruti", "256880","1197cc");
console.log(Baleno );


console.log("------Added into Array and Traverse using For-of loop-----");
const arrayOfVehical = [swift, fortuner, creta, Harrier, Baleno]

for (let index = 0; index < arrayOfVehical.length; index++) {
    const element = arrayOfVehical[index];
    console.log(`${element.Carname}, ${element.carColor}, ${element.company}, ${element.prize}, ${element.engine}`);
}

function traverseObject(bank) {
    
    var my
}