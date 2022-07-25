// - [Instructor] The strategy pattern is basically a way to encapsulate different algorithms or functions and then at
// runtime practically use the same code to run different scenarios.

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

// Resusing the class to create new Car objects
const civic = new Car(4, "V6", "grey");
const cx5 = new SUV(4, "v8", "red");
console.log(civic, cx5);
