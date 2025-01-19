# Javascript cheat sheet


Don't use inline eventhandlers like 
```javascript
<button onclick="createParagraph()">Click me!</button>
```

you will have to do the above for every button used addEventListner Instead

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
