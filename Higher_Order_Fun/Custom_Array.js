Array.prototype.customSlice = function(start, end) {
    let startIndex = (start < 0) ? Math.max(this.length + start, 0) : Math.min(start, this.length);
    let endIndex = (end < 0) ? Math.max(this.length + end, 0) : Math.min(end, this.length);

    let newArray = [];
    for (let i = startIndex; i < endIndex; i++) {
        newArray.push(this[i]);
    }

    return newArray;
};

Array.prototype.customSplice = function(start, deleteCount, ...items) {
    let startIndex = (start < 0) ? Math.max(this.length + start, 0) : Math.min(start, this.length);
    
    let removed = [];
    for (let i = 0; i < deleteCount; i++) {
        removed.push(this[startIndex]);
        this.splice(startIndex, 1);
    }

    if (items.length > 0) {
        for (let i = items.length - 1; i >= 0; i--) {
            this.splice(startIndex, 0, items[i]);
        }
    }

    return removed;
};
Array.prototype.customPush = function(...items) {
    for (let i = 0; i < items.length; i++) {
        this[this.length] = items[i];
    }
    return this.length;
};

Array.prototype.customPop = function() {
    if (this.length === 0) return undefined;
    let removedElement = this[this.length - 1];
    this.length = this.length - 1;
    return removedElement;
};

Array.prototype.customMap = function(callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
};

Array.prototype.customFilter = function(predicate) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (predicate(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

Array.prototype.customReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.customSlice(1, 3)); // Output: [2, 3]
console.log(arr.customSplice(2, 0, 6)); // Output: []
console.log(arr); // After splice: [1, 2, 6, 3, 4, 5]
console.log(arr.customPush(6, 7)); // Output: 8 (new length of the array)
console.log(arr); // After push: [1, 2, 6, 3, 4, 5, 6, 7]
console.log(arr.customPop()); // Output: 7 (removed element)
console.log(arr); // After pop: [1, 2, 6, 3, 4, 5, 6]

console.log(arr.customMap(x => x * 2)); // Output: [2, 4, 12, 6, 8, 10, 12]
console.log(arr.customFilter(x => x % 2 === 0)); // Output: [2, 6, 4, 6]
console.log(arr.customReduce((acc, cur) => acc + cur, 0)); // Output: 27
