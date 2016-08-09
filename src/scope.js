function fn() {
  this.value = 20;
}
function fn1(){

  return this.num;
}

var numbers = {
   numberA: 5,
   numberB: 10,
   sum: function() {
     function calculate() {
       return this.numberA + this.numberB;
     }
     return calculate();
   }

};
var obj = {
  increment: function(){
    this.num++;
  }};

  var Person = function(){

    this.name = 'Shawn';
return this;
  };
