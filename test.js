const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;


const reverse = array => array ? Array.prototype.reverse.call(array) : array;
const reverse2 = array => array ? array.reverse() : array;

suite.add('Array#reverse', function() {
    reverse(['a', 'b', 'c']);
})
    .add('Array#reverse2', function() {
        reverse2(['a', 'b', 'c']);
    })
    .add('Array#reverse3', function() {
        ['a', 'b', 'c'].reverse();
    })
// add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
// run async
    .run({ 'async': true });