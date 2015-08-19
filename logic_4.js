//challenge 4
function recursion(num){
	if (num == 0){
		return 0;
	}
	return num + recursion(num-1);
}

console.log(recursion(5));