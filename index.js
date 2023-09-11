// Exercise 1.1: Design a class named "Car" with properties:
//  make, model, and year.
// Exercise 1.2: Add a method to the Car class
//  called displayInfo which logs the car's make, model, and year.

class Car {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
   
}
const jeep = new Car("jeep", "grand cherokee", 1987);

function displayInfo(Car) {
    console.log(this.make, this.model, this.year);

   }
   displayInfo(jeep);