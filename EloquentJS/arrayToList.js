function arrayToList(array) {
    const list = {};
    let pointer = list;

    if (array === null) return array; 
    for (let i = 0; i < array.length; i++) {
        let elem = array[i];
        if (i != 0) {
            pointer.rest = {};
            pointer = pointer.rest;
        }
        pointer.value = elem;
    }
    pointer.rest = null;
    return list;
}

function arrayToList2(array){
    const list = {};
    let pointer = list;
    let last = pointer;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        pointer.value = element; 
        pointer.rest = {}; 
        last = pointer; 
        pointer = pointer.rest; 
    }
    last.rest = null; 
    return list;  
}

function listToArray(list) {
    let pointer = list.rest;
    const array = [];
    array.push(list.value);
    while (pointer != null) {
        array.push(pointer.value);
        pointer = pointer.rest;
    }
    return array;
}

// prepend which takes an element and a list and creates a new list 
//that adds the element to the front of the input list
function prepend(elem, list) {
    const newList = {}; 
    
    newList.value = elem;
    newList.rest = list; 
    return newList; 
}

// and nth, which takes a list and a number and returns the element at the given position in the list 
// (with zero referring to the first element) or undefined when there is no such element.
function nth(list, num){
    let counter = 0; 
    let current = list;
    if (num < 0) return undefined; 
    while (counter < num){
        current = current.rest; 
        if (current === null) return undefined; 
        counter++; 
    }
    return current.value;
}

console.log(arrayToList2([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray({ value: 10, rest: { value: 20, rest: null } }));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList(null), 3));
// // → 20
