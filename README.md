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

**React:**

```js
import { createElement, useState } from "https://cdn.skypack.dev/react";
import { render } from "https://cdn.skypack.dev/react-dom";
import htmdown from "https://cdn.skypack.dev/htmdown";
import htm from "https://cdn.skypack.dev/htm";

const md = htmdown.bind(createElement);
const html = htm.bind(createElement);

function Counter() {
  const [count, setCount] = useState(0);
  return html`<button onClick=${() => setCount(count + 1)}>${count}</button>`;
}

render(
  md`
    # h1

    ## h2

    _hello_ **world**

    ${html`<${Counter} />`}

    ^ that was a React component!
`,
  document.body
);
```

**Preact:**

```js
import { h, render } from "https://cdn.skypack.dev/preact";
import { useState } from "https://cdn.skypack.dev/preact/hooks";
import htmdown from "https://cdn.skypack.dev/htmdown";
import htm from "https://cdn.skypack.dev/htm";

const md = htmdown.bind(h);
const html = htm.bind(h);

function Counter() {
  const [count, setCount] = useState(0);
  return html`<button onClick=${() => setCount(count + 1)}>${count}</button>`;
}

render(
  md`
    # h1

    ## h2

    _hello_ **world**

    ${html`<${Counter} />`}

    ^ that was a Preact component!
`,
  document.body
);
```
