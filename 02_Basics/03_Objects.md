### 1. **Object Basics**
Objects are collections of key-value pairs. They can be created using literals or constructors.

#### Object Literal:
```javascript
const mySym = Symbol("key1");

const JsUser = {
    name: "a1",
    "full name": "a1 b1",
    [mySym]: "mykey1", // Symbol must be used in square brackets
    age: 18,
    location: "Jaipur",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
};
```

---

### 2. **Accessing Object Properties**
- Dot notation:
```javascript
console.log(JsUser.age); // Output: 18
```

- Bracket notation (required for keys with spaces):
```javascript
console.log(JsUser["full name"]); // Output: 'a1 b1'
```

- Accessing symbol properties:
```javascript
console.log(JsUser[mySym]); // Output: 'mykey1'
console.log(typeof JsUser[mySym]); // Output: 'string'
```

---

### 3. **Modifying Object Properties**
```javascript
JsUser.location = "Noida";
```

#### Freezing Objects
`Object.freeze()` prevents modification of object properties.
```javascript
Object.freeze(JsUser);
JsUser.location = "Delhi"; // This will not update the location

console.log(JsUser);
/*
Output:
{
  name: 'a1',
  'full name': 'a1 b1',
  age: 18,
  location: 'Noida',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Tuesday' ],
  [Symbol(key1)]: 'mykey1'
}
*/
```

---

### 4. **Adding Methods to Objects**
Methods can be defined as functions within objects.
```javascript
JsUser.greeting = function() {
    console.log(`Hello JS user ${this.name}`);
};

console.log(JsUser.greeting); // Output: [Function (anonymous)]
console.log(JsUser.greeting()); // Output: 'Hello JS user a1' and returns undefined
```

---

### 5. **Object Creation with Constructor**
```javascript
// Using Object.create
const user = Object.create(null);
```

---

### 6. **Singleton Objects**
Singletons can be created using constructors like `Object.create()`.

---

This guide covers key concepts of JavaScript objects including property access, symbols, immutability with `freeze()`, and method declarations. These are foundational in mastering object-oriented JavaScript.

