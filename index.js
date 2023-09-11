// Exercise 1.1: Design a class named "Car" with properties:
//  make, model, and year.
// Exercise 1.2: Add a method to the Car class
//  called displayInfo which logs the car's make, model, and year.

// class Car {
//     constructor (make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
   
// }
// const jeep = new Car("jeep", "grand cherokee", 1987);

// function displayInfo(Car) {
//     console.log(this.make, this.model, this.year);

//    }
//    displayInfo(jeep);

// Exercise 2.1: Craft a regular function within an 
// object, then invoke it. Observe the behavior of "this".
// Exercise 2.2: Create an arrow function within another 
// object. Execute it and note the behavior of "this".
// Exercise 2.3: Using the .bind() method, manually set
//  the context of a function and observe the change in
//   the behavior of "this".

// const user = {
//     firstName: "Trevor",
//     lastName: "Ariza",
//     fullName: function() {
//         console.log(this.firstName + " " +this.lastName)

//     }
    
// }
// user.fullName();

const user = {
    firstName: "Pau",
    lastName: "Gasol",
    fullName: () => {
        console.log(this.firstName + " " +this.lastName)

    }
    
}
user.fullName();