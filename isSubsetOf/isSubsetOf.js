/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
	// var boolean = false;
	// // for(var i = 0 ; this.length ; i++){
	// 	if(arr.indexOf(this[i])!== -1){
	// 		boolean = true;
	// 	} 
	// 	console.log(this.length)
	// // }
	// return boolean;
	var boolean = false;
	for(var i= 0 ; i < this.length ; i++){
		if(arr.indexOf(this[0]) !== -1){
			boolean = true;
		}	else if(arr.indexOf(this[i]) === -1){
			return false;
		}
	}
	// var boolean = false;
	return boolean;
};
	
// Array.prototype.isSubsetOf = function (arr) {
	
// 	if(arr.indexOf(this[0])){
// 		return true;
// 	}

// };





