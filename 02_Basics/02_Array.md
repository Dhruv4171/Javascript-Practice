### 1. **Array Declaration**
```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
```

---

### 2. **Push Method**
Adds an item to the end of an array.
```javascript
marvel_heros.push(dc_heros);
console.log(marvel_heros);
// Output: ['thor', 'Ironman', 'spiderman', ['superman', 'flash', 'batman']]
console.log(marvel_heros[3][1]);
// Output: 'flash'
```
*Note:* `push` adds the entire `dc_heros` array as a single element.

---

### 3. **Concat Method**
Merges two or more arrays and returns a new array.
```javascript
const all_heroes = marvel_heros.concat(dc_heros);
console.log(all_heroes);
// Output: ['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']
```

---

### 4. **Spread Operator**
Creates a new array by expanding elements from other arrays.
```javascript
const new_all_heroes = [...marvel_heros, ...dc_heros];
console.log(new_all_heroes);
// Output: ['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']
```

---

### 5. **Flat Method**
Flattens nested arrays into a single array up to a specified depth.
```javascript
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(3);
console.log(real_another_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
```

---

### 6. **Array.isArray() Method**
Checks if a value is an array.
```javascript
console.log(Array.isArray("Hitesh"));
// Output: false
```

---

### 7. **Array.from() Method**
Creates an array from an iterable or array-like object.
```javascript
console.log(Array.from("Hitesh"));
// Output: ['H', 'i', 't', 'e', 's', 'h']

console.log(Array.from({name: "hitesh"}));
// Output: [] => Requires clarification on whether to use keys or values
```

---

### 8. **Array.of() Method**
Creates a new array instance from a variable number of arguments.
```javascript
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// Output: [100, 200, 300]
```

---

This guide covers foundational methods and operators used with arrays in JavaScript. These are essential for effective array manipulation and data handling in modern JavaScript applications.

