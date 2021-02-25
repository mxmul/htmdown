# htmdown

[![npm version](https://badgen.net/npm/v/htmdown)](https://npm.im/htmdown)

`htmdown` is MDX-like syntax in plain JavaScript, without a transpiler.

It's built on top of [htm](https://github.com/developit/htm) and uses [Tagged Template](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates) literals.

## Installation

**via npm:**

```js
npm i htmdown
```

**via Skypack:**

```js
import htmdown from "https://cdn.skypack.dev/htmdown";

const md = htmdown.bind(React.createElement);
```

## Usage

- [React + JSX](https://codepen.io/mxmul/pen/JjbMMZe?editors=0010)
- [React + htm](https://codepen.io/mxmul/pen/PobEEeq?editors=0010)
- [Preact + htm](https://codepen.io/mxmul/pen/LYbeemq?editors=0010)
