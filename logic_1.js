var primes = [2, 3, 5, 7, 11, 13, 17, 19];
var nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14];
var c = [];

function arrayCombine(a, b){
	var b = b.reverse();
	for (var i=0; i < a.length; i++){
		c.push(a[i]+b[i]);
	}
	return c;
}

arrayCombine(primes,nonPrimes);
console.log(c);