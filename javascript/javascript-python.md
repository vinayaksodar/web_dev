## Strings

| **Python Method**          | **JavaScript Method**                                            | **Notes/Usage**                                                                                                                                                                          |
| -------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `str.upper()`              | `str.toUpperCase()`                                              | Converts the entire string to uppercase.                                                                                                                                                 |
| `str.lower()`              | `str.toLowerCase()`                                              | Converts the entire string to lowercase.                                                                                                                                                 |
| `str.strip()`              | `str.trim()`                                                     | Removes whitespace from both ends of the string.                                                                                                                                         |
| `str.lstrip()`             | `str.trimStart()` _(ES2019+)_                                    | Removes whitespace from the beginning of the string.                                                                                                                                     |
| `str.rstrip()`             | `str.trimEnd()` _(ES2019+)_                                      | Removes whitespace from the end of the string.                                                                                                                                           |
| `str.find(sub)`            | `str.indexOf(sub)`                                               | Returns the lowest index of the substring or `-1` if not found. (Both Python’s `find` and JavaScript’s `indexOf` return `-1` when the substring is absent.)                              |
| `str.rfind(sub)`           | `str.lastIndexOf(sub)`                                           | Returns the highest index of the substring or `-1` if not found.                                                                                                                         |
| `str.replace(old, new)`    | `str.replace(old, new)`                                          | Replaces occurrences of a substring. Note: In JavaScript, if `old` is a string literal, only the first occurrence is replaced. For all occurrences, use a global regex (e.g., `/old/g`). |
| `str.split(sep)`           | `str.split(sep)`                                                 | Splits the string into a list (Python) or array (JavaScript) based on the specified separator.                                                                                           |
| `delimiter.join(iterable)` | `array.join(delimiter)`                                          | Joins an iterable (Python) or array (JavaScript) of strings into a single string using the delimiter.                                                                                    |
| `str.startswith(prefix)`   | `str.startsWith(prefix)`                                         | Checks if the string starts with the given prefix.                                                                                                                                       |
| `str.endswith(suffix)`     | `str.endsWith(suffix)`                                           | Checks if the string ends with the given suffix.                                                                                                                                         |
| `str.zfill(width)`         | `str.padStart(width, '0')`                                       | Pads the string on the left with zeros until it reaches the specified width.                                                                                                             |
| `str.format(...)`          | Template literals (`` `${...}` ``) or `String.prototype.replace` | Python uses `format` to interpolate values; in JavaScript, template literals (using backticks) offer a similar functionality.                                                            |
| `len(str)`                 | `str.length`                                                     | Returns the length of the string. Python uses a built-in function (`len()`), while JavaScript uses a property.                                                                           |
| `str[start:stop]`          | `str.slice(start, end)`                                          | Extracts a substring from `start` index up to (but not including) `end`. Python’s slicing supports an optional `step` parameter and negative indices.                                    |

### Formating and combining strings

| **Operation**                         | **Python Example**  | **JavaScript Example**  | **Notes/Usage**                                                                                                                                |
| ------------------------------------- | ------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Concatenation with `+`**            | `"Hello, " + name`  | `"Hello, " + name`      | Both languages support the `+` operator to concatenate strings.                                                                                |
| **Using f-string / Template Literal** | `f"Hello, {name}!"` | `` `Hello, ${name}!` `` | Python’s f-strings (introduced in 3.6) and JavaScript’s template literals (using backticks) both allow embedded expressions for interpolation. |

## Conversions from one type to another

| **Conversion** | **Python**     | **JavaScript**                         | **Notes/Usage**                                                                                                                                                                                                                                                                                              |
| -------------- | -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **To Integer** | `int(value)`   | `parseInt(value)` or `Number(value)`   | - Python’s `int()` converts the given value to an integer (raises an error if the conversion is invalid).<br>- In JavaScript, `parseInt()` parses until it encounters a non-digit character ex-int(3.7)=3, parseInt(3.7)=3, while `Number()` converts the whole string (resulting in a float if applicable). |
| **To Float**   | `float(value)` | `parseFloat(value)` or `Number(value)` | - Python’s `float()` converts the value to a floating-point number.<br>- JavaScript’s `parseFloat()` works similarly by parsing the string, whereas `Number()` converts the entire string to a number.                                                                                                       |
| **To String**  | `str(value)`   | `String(value)` or `value.toString()`  | Converts a value to its string representation. In JavaScript, both `String(value)` and the `.toString()` method (when available) can be used.                                                                                                                                                                |
| **To Boolean** | `bool(value)`  | `Boolean(value)` or `!!value`          | Converts a value to a boolean.<br>Both Python and JavaScript treat "falsy" values similarly (e.g., `0`, `""`, `None`/`null`, `False` yield `False`).                                                                                                                                                         |

## Arrays

| **Operation**               | **Python (List)**                                                | **JavaScript (Array)**                                                                                                   | **Notes/Usage**                                                                                                                      |
| --------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Create an Array/List**    | `my_list = [1, 2, 3]`                                            | `let myArray = [1, 2, 3];`                                                                                               | Both languages use literal syntax to create arrays/lists.                                                                            |
| **Access Element**          | `my_list[index]`                                                 | `myArray[index]`                                                                                                         | Both use zero-based indexing.                                                                                                        |
| **Length**                  | `len(my_list)`                                                   | `myArray.length`                                                                                                         | Python uses the built-in `len()` function, while JavaScript uses the `.length` property.                                             |
| **Append Element**          | `my_list.append(element)`                                        | `myArray.push(element)`                                                                                                  | Adds an element to the end.                                                                                                          |
| **Prepend Element**         | `my_list.insert(0, element)`                                     | `myArray.unshift(element)`                                                                                               | Inserts an element at the beginning.                                                                                                 |
| **Remove Last Element**     | `my_list.pop()`                                                  | `myArray.pop()`                                                                                                          | Removes and returns the last element.                                                                                                |
| **Remove First Element**    | `my_list.pop(0)`                                                 | `myArray.shift()`                                                                                                        | Removes and returns the first element.                                                                                               |
| **Concatenate Arrays**      | `combined = my_list + another_list`                              | `let combined = myArray.concat(anotherArray)` <br> or <br> `[...myArray, ...anotherArray]`                               | Combines two arrays/lists, producing a new one.                                                                                      |
| **Slice Array**             | `sub_list = my_list[start:stop]`                                 | `subArray = myArray.slice(start, end)`                                                                                   | Python supports an optional step parameter (e.g., `my_list[start:stop:step]`) which JavaScript’s `slice` does not.                   |
| **Find Element Index**      | `my_list.index(element)`                                         | `myArray.indexOf(element)`                                                                                               | Python raises a `ValueError` if the element is not found; JavaScript returns `-1`.                                                   |
| **Remove Element by Value** | `my_list.remove(element)`                                        | `// Find index then remove:` <br> `let idx = myArray.indexOf(element);` <br> `if (idx > -1) { myArray.splice(idx, 1); }` | Python provides a direct method; JavaScript requires a combination of methods.                                                       |
| **Sort Array**              | `my_list.sort()` <br> or <br> `sorted(my_list)`                  | `myArray.sort()`                                                                                                         | Note: JavaScript sorts elements as strings by default (lexicographically) unless a comparator function is provided.                  |
| **Reverse Array**           | `my_list.reverse()` <br> or <br> `list(reversed(my_list))`       | `myArray.reverse()`                                                                                                      | Both reverse the array in place (with Python’s `reversed()` returning an iterator).                                                  |
| **Copy Array**              | `new_list = my_list.copy()` <br> or <br> `new_list = my_list[:]` | `let newArray = myArray.slice()` <br> or <br> `[...myArray]`                                                             | Creates a shallow copy of the array/list.(new list is created but inside objects are passed by reference see deepcopy to avoid this) |

### Map and iteration

| Feature              | JavaScript `map()`                            | JavaScript `forEach()`                                   | Python `map()`                                                                                                                                             | Python `for` loop                                                                                                                                         |
| -------------------- | --------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Return Value**     | **New array** with transformed elements       | **`undefined`**                                          | **Map object (iterator)** (needs `list()` for list)                                                                                                        | **`None`** (implicitly returns None)                                                                                                                      |
| **Primary Purpose**  | **Transformation** - create a new array       | **Iteration with Side Effects** - perform actions        | **Transformation** - create a new iterable (map object)                                                                                                    | **Iteration with Side Effects** - perform actions                                                                                                         |
| **Use Cases**        | Transforming data, creating new arrays        | Logging, updating variables, API calls, DOM manipulation | Transforming data (often converted to list), lazy evaluation                                                                                               | Logging, updating variables, API calls, general iteration                                                                                                 |
| **"Chainability"**   | **Yes** - chainable with array methods        | **No** - not directly chainable with array methods       | **Yes** - but chaining on iterators is less common in typical Python style, often converted to lists for further operations or combined in comprehensions. | **N/A** - `for` loop itself is a control flow structure, not designed for chaining in the same way as array methods. Can be followed by other operations. |
| **Functional Style** | **More Functional** (emphasizes immutability) | **Less Functional** (often used for side effects)        | **Functional** (but often used in conjunction with list conversion for typical list operations)                                                            | **Procedural** (commonly used for imperative style iteration)                                                                                             |

## Anonymous inline functions

| **Concept**                         | **Python**                                            | **JavaScript**                                                                              | **Notes/Usage**                                                                                                                                                              |
| ----------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Anonymous Function Syntax**       | `lambda x: x + 1`                                     | Arrow Function: `(x) => x + 1` <br> or Function Expression: `function(x) { return x + 1; }` | Python lambdas can only contain a single expression i.e one line of code, whereas JavaScript offers both concise arrow functions and traditional function expressions.       |
| **Immediate Invocation**            | `(lambda x: x + 1)(5)`                                | Arrow IIFE: `(x => x + 1)(5)` <br> or IIFE: `(function(x) { return x + 1; })(5)`            | Both languages allow immediate invocation of anonymous functions.                                                                                                            |
| **Usage in Higher-Order Functions** | `map(lambda x: x * 2, [1, 2, 3])`                     | `[1, 2, 3].map(x => x * 2)`                                                                 | Anonymous functions are commonly used as arguments to functions like `map()`, `filter()`, etc.                                                                               |
| **Multi-line Functions**            | _Not supported in lambdas; use a named `def` instead_ | Arrow Function with Block: `(x) => { const y = x * 2; return y + 1; }`                      | Python lambdas are restricted to a single expression. In JavaScript, arrow functions with curly braces allow multiple statements and require an explicit `return` if needed. |

## Json handling

| **Operation**             | **Python**                | **JavaScript**            | **Notes/Usage**                                                                            |
| ------------------------- | ------------------------- | ------------------------- | ------------------------------------------------------------------------------------------ |
| **Object to JSON String** | `json.dumps(obj)`         | `JSON.stringify(obj)`     | Converts a Python object (e.g., `dict`, `list`) or a JavaScript object into a JSON string. |
| **JSON String to Object** | `json.loads(json_string)` | `JSON.parse(json_string)` | Parses a JSON string and returns a Python object or a JavaScript object.                   |

## Class definition and manipulation

<table>
<tr>
<th>Python</th>
<th>JavaScript</th>
</tr>
<tr>
<td>

```python
class Person:
    # Class variable
    species = "Homo sapiens"

    def __init__(self, name, age):
        # Instance variables
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name}.")

    @staticmethod
    def is_adult(age):
        return age >= 18

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)  # Call parent constructor
        self.student_id = student_id

p = Person("Alice", 30)
p.greet()  # Output: Hello, my name is Alice.

print(Person.is_adult(20))  # Output: True
```

</td>
<td>

```javascript
class Person {
  // Class variable (using static field)
  static species = "Homo sapiens";

  constructor(name, age) {
    // Instance variables
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  static isAdult(age) {
    return age >= 18;
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call parent constructor
    this.studentId = studentId;
  }
}

const p = new Person("Alice", 30);
p.greet(); // Output: Hello, my name is Alice.

console.log(Person.isAdult(20)); // Output: true
```

</td>
</tr>
</table>

Below are two examples that highlight the difference between JavaScript and Python when it comes to unawaited asynchronous operations:

---

### JavaScript Example

```js
function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Timer finished in JavaScript");
      resolve();
    }, n * 1000);
  });
}

function main() {
  wait(10); // Not awaited
  console.log("Main function completed in JavaScript");
}

main();
```

**What Happens in JavaScript:**

- The call to `wait(10)` returns a promise immediately.
- The `setTimeout` schedules its callback to run after 10 seconds.
- `main()` logs `"Main function completed in JavaScript"` and returns.
- **Crucially,** the Node.js (or browser) event loop remains active because of the pending timer. Even though nothing awaited the promise, after 10 seconds the timer callback fires and logs `"Timer finished in JavaScript"`.

---

### Python Example

```python
import asyncio

async def wait(n):
    await asyncio.sleep(n)
    print("Timer finished in Python")

async def main():
    # Schedule the wait coroutine without awaiting it
    asyncio.create_task(wait(10))
    print("Main function completed in Python")
    # main() returns immediately after printing

asyncio.run(main())
```

**What Happens in Python:**

- Inside `main()`, `asyncio.create_task(wait(10))` schedules the coroutine to run in the background.
- `main()` logs `"Main function completed in Python"` and then completes.
- When `asyncio.run(main())` finishes running the `main()` coroutine, it shuts down the event loop.
- Since the event loop stops, the scheduled `wait(10)` coroutine is **cancelled** before it has a chance to complete. As a result, `"Timer finished in Python"` is never printed.

---

### Summary

- **JavaScript:** The event loop continues running as long as there are pending operations (like the timer in `setTimeout`), so even if you don't await the promise, the asynchronous operation will eventually complete.
- **Python:** If you don't keep the event loop running (for example, by awaiting pending tasks), then the program can exit, and scheduled coroutines that weren't awaited may be cancelled.

This demonstrates how the JavaScript runtime keeps the event loop active due to pending asynchronous operations, while Python's `asyncio.run()` will exit once the main coroutine is complete, potentially leaving unawaited tasks unfinished.
