import { marked } from "npm:marked@^6.0.0";

window.onload = () => {
  const str = `# 🪐 sup, universe!

This page is rendered with **marked** and compiled using \`dsbuild\`.
`

  document.body.innerHTML = marked(str);
}