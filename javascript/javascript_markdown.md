# Javascript cheat sheet

Don't use inline eventhandlers like

```javascript
<button onclick="createParagraph()">Click me!</button>
```

you will have to do the above for every button used addEventListner Instead

Const is equivalent to final in dart

### Const in Loops

In JavaScript, using `const` within a loop, particularly in a `for...of` loop, is possible and behaves in a specific way. Each iteration of a `for...of` loop creates a new scope, meaning a new `const` variable is created for each iteration. This means that the `const` variable is not redefined but rather a new one is created for each loop iteration, which is why it does not violate the immutability rule of `const`.

For example:

```javascript
const iterable = [10, 20, 30];
for (const value of iterable) {
  console.log(value);
}
// Output: 10, 20, 30
```

In this example, `value` is a `const` variable that gets a new value for each iteration, but it is not redefined within the loop.

However, using `const` in a traditional `for` loop with an increment (`i++`) is problematic because `const` variables cannot be reassigned. For instance, the following code will throw an error:

```javascript
for (const i = 0; i < 10; i++) {
  // Error: Cannot assign to const 'i'
}
```

### Strings

In JavaScript, **negative indices** (like `[-1]`) **do not** work with strings in the same way they do in Python. While Python allows you to access elements from the end of a string (e.g., `str[-1]` gives the last character), JavaScript **does not** support negative indexing directly.

### Example in Python:

```python
text = "hello"
print(text[-1])  # Output: "o"
```

In Python, `[-1]` gives you the **last character** of the string.

### In JavaScript:

If you try something like `text[-1]`, it won't give you the last character of the string. Instead, JavaScript will interpret the `-1` as a property key, and it will return `undefined` since strings in JavaScript are indexed by **non-negative integers** (starting from `0`).

```javascript
let text = "hello";
console.log(text[-1]); // undefined
```

### How to Access the Last Character of a String in JavaScript:

To access the last character of a string in JavaScript, you can use the `length` property and subtract 1:

```javascript
let text = "hello";
console.log(text[text.length - 1]); // "o"
```

- **Negative indices do not work directly on strings** in JavaScript like they do in Python.
- To access the **last character** of a string in JavaScript, you should use `text[text.length - 1]`.

SSGs - generate static sites for example a blog post website, you create a project and you just write your posts in say markdown in the directory meant for posts, the ssg then generates all the required html css annd javascript, they don't have a graphical gui

CMS - content management systems can generate both dynamic and static sites using a GUI they are different from a website builder in the sense that they give you slightly more control i.e you can edit the code of the header, styles, database schema etc.

Examples:

- SSG: You create a blog using Jekyll. You write posts in Markdown in a posts directory, run jekyll build, and it generates static HTML files that you can host anywhere.
- CMS: You create a blog using WordPress. You log into the admin panel, create posts using a rich text editor, and WordPress automatically generates HTML pages based on the content, handling routing, comments, and even user management.

### JavaScript Naming Conventions

#### 1. **Variables and Functions**

- Use **camelCase** for variable and function names.
  ```javascript
  let userName = "John";
  function calculateTotal() {}
  ```

#### 2. **Constants**

- Use **UPPER_SNAKE_CASE** for constant values.
  ```javascript
  const MAX_USERS = 100;
  ```

#### 3. **Classes and Constructors**

- Use **PascalCase** for class names and constructor functions.
  ```javascript
  class UserProfile {}
  function UserAccount() {}
  ```

#### 4. **Objects**

- Use **camelCase** for object keys and methods.
  ```javascript
  const user = {
    firstName: "Jane",
    lastName: "Doe",
    getFullName() {},
  };
  ```

#### 5. **Modules**

- Use **kebab-case** for filenames in modular systems.
  ```plaintext
  user-profile.js
  calculate-total.js
  ```

#### 6. **Private Variables (ES6+)**

- Prefix private class fields with `#`.
  ```javascript
  class User {
    #password;
    constructor(password) {
      this.#password = password;
    }
  }
  ```

#### 7. **Event Handlers**

- Prefix with `on` to indicate event listeners.
  ```javascript
  function onClick() {}
  ```

#### 8. **Booleans**

- Prefix with `is`, `has`, or `can` to indicate boolean values.
  ```javascript
  let isActive = true;
  let hasPermission = false;
  ```

---

### General Guidelines

- Be **descriptive**: Names should clearly indicate purpose.
- Avoid abbreviations unless universally understood (`btn`, `id`).
- Stick to **consistent casing** throughout your codebase.

### Events in Javascript

The event model in node.js is different from the event model used in browsers.

- Browsers follow the observer pattern. The subject notifies the observers
- Node.js uses the pub sub model where the emitter emits events to a channel and the listners consume the events they are interested in.

the event bubbles up from the innermost element that was clicked. To fix problems with this the Event object has a function available on it called stopPropagation() which, when called inside an event handler, prevents the event from bubbling up to any other elements.
