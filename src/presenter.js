import { generateFizzBuzzString } from "./fizzbuzz.js";

const form = document.querySelector("#fizzbuzz-form");
const input = document.querySelector("#numero");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const n = Number.parseInt(input.value, 10);
  div.innerHTML = `<p>${generateFizzBuzzString(n)}</p>`;
});
