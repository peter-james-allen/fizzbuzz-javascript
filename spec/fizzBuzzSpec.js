describe('FizzBuzz', function() {

  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  });

  it('should return 1 when given 1', function() {
    expect(fizzbuzz.number(1)).toEqual(1)
  });

  it('should return "fizz" when given 3', function() {
    expect(fizzbuzz.number(3)).toEqual('Fizz')
  });  

  it('should return "buzz" when given 5', function() {
    expect(fizzbuzz.number(5)).toEqual('Buzz')
  });  

  it('should return "fizzbuzz" when given 15', function() {
    expect(fizzbuzz.number(15)).toEqual('FizzBuzz')
  });  

});