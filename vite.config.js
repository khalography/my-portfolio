import { resolve } from "node:path";
import { defineConfig } from "vite";

const pages = [
  "index.html",
  "work/index.html",
  "about/index.html",
  "contact/index.html",
  "work/fst-engineering/index.html",
  "work/circuit-breakers/index.html",
  "work/valuegain/index.html",
  "work/onchain-mutineers/index.html",
];

export default defineConfig({
  build: {
    target: "es2020",
    rolldownOptions: {
      input: pages.map((page) => resolve(import.meta.dirname, page)),
    },
  },
});
