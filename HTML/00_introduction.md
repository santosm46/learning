
# HTML (HyperText Markup Language)
Describes the structure of a web page.

## Basic elements

### Header

<h1> Level one Header </h1>
<h2> Level two Header </h2>
...
<h6> Level six Header </h6>

### Paragraph

<p>This is a paragraph!</p>

### Comments

```html
<!-- This is a comment -->
```

### Tag main (html5)

<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>

### Images (img tag)

- src: source of image
- alt: decription and acessibility

Example:
```html
<img src="https://bit.ly/fcc-relaxing-cat" alt="Relaxing cat">
```

### a (anchor)
Link content outside of this web page. Link to jump to different sections of the page. It can link text or elements

- href: destination
- target="_blank": opens a new tab
- href="#": dead link

```html
<a href="link-destination.com">Some text</a>
```

id for elements and link for them with 'a' and adding # on front
```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

Images as links:
```html
<a href="#">
  <img src="link-to-image" alt="">
</a>
```

### Lists (dots)

#### Unordered
Example:
<h3>To-do list</h3>
<ul>
    <li>Finish homework</li>
    <li>Laundry</li>
    <li>Do the dishes</li>
</ul>

#### Ordered
Example:
<h3>Cat names</h3>
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>

### input

- placeholder: text shown before the user didn't type anything
- required: user can't submit with empty field

```html
<input type="text" placeholder="this is placeholder text">
```

Submit input data to a URL
```html
<form action="/url-where-you-want-to-submit-form-data">
    <input type="text" required placeholder="write here">
    <button type="submit">Button text</button>
</form>
```



