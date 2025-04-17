# JavaScript Arrays – Complete Guide

## Introduction

Arrays in JavaScript are ordered collections of elements, accessible via numeric indices. They can store elements of any type, including numbers, strings, objects, and even other arrays.

---

## Array Creation

### Using Array Literals


```javascript
const myArr = [0, 1, 2, 3, 4];
```


This creates an array with elements `0` through `4`.

### Using the Array Constructor


```javascript
const myNewArr = new Array(1, 2, 3, 4, 5);
```


This also creates an array with elements `1` through `5`.

---

## Array Methods

### Adding and Removing Elements

- **`push()`**: Adds one or more elements to the end of an array.

  
```javascript
  myArr.push(6); // myArr becomes [0, 1, 2, 3, 4, 6]
  ```


- **`pop()`**: Removes the last element from an array and returns it.

  
```javascript
  myArr.pop(); // Removes 6; myArr becomes [0, 1, 2, 3, 4]
  ```


- **`unshift()`**: Adds one or more elements to the beginning of an array.

  
```javascript
  myArr.unshift(3); // myArr becomes [3, 0, 1, 2, 3, 4]
  ```


- **`shift()`**: Removes the first element from an array and returns it.

  
```javascript
  myArr.shift(); // Removes 3; myArr becomes [0, 1, 2, 3, 4]
  ```


### Searching in Arrays

- **`includes()`**: Determines whether an array includes a certain value.

  
```javascript
  myArr.includes(9); // Returns false
  ```


- **`indexOf()`**: Returns the first index at which a given element can be found, or -1 if not present.

  
```javascript
  myArr.indexOf(3); // Returns 3
  ```


### Joining Array Elements

- **`join()`**: Joins all elements of an array into a string, separated by a specified separator.

  
```javascript
  const myNewArr2 = myArr.join(); // "0,1,2,3,4"
  typeof myNewArr2; // "string"
  ```


---

## Slice vs. Splice

### `slice()`

The `slice()` method returns a shallow copy of a portion of an array into a new array object, selected from start to end (end not included). The original array is not modified.


```javascript
const myn1 = myArr.slice(1, 3); // [1, 2]
```


### `splice()`

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements.


```javascript
const myn2 = myArr.splice(1, 3); // Removes 3 elements starting from index 1
// myn2 is [1, 2, 3]; myArr is now [0, 4]
```


**Key Differences:**

1. **Modification**: `slice()` does not modify the original array; `splice()` does.

2. **Return Value**: `slice()` returns the selected elements; `splice()` returns the removed elements.

3. **Use Cases**: Use `slice()` when you want to extract elements without altering the original array. Use `splice()` when you want to remove or replace elements in the original array.

---

## Shallow vs. Deep Copy

### Shallow Copy

A shallow copy of an array copies the elements' references, not the actual elements. If the array contains objects, both the original and the copy will reference the same objects.


```javascript
const original = [{ a: 1 }, { b: 2 }];
const shallowCopy = original.slice();

shallowCopy[0].a = 99;
console.log(original[0].a); // 99
```


In this example, modifying the object in the shallow copy also affects the original array.

### Deep Copy

A deep copy creates a new array and recursively copies all elements, ensuring that nested objects are also copied. This can be achieved using structured cloning or libraries like Lodash.


```javascript
const original = [{ a: 1 }, { b: 2 }];
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy[0].a = 99;
console.log(original[0].a); // 1
```


Here, modifying the deep copy does not affect the original array.

---

## Additional Array Methods

- **`concat()`**: Merges two or more arrays.

  
```javascript
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const merged = arr1.concat(arr2); // [1, 2, 3, 4]
  ```


- **`map()`**: Creates a new array with the results of calling a provided function on every element.

  
```javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map(n => n * 2); // [2, 4, 6]
  ```


 