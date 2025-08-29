<p align="center"><a href="https://github.com/orgsofthq/dsbuild">
<img src="/dsbuild.svg" ></a></p>
<p align="center"><strong>Run your Deno code in the browser.</strong></p>
<h4 align="center"><strong><a href="https://orgsoft.org/discord"><img src="https://github.com/mattvr/ShellGPT/assets/4052466/9ba871c8-451c-4178-9035-645142b617d9" /> Discord </a></strong></h4>

---

`dsbuild` helps you create modern websites with Deno TypeScript.

With one-command & zero configuration, `dsbuild` bundles your code into a single JavaScript file that can be run in the browser.

Use it to build React, Markdown, or other JS-powered web sites entirely using Deno with hot-reloading & a local development server. *No frameworks, bloat, or platform lock-in necessary.*

## ⬡ Features

- **Zero configuration** - Just run `dsbuild`
- **TypeScript & JSX** - Full support out of the box 
- **React & MDX** - Build modern web apps and content sites
- **CSS bundling** - Combines and minifies styles
- **Hot reload** - Instant updates with `--watch`
- **Dev server** - Built-in server with `--serve`
- **Import maps** - Support for all Deno import types (`npm:`, `jsr:`, `https://`)  
- **Instant builds** - Powered by [`esbuild`](https://esbuild.github.io/) and [`@deno/esbuild-plugin`](https://github.com/denoland/deno-esbuild-plugin)

## ⬡ Installation

1. Install the [Deno runtime](https://deno.land/manual/getting_started/installation).

2. Run the following command to install dsbuild:

```sh
deno install -frAg jsr:@orgsoft/dsbuild
```

3. Ensure `$HOME/.deno/bin` is in your `PATH` environment variable.

## ⬡ Usage

### Basic

```bash
# Builds src/app.ts into public/app.js
dsbuild

# Watch for changes and rebuild automatically
dsbuild --watch
# or
dsbuild -w

# Watch specific directories
dsbuild --watch=src/ui,src/api

# Watch and serve on localhost:8000
dsbuild --watch --serve
# or
dsbuild -ws

# Serve without building
dsbuild --serve-only

# Build a static site
dsbuild --react-static --in=src/site.tsx --out=public/index.html

# Compile MDX files into JSX
dsbuild --mdx src/MyExample.mdx

# Combine & minify CSS files
dsbuild --css --in=src/css/ --out=public/main.css
```

### Configuration

```bash
# Use a config or import map (will auto-discover)
dsbuild --config deno.jsonc
dsbuild --import-map import-map.json

# Custom input/output files
dsbuild --in src/some-file.ts --out public/another-file.js

# Target specific browsers
dsbuild --target chrome99,firefox99,safari15

# Development build (no minification)
DENO_ENV=development dsbuild

# Generate deno.json with browser/React settings
dsbuild --denoconfig
dsbuild --denoconfig --out deno.json

# Generate tsconfig.json with browser/React settings  
dsbuild --tsconfig
dsbuild --tsconfig --out tsconfig.json

# Provide a custom esbuild configuration
dsbuild --esbuild-config esbuild-config.json
```

## ⬡ Examples

### ⬢ Basic TypeScript

Build a simple web app that renders Markdown:

```typescript
// src/app.ts
import { marked } from "npm:marked@^9.1.2";

const markdown = `
# Hello World
This is **markdown** rendered with dsbuild!
`;

document.body.innerHTML = marked(markdown);
```

```bash
dsbuild --watch --serve
# Visit http://localhost:8000
```

**[View full example →](examples/basic/)**

---

### ⬢ CSS compilation

Combine multiple CSS files into a single bundle:

```css
/* src/base.css */
body {
  --color: green;
  background-color: var(--color);
}

/* src/component.css */ 
.component {
  padding: 1rem;
  border-radius: 8px;
}
```

```bash
# Concatenates CSS files alphabetically
dsbuild --css
```

**File structure:**
```
src/
  ├── base.css
  ├── component.css
  └── component.mobile.css
public/
  └── app.css  # Generated bundle
```

**[View full example →](examples/css/)**

---

### ⬢ React

Build interactive React apps with Deno:

```typescript
// src/app.tsx
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <h1>🪐 sup, universe!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.querySelector("#root")!
);
root.render(<App />);
```

```bash
dsbuild --watch --serve
# Visit http://localhost:8000
```

**[View full example →](examples/react/)**

---

### ⬢ Static site generation (SSG)

Generate static HTML with React (no client-side JavaScript):

```typescript
// src/app.tsx
import React from "npm:react@^18.3.0";

const App = () => {
  return (
    <html lang="en">
      <body style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        background: "linear-gradient(180deg, #000 0%, #1D1D1D 100%)",
        color: "#fff"
      }}>
        <h1>🪐 sup, universe!</h1>
        <p>This page was statically generated!</p>
      </body>
    </html>
  );
};

export default App;
```

```bash
dsbuild --watch --serve
# Generates static HTML in public/
```

**[View full example →](examples/react-static/)**

---

### ⬢ MDX (Markdown + JSX)

Combine Markdown content with React components:

```jsx
// src/MyExample.mdx
import Typewriter from 'npm:typewriter-effect';

# 🪐 sup universe from MDX

<Typewriter
  options={{
    strings: ['This page was rendered with **dsbuild**!'],
    autoStart: true,
    loop: true,
    delay: 33,
  }}
/>
```

```typescript
// src/app.tsx  
import React from "react";
import ReactDOM from "react-dom/client";
import MyExample from "./MyExample.jsx"; // Compiled from .mdx

const App = () => <MyExample />;

ReactDOM.createRoot(document.querySelector("#root")!)
  .render(<App />);
```

**[View full example →](examples/mdx/)**

---

### ⬢ All examples

| Example | Description | Features |
|---------|-------------|----------|
| **[Basic](examples/basic/)** | Simple TypeScript app | Markdown rendering, npm imports |
| **[CSS](examples/css/)** | CSS file combination | Multiple CSS files, concatenation |
| **[React](examples/react/)** | Interactive React app | Client-side rendering, state management |
| **[React Static](examples/react-static/)** | Static site generation | Server-side rendering, static HTML |
| **[MDX](examples/mdx/)** | Markdown + JSX | React components in Markdown |
| **[Node](examples/node/)** | Server-side example | Node.js compatibility |

## ⬡ Quick Start

Get up and running in 30 seconds:

```bash
# 1. Create a new project
mkdir my-app && cd my-app

# 2. Create src/app.ts
mkdir src
echo 'document.body.innerHTML = "<h1>🪐 Hello dsbuild!</h1>";' > src/app.ts

# 3. Build and serve
dsbuild --watch --serve
# Visit http://localhost:8000
```

Or explore the **[examples](examples/)** directory:

```bash
git clone https://github.com/orgsofthq/dsbuild.git
cd dsbuild/examples/react  # or basic, css, mdx, etc.
dsbuild --watch --serve
```

## ⬡ Contributions & local development

Contributions welcome. To set up local development:

```bash
git clone https://github.com/orgsofthq/dsbuild.git
cd dsbuild
deno task install:dev
```

This replaces your global `dsbuild` installation with a local development copy.

## ⬡ License

MIT license.
