# Javascript cheat sheet

Don't use inline eventhandlers like

```javascript
<button onclick="createParagraph()">Click me!</button>
```

you will have to do the above for every button used addEventListner Instead

use document.querySelector() over others like document.selectElementById etc it is the more modern approach

the inline styles can be directly modified in the dom using the style property of an element selected using document.querySelector() for modifying or you can modify the stylesheets(you can also change the class of the element)

Which method you choose is up to you; both have their advantages and disadvantages. The first method takes less setup and is good for simple uses, whereas the second method is more purist (no mixing CSS and JavaScript, no inline styles, which are seen as a bad practice). As you start building larger and more involved apps, you will probably start using the second method more, but it is really up to you.

3. Why is document.styleSheets Accessible Through the DOM?
   Although the CSSOM is separate from the DOM, the DOM provides an interface to access and manipulate the CSSOM via document.styleSheets. This is because:

The DOM represents the entire document, including metadata like stylesheets.
document.styleSheets is a convenient way for JavaScript to interact with CSS while maintaining the separation of structure (HTML) and style (CSS).

4. Relationship Between DOM and CSSOM
   DOM: Represents the structure and content of the document (HTML).
   CSSOM: Represents the styles and rules (CSS).
   Render Tree: Combines the DOM and CSSOM to create a visual representation of the webpage.

The document object serves as a bridge, providing APIs to interact with both the DOM and the CSSOM.

### Nework requests in javascript

In the early days, the technique to fetch data to update part of a webpage without refresing the entire thing was known as Asynchronous JavaScript and XML (AJAX), because it tended to request XML data. This is normally not the case these days (you'd be more likely to request JSON), but the result is still the same, and the term "AJAX" is still often used to describe the technique.

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

Target refers to the element on which the event was initially fired, while currentTarget refers to the element to which this event handler has been attached
