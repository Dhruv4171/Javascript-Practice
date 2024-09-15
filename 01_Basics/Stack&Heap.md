# Understanding Stack and Heap Memory in JavaScript

In JavaScript, memory management plays a crucial role in how variables are stored and accessed. Depending on the type of data, JavaScript allocates memory in either the **stack** or the **heap**. Understanding how this works is essential for writing efficient and error-free code.

In this blog, we'll explore the concepts of **stack** and **heap** memory and how JavaScript handles **primitive** and **reference** data types.

## Stack vs. Heap Memory

### Stack Memory

The **stack** is a region of memory that is used for storing **primitive data types** such as strings, numbers, booleans, `null`, `undefined`, symbols, and `bigint`. Stack memory is:

- **Fixed-size**: The size of the stack is limited.
- **Fast access**: Variables stored in the stack are accessed quickly.
- **Automatically managed**: Memory is automatically allocated and freed when a function is called and returned.

Primitive values are stored directly in the stack, and each time a variable is created or reassigned, a new space in the stack is allocated.

### Heap Memory

The **heap** is a larger region of memory used for **non-primitive** data types such as objects, arrays, and functions. Heap memory is:

- **Dynamically allocated**: Memory is allocated at runtime, and its size is not fixed.
- **More complex**: Variables in the heap can take longer to access compared to stack memory due to the nature of reference types.
- **Manually managed**: JavaScript's garbage collector is responsible for managing memory in the heap.

Reference types are stored in the heap, but the variable itself only holds a **reference** (or a pointer) to the actual memory location in the heap.

## Stack Memory in Action: Primitive Data Types

Let's start with an example of how stack memory works with primitive types:

```javascript
let myName = "Dhruv";
let anotherName = myName; 
anotherName = "Thor";
```

### Explanation:

1. **Primitive Assignment**: 
   - When `let myName = "Dhruv";` is executed, the string `"Dhruv"` is stored in the stack. The variable `myName` directly holds the value `"Dhruv"`.
   
2. **Copying Primitive**:
   - When `let anotherName = myName;` is executed, JavaScript creates a **copy** of the value `"Dhruv"` in the stack. Now, `anotherName` holds the same value, but in a different memory location in the stack.
   
3. **Reassignment**:
   - When `anotherName = "Thor";` is executed, JavaScript updates the value of `anotherName` to `"Thor"`, without affecting the original value of `myName`.

This means that **primitive values are copied by value**, not by reference. The variables `myName` and `anotherName` are completely independent of each other.

```javascript
console.log(myName);       // Dhruv
console.log(anotherName);  // Thor
```

## Heap Memory in Action: Reference Data Types

Now, let’s look at how heap memory works with reference types like objects.

```javascript
let userOne = {
    email: "userOne@gmail.com",
    upi: "userOne@ybl"
};

let userTwo = userOne; 

userTwo.email = "userTwo@gmail.com";
userTwo.upi = "userTwo@ybl";
```

### Explanation:

1. **Reference Assignment**:
   - When `let userOne = { email: "userOne@gmail.com", upi: "userOne@ybl" };` is executed, the object `{ email: "userOne@gmail.com", upi: "userOne@ybl" }` is stored in the **heap**. The variable `userOne` holds a **reference** (a pointer) to that object in the heap, not the object itself.
   
2. **Copying Reference**:
   - When `let userTwo = userOne;` is executed, JavaScript copies the **reference** from `userOne` to `userTwo`. Both `userOne` and `userTwo` now point to the same object in the heap. This means any changes made through `userTwo` will also be reflected in `userOne`, since they reference the same object.

3. **Modifying the Object**:
   - When `userTwo.email = "userTwo@gmail.com";` is executed, the email of the object in the heap is modified. Since both `userOne` and `userTwo` point to the same object, the change is visible through both variables.

```javascript
console.log(userOne.email);  // userTwo@gmail.com
console.log(userTwo.email);  // userTwo@gmail.com
```

This demonstrates that **reference values are copied by reference**, not by value. Modifying the object through one variable affects all variables that reference the same object.

## Key Differences Between Stack and Heap

- **Stack** stores primitive values directly, and these values are copied by value. Changing one variable doesn’t affect others.
- **Heap** stores reference types (objects, arrays, functions), and these are copied by reference. Changing the object through one variable will reflect in all other variables referencing the same object.
- **Stack memory is faster** and has fixed-size limits, while **heap memory is slower** but dynamically allocated and can grow as needed.

## Conclusion

Understanding the distinction between **stack** and **heap** memory is essential for managing JavaScript's memory efficiently. Primitive data types are simple and stored in the stack, while reference data types like objects and arrays are stored in the heap, with variables holding references to their memory locations.

Knowing when variables are copied by value or reference can help you avoid unintended side effects in your code. By mastering these concepts, you can write more efficient and bug-free JavaScript!
