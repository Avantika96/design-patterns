// mechanism to create other objects. A factory to handle most of your classes and then simply use this factory
// method to create your new objects.

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class Factory {
  createCar(type) {
    switch (type) {
      case "sedan":
        return new Car(4, "V6", "grey");
      case "suv":
        return new Car(2, "V8", "red");
    }
  }
}

const factory = new Factory();
const civic = factory.createCar("suv");
console.log(civic);
