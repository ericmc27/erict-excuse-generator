/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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

  function generate(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let result =
    generate(who) +
    " " +
    generate(action) +
    " " +
    generate(what) +
    " " +
    generate(when);

  document.getElementById("target").innerHTML = result;
};
