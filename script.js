const nums = [1, 2, 3, 4, 5]

// Polyfill for map

Array.prototype.myMap = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }

    return temp
}

const mapPolyFill = nums.myMap((nums, i, arr) => {
    return nums * 3
})

console.log("myMap polyfill", mapPolyFill)

// Polyfill for Filter
Array.prototype.myFilter = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(this[i])
    }

    return temp;
}

const filterPolyfill = nums.myFilter((num, i, arr) => { return num > 2 })

console.log("filter polyfill", filterPolyfill)


// reduce syntax
// arr.reduce((acc, current, i , arr) => {}, initialValue )

// Polyfill for map
Array.prototype.myReduce = function (cb, initialValue) {
	var accumulator = initialValue;
	for(let i = 0; i < this.length; i++) {
		accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
		}
	return accumulator;
}

const reducePolyfill = nums.myReduce((acc, curr, i, arr ) => {return acc + curr})

console.log("reduce polyfill", reducePolyfill)