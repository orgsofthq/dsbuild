import * as esbuild from "npm:esbuild@^0.23.0"
import { compile as compileMdx_ } from "npm:@mdx-js/mdx@3.0.0"
import { renderToStaticMarkup } from "npm:react-dom@^18.3.0/server"
import remarkGfm from 'npm:remark-gfm@^4'
import { denoPlugin } from "jsr:@deno/esbuild-plugin@^1";
import React from "npm:react@^18.3.0";
import {parseArgs} from "jsr:@std/cli@^0.224.7/parse-args";
import { isAbsolute, join, resolve, normalize, dirname, extname, parse } from 'jsr:@std/path@^0.225.2'
import { ensureDir } from 'jsr:@std/fs@^1'
import init, { transform } from "npm:lightningcss-wasm@^1.29.1";
import { parse as parseJsonc } from "jsr:@std/jsonc@^1";
import { contentType } from "jsr:@std/media-types@^1";

const compileMdx = async (text: string) => {
  return compileMdx_(text, {
    remarkPlugins: [remarkGfm],
  })
}

export {
  // esbuild
  esbuild,

  // mdx-js
  compileMdx,

  // @deno/esbuild-plugin
  denoPlugin,

  // deno std
  parseArgs,
  parseJsonc,
  contentType,
  // React
  React,
  renderToStaticMarkup,

  // files
  isAbsolute,
  join,
  resolve,
  normalize,
  dirname,
  extname,
  parse,
  ensureDir,

  // css
  init as initCss,
  transform as transformCss,
}