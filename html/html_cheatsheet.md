# HTML Cheat Sheet

## HTML Document Structure

A basic HTML document is structured as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A short description of the page">
    <title>Document Title</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to external stylesheet -->
</head>
<body>
    <header>
        <!-- Header content like logo, navigation, etc. -->
    </header>

    <main>
        <!-- Main content of the page -->
    </main>

    <footer>
        <!-- Footer content -->
    </footer>

    <script src="script.js"></script> <!-- Link to external JavaScript -->
</body>
</html>
```

## HTML Tags

### Document Tags

- **`<!DOCTYPE html>`**: Declares the document type as HTML5.
- **`<html>`**: Root element of the HTML document.
- **`<head>`**: Contains meta-information about the document (e.g., title, links to stylesheets).
- **`<body>`**: Contains the visible content of the webpage.

### Head Tags

The `<head>` element contains metadata, links to external resources, and other information about the HTML document that isn't displayed directly on the page.

- **`<title>`**: Sets the title of the webpage that appears in the browser tab.
- **`<meta>`**: Specifies metadata about the HTML document. Many `<meta>` elements include `name` and `content` attributes; `name` specifies the type of meta element and `content` specifies the actual metadata content.
  - **`<meta charset="UTF-8">`**: Specifies the character encoding (UTF-8 is common).
  - **`<meta name="viewport" content="width=device-width, initial-scale=1">`**: Makes the page responsive on different screen sizes (mobile-friendly).
  - **`<meta name="description" content="...">`**: Provides a description for search engines.
  - **`<meta name="keywords" content="...">`**: Provides a list of keywords for SEO.
  - **`<meta http-equiv="X-UA-Compatible" content="IE=edge">`**: Ensures compatibility with modern browsers.
  - **`<meta name="author" content="...">`**: Specifies the author of the document.
  - **`<meta name="robots" content="index, follow">`**: Tells search engine robots what to do with the page.
  - **`<meta property="og:title" content="...">`**: Defines the title for social media sharing (Open Graph protocol).
  - **`<meta property="og:description" content="...">`**: Defines the description for social media sharing (Open Graph protocol).
  - **`<meta property="og:image" content="...">`**: Defines the image to display for social media sharing (Open Graph protocol).
- **`<link>`**: Defines a relationship between the current document and an external resource (e.g., stylesheets, favicons).
  - **`rel="stylesheet"`**: Links to a CSS file.
  - **`rel="icon"`**: Links to a favicon.
  - **`rel="canonical"`**: Specifies the preferred URL for the page.
  - **`rel="manifest"`**: Links to a manifest file for Progressive Web Apps (PWAs).
  - **`rel="preload"`**: Preloads certain resources like fonts or images to speed up rendering.
- **`<script>`**: Links to or embeds a JavaScript file.
  - **`<script src="...">`**: External JavaScript file.
  - **`<script defer>`**: Defers loading of the script until the HTML is fully parsed.


### Body Tags

- **`<header>`**: Defines the header section of the page, usually containing navigation and branding.
- **`<nav>`**: Defines navigation links.
- **`<main>`**: Specifies the main content area of the document.
- **`<section>`**: Defines a section of content (often used for grouping related content).
- **`<article>`**: Represents independent, self-contained content (like a blog post).
- **`<aside>`**: Defines content that is tangentially related to the content around it (e.g., sidebars).
- **`<footer>`**: Contains footer information (e.g., copyright notice, contact info).
- **`<div>`**: Generic container for content (used for layout).
- **`<span>`**: Inline container for text or content.

> [!NOTE]
> Semantic tags like `<article>`, `<section>` etc should be used instead of `<div>` whenever applicable

### Text Formatting Tags

- **`<h1>`, `<h2>`, `<h3>`, ... `<h6>`**: Headings for defining sections (h1 is the highest level).
- **`<p>`**: Defines a paragraph of text.
- **`<a href="url">`**: Creates a hyperlink.
- **`<strong>`**: Defines important text (usually bold).
- **`<em>`**: Defines emphasized text (usually italicized).
- **`<b>`**: Bold text (purely for styling, not for emphasis).
- **`<i>`**: Italicized text (purely for styling, not for emphasis).
- **`<br>`**: Line break (inserts a new line).
- **`<hr>`**: Horizontal rule (a divider line).
- **`<ul>`**: Unordered list (bulleted list).
- **`<ol>`**: Ordered list (numbered list).
- **`<li>`**: List item.

<!-- the below will display correctly in github but not in vscode as the [!NOTE] is not part of standard markdown -->

> [!NOTE]
>It's only appropriate to use `<b>`, `<i>`, or `<u>` to convey a meaning traditionally conveyed with bold, italics, or underline when there isn't a more suitable element as they are presentational elemets not sematic; and there usually is. Consider whether `<strong>`, `<em>`, `<mark>`, or `<span>` might be more appropriate.


### Form Elements

- **`<form>`**: Defines an HTML form.
  - `action="URL"`: Specifies where to send form data.
  - `method="GET|POST"`: Specifies how form data is sent.
- **`<input>`**: Defines an input field.
  - `type="text|password|email|checkbox|radio|submit|..."`
- **`<textarea>`**: Defines a multi-line text input.
- **`<button>`**: Defines a clickable button.
- **`<select>`**: Defines a drop-down list.
- **`<option>`**: Defines an option within a `<select>` list.
- **`<label>`**: Defines a label for an `<input>` element.

### Media Elements

- **`<img src="url" alt="description" />`**: Embeds an image.
  - `alt`: Describes the image (important for accessibility).
- **`<audio src="audio.mp3" controls>`**: Embeds an audio file.
- **`<video src="video.mp4" controls>`**: Embeds a video file.
- **`<source>`**: Defines multiple media sources for `<audio>` and `<video>`.
- **`<iframe src="url" width="width" height="height">`**: Embeds an external resource like another webpage.

### Table Tags

- **`<table>`**: Defines a table.
- **`<tr>`**: Defines a table row.
- **`<td>`**: Defines a table cell.
- **`<th>`**: Defines a table header cell.
- **`<thead>`**: Groups the header content of a table.
- **`<tbody>`**: Groups the body content of a table.
- **`<tfoot>`**: Groups the footer content of a table.

Here is an example of a small table using `rowspan` and `colspan`:

```html
<table border="1">
  <thead>
    <tr>
      <th>Category</th>
      <th>Sub-category</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Fruits</td>
      <td>Apple</td>
      <td>Red or Green</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>Yellow</td>
    </tr>
    <tr>
      <td colspan="2">Vegetables</td>
      <td>Various types</td>
    </tr>
  </tbody>
</table>
```

### Rendered Version:
<table border="1">
  <thead>
    <tr>
      <th>Category</th>
      <th>Sub-category</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Fruits</td>
      <td>Apple</td>
      <td>Red or Green</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>Yellow</td>
    </tr>
    <tr>
      <td colspan="2">Vegetables</td>
      <td>Various types</td>
    </tr>
  </tbody>
</table>


This table demonstrates:
- **`rowspan="2"`**: The "Fruits" cell spans two rows.
- **`colspan="2"`**: The "Vegetables" cell spans two columns.

### Semantic HTML Tags

- **`<article>`**: Represents a self-contained piece of content.
- **`<section>`**: Groups related content.
- **`<nav>`**: Defines navigation links.
- **`<header>`**: Represents the introductory content.
- **`<footer>`**: Defines footer content.

---

## Commonly Used HTML Attributes

- **`class`**: Specifies one or more class names for an element (used for CSS styling and JavaScript).
- **`id`**: Specifies a unique identifier for an element.
- **`href`**: Specifies the URL for a link (used in `<a>` tags).
- **`src`**: Specifies the source of an image or media file (used in `<img>`, `<audio>`, and `<video>`).
- **`alt`**: Specifies alternative text for an image (used in `<img>`).
- **`style`**: Specifies inline CSS styles for an element.
- **`title`**: Specifies additional information about an element, displayed as a tooltip when hovered.
- **`target="_blank"`**: Opens a link in a new tab or window.
- **`value`**: Specifies the value of a form input (used in `<input>`, `<button>`, etc.).
- **`placeholder`**: Specifies placeholder text inside an input field.

---

## Commonly Used JavaScript Events

- **`onclick`**: Executes a JavaScript function when an element is clicked.
- **`onmouseover`**: Executes a function when the mouse pointer moves over an element.
- **`onfocus`**: Executes a function when an element gains focus (e.g., a form input).
- **`onchange`**: Executes a function when the value of an element changes.
- **`onsubmit`**: Executes a function when a form is submitted.

---

## Example: A Complete HTML Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Webpage</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Webpage</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the home section of the page.</p>
        </section>

        <section id="about">
            <h2>About Section</h2>
            <p>This is the about section of the page.</p>
        </section>

        <section id="contact">
            <h2>Contact Section</h2>
            <p>This is the contact section of the page.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 My Webpage</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

---

## Additional Resources

- [MDN Web Docs

: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools: HTML](https://www.w3schools.com/html/)

---

This cheat sheet provides a quick overview of the essential HTML tags and their attributes, helping you to structure, style, and interact with your web pages effectively.
