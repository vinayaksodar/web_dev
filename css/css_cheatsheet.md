### **CSS Selectors Cheatsheet**

#### **1. Universal Selector**
- Selects all elements.
  ```css
  * {
    margin: 0;
  }
  ```

---

#### **2. Type Selector**
- Selects elements by tag name.
  ```css
  p {
    color: blue;
  }
  ```

---

#### **3. Class Selector**
- Selects elements by class.
  ```css
  .my-class {
    font-size: 16px;
  }
  ```

---

#### **4. ID Selector**
- Selects an element by its ID.
  ```css
  #my-id {
    background-color: yellow;
  }
  ```

---

#### **5. Grouping Selector**
- Applies the same style to multiple selectors.
  ```css
  h1, h2, h3 {
    font-weight: bold;
  }
  ```

---

#### **6. Descendant Selector**
- Selects elements within a specific parent.
  ```css
  div p {
    color: red;
  }
  ```

---

#### **7. Child Selector**
- Selects direct children only.
  ```css
  ul > li {
    list-style: none;
  }
  ```

---

#### **8. Adjacent Sibling Selector**
- Selects the next sibling.
  ```css
  h1 + p {
    margin-top: 10px;
  }
  ```

---

#### **9. General Sibling Selector**
- Selects all siblings.
  ```css
  h1 ~ p {
    color: gray;
  }
  ```

---

#### **10. Attribute Selectors**
- `[attr]`: Elements with the attribute.
  ```css
  [title] {
    cursor: help;
  }
  ```

- `[attr="value"]`: Exact match.
  ```css
  [type="text"] {
    border: 1px solid;
  }
  ```

- `[attr^="value"]`: Starts with.
  ```css
  [href^="https"] {
    color: green;
  }
  ```

- `[attr$="value"]`: Ends with.
  ```css
  [src$=".jpg"] {
    border-radius: 5px;
  }
  ```

- `[attr*="value"]`: Contains.
  ```css
  [class*="btn"] {
    padding: 10px;
  }
  ```

---

#### **11. Pseudo-classes**
- `:hover`: Mouse hover state.
  ```css
  a:hover {
    text-decoration: underline;
  }
  ```

- `:nth-child(n)`: Selects nth child.
  ```css
  li:nth-child(2) {
    color: blue;
  }
  ```

- `:first-child` / `:last-child`:
  ```css
  p:first-child {
    font-weight: bold;
  }
  ```

---

#### **12. Pseudo-elements**
- `::before` / `::after`: Inserts content.
  ```css
  h1::before {
    content: ">> ";
  }
  ```

- `::selection`: Styles text selection.
  ```css
  ::selection {
    background: yellow;
  }
  ```

---

#### **13. Combinators**
- Descendant: `A B`
- Child: `A > B`
- Adjacent Sibling: `A + B`
- General Sibling: `A ~ B`

---

#### **14. Specificity**
1. Inline styles: `style=""` (highest priority)
2. ID selectors: `#id`
3. Classes, attributes, pseudo-classes: `.class`, `[attr]`, `:hover`
4. Element types, pseudo-elements: `p`, `::before` (lowest priority)

---
