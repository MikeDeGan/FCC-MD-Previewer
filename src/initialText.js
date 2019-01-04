const initialText = `# Markdown Previewer Built With React

## Type Markdown on the left and the HTML will be displayed on the right
### Follow Github Flavored Markdown (GFM)

---
## Code blocks and inline code:
  
Provide a language and code blocks will be colorized thanks to [Highlightjs](https://highlightjs.org/).

\`\`\` javascript
renderer.code = (code, language) => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && highlightjs.getLanguage(language));
  // Highlight only if the language is valid.
  const highlighted = validLang
    ? highlightjs.highlight(language, code).value
    : code;
  // Render the highlighted code with \`hljs\` class.
  return \`<pre><code class="hljs \${language}">\${highlighted}</code></pre>\`;
};

\`\`\`

You can also use \`inline code\` if needed.

## Font decoration as well:

**Bold** _italic_ or **_both_**

## Block Quotes:

> This is a Block Quote

## GFM Tables:

|Col1 Header | Col2 Header | Col3 Header |
|:------------|:----------:|-----------:| 
|Left justified content | Centered content | Right justified content |

## Numbered and Bulleted LIsts:

1. Item one
1. Item 2
3. Item three

- Just a list item.
- Just another list item
  - Indented list item

## Links:

[Free Code Camp](https://www.freecodecamp.org/)
[Link within this document - Back to top](#markdown-previewer-built-with-react)

## Images:

![Random picture](https://source.unsplash.com/random/200x200)
![Random picture](https://source.unsplash.com/random/400x200)
![Random picture](https://source.unsplash.com/random/600x200)

`;

export default initialText;
