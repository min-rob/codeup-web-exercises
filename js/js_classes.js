//IFE
//create a dog obj with a function ie. factory function
const dog = (breed, gender, weight, color, name, altered) => {
  let result = {
    breed,
    weight,
    color,
    name,
    altered,
    gender,
    bark: function () {
      console.log(`${name} barks!`);
    },
    describe: function () {
      console.log(
        `${name} is a ${breed}, their coat color is: ${color}, weight: ${weight} gender: ${gender}, altered: ${altered}.`
      );
    },
  };
  return result;
};
class Dog {
  /*
    This is a constructor function in JavaScript that takes in six parameters: name, gender, breed, weight, color, and altered. It uses the super keyword to call the constructor of the parent class, passing in the same parameters. This is because the current class is a subclass of the parent class and it needs to inherit the properties and methods of the parent class
    */
  constructor(breed, gender, weight, color, name, altered) {
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.gender = gender;
    this.weight = weight;
    this.altered = altered;
  }
  bark() {
    console.log(`${name} barks!`);
  }
  playFetch() {
    console.log(`${name} runs to get the ball!`);
  }
}

class Bulldog extends Dog {
  constructor(name, gender, breed, weight, color, altered) {
    /* 
    The super keyword is used to call the constructor of the parent class and pass in the parameters. This is necessary because the subclass needs to inherit the properties and methods of the parent class. By calling the parent constructor with the same parameters, the subclass can inherit the properties of the parent class.
     */
    super(name, gender, breed, weight, color, altered);
  }
  bark() {
    console.log(`${name} growls!`);
  }
}

(() => {
  let dog1 = new Dog("Husky", "Male", 45, "Black and White", "Buddy", true);
  console.log(dog1);
  dog1.playFetch();
  let spike = new Bulldog(
    "Spike",
    "Male, Bulldog",
    45,
    "Black and White",
    "Buddy",
    true
  );
  spike.playFetch();
})();

class Car {
  constructor(data) {
    this.make = data.make;
    this.model = data.model;
    this.year = data.year;
    this.miles = data.miles;
    this.color = data.color;
    this.price = data.price;
  }
}

class SuperCar extends Car {
  constructor(data) {
    super(data);
    this.horsePower = data.horsePower;
    this.turbo = data.turbo;
    this.nitrous = data.nitrous;
  }
  flex() {
    console.log("Drives away in money");
  }
}

let firstCar = new Car({
  make: "Ford",
  model: "Mustang",
  year: 2015,
  miles: 10000,
  color: "red",
  price: 25000,
});

let lambo = new SuperCar({
  make: "Lamborghini",
  model: "Aventador",
  horsepower: 1100,
  turbo: true,
  nitrous: true,
});

console.log(lambo);

lambo.flex();
