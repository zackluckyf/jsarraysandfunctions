fdescribe("Scope", function () {
  var globalVar;

 beforeEach(function() {
   //clean up globalVar
   globalVar = window;
   if(globalVar.functionVar){delete globalVar.functionVar;}
 });
  describe("Function invocation", function () {
    beforeEach(function () {
      globalVar.numberA=15;
      globalVar.numberB=101;
    });
    it('should set global this value when function is invoked', function () {
      fn();
      expect(globalVar.value).toEqual(20);
    });
    it('should acess global variable when functoin is invoked', function () {
      globalVar.num=23;
      expect(fn1()).toEqual(23);
    });
    it('should reference global this when calling an inner function', function () {
      expect(numbers.sum()).toEqual(116);
    });
  });

  describe("use strict", function () {
    it('should be undefined ', function () {
    expect(fn3()).not.toBeDefined();
    });
  });
  describe("Method invocation", function () {
    beforeEach(function () {
          obj.num = 0;
          globalVar.num=2;
    });
    it('should change an objects internals using this', function () {
      obj.increment();
      expect(obj.num).toEqual(1);
    });
    it('should referance global when method is detached', function () {
    var f = obj.increment;
    f();
      expect(globalVar.num).toEqual(3);
    });
  });
  describe("Constructor Invocation", function () {

    it('should have properties set when constructed', function () {
      expect(new Person().name).toEqual('Shawn');
    });
    it('should not have properties set when constructed', function () {
Person();
      expect(globalVar.name).toEqual('Shawn');
    });
  });
});
