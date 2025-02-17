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
      getFullName() {}
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

Target refers to the element on which the event was initially fired, while currentTarget refers to the element to which this event handler has been attached.

