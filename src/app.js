/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function generateExcuse() {
    let quien = Math.floor(Math.random() * who.length);
    let accion = Math.floor(Math.random() * action.length);
    let que = Math.floor(Math.random() * what.length);
    let cuando = Math.floor(Math.random() * when.length);

    let excusaGenerada = `${who[quien]} ${action[accion]} ${what[que]} ${when[cuando]}`;
    document.getElementById("excuse").innerHTML = excusaGenerada;
  }
  document.getElementById("generate").addEventListener("click", generateExcuse);
};
