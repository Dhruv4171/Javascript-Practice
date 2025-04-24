//Filter
Array.prototype.myFilter = function(cb){
	let newarr = []
	for(let i = 0; i <this.length; i++){
		if (cb(this[i])) {
			newarr.push(this[i])
		}
	}
	return newarr 
}
let arr = new Array(1,2,3,4,5)
let narr = arr.myFilter((ele) => ele>2)
console.log(narr)
//reduce
Array.prototype.myReduce = function(cb,cv){
    
}