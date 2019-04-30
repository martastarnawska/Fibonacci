const fib = require('./fib');


//checking unusual values
it('one element test', () => {
   expect(fib(1)).toEqual([0]);
});

it('two elements test', () => {
    expect(fib(2)).toEqual([0, 1]);
 });


//checking wrong inputs 
 it('no arguments', () => {
    expect(fib()).toBeUndefined();
 });

 it('negative number', () => {
    expect(fib(-5)).toBeUndefined();
 });

 it('decimal value', () => {
     expect(fib(4.8)).toBeUndefined();
 });
 it('string value', () => {
    expect(fib('string')).toBeUndefined();
});

// checking typical input
it('typical input', () => {
    expect(fib(11)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
})