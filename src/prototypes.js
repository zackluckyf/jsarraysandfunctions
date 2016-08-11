var Pet = function () {
  this.age = 2;
};

var Dog = function () {
  Pet.call(this);
  this.bark = 'woof';
};

Dog.prototype = Object.create(Pet.prototype);

var dog = new Dog();

var proto = {
  value: 5,
  pot: 3
};

var settings = Object.create(proto);

var moreSettings = Object.create(settings);

var evenMoreSettings = Object.create(moreSettings);
