//challenge 2
var numbers1 = [4, 1, 6, 5, 8];
var numbers2 = [7, 3, 2, 9, 10];
var numbers3 = [];


function combineSort(array1, array2){
	//first concat the two arrays
	numbers3 = array1.concat(array2);
	
	numbers3.sort(function(array1,array2) {
		if (array1 > array2){
			return 1;
		}
		if (array2 > array1){
			return -1;
		}
		return 0;
	});
	
	return numbers3;
}

combineSort(numbers1, numbers2);
console.log(numbers3);

