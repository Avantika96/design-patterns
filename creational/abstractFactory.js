//  abstract the factories and are able to create multiple factories, classes et cetera

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "sedan":
        return new Car(4, "V6", "grey");
      case "mini":
        return new Car(2, "V8", "red");
    }
  }
}

class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

class SUVFactory {
  createCar(type) {
    switch (type) {
      case "cx5":
        return new SUV(4, "V6", "grey");
      case "honda":
        return new SUV(2, "V8", "red");
    }
  }
}

const carFactory = new CarFactory();
const suvFactory = new SUVFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case "car":
      return carFactory.createCar(model);
    case "suv":
      return suvFactory.createCar(model);
  }
};

const cx5 = autoManufacturer("suv", "cx5");
console.log(cx5);
