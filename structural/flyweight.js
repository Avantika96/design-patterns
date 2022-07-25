// - [Emmanuel] The flyweight pattern is a method to minimize recreating the same items twice, and
// therefore minimize the memory impact in our systems. The flyweight pattern uses a similar approach to the singleton.

// prevent our class from creating more than one instance of the blue print we've defined

let instance = null;

class Car {
  constructor(doors, engine, color) {
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      return instance;
    }
  }
}

const civic = new Car(4, "V6", "grey");
const honda = new Car(2, "V8", "red");
console.log(civic, honda);
