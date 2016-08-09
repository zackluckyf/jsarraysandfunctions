xdescribe("Arrays", function () {
  var arr;
  beforeEach(function () {
    arr = [2,3,4,5,6,7,8,9];
  });
  it('should be able to push a value', function () {
    arr.push(5);
    expect(arr[arr.length-1]).toEqual(5);
  });
  it('should be able to slice a value', function () {

    expect(  arr.slice(1,4)).toEqual([3,4,5]);
  });
  it('should be able to splice a value', function () {

    expect(  arr.splice(1,2)).toEqual([3,4]);
  });
  it('should be able to pop a value', function () {

    expect(  arr.pop()).toEqual(9);
  });
  arr = [2,3,4,5,6,7,8,9];
  it('should be able to map values', function () {
      function double(x){
        return x*2;
      }
      expect(arr.map(double)).toEqual([4,6,8,10,12,14,16,18]);

  });

  it('should be able to shift a value', function () {

    expect(  arr.shift()).toEqual(2);
  });
  it('should be able to unshift a value', function () {

    expect(  arr.unshift(9)).toEqual(arr[0]);
  });
  it('should be able to filter a value', function () {
    function myFilter(num){
      return num % 2 === 0;

    }
    expect(  arr.filter(myFilter)).toEqual([2,4,6,8]);
  });
  it('should be able to reduce', function () {
    function myReduce(num, num2){
      return num + num2;
    }
    expect(  arr.reduce(myReduce)).toEqual(44);
  });
  it('should be able to join', function () {
    expect(  arr.join('')).toEqual('23456789');
  });
});
