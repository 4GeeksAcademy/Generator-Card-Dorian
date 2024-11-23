/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = function() {
  let cardGenerator = document.querySelector("#PlayGame");
  cardGenerator.addEventListener("click", randomCard);
  const SymbolList = ["♠️", "❤️", "♦️", "♣️", "🗡", "🥳"];
  const ValueList = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function randomCard() {
    let getRandomSymbol =
      SymbolList[Math.floor(Math.random() * SymbolList.length)];
    let getRandomValue =
      ValueList[Math.floor(Math.random() * ValueList.length)];

    document.querySelector("#symbol1").innerHTML = getRandomSymbol;
    document.querySelector("#value1").innerHTML = getRandomValue;
    document.querySelector("#value2").innerHTML = getRandomValue;
    document.querySelector("#symbol2").innerHTML = getRandomSymbol;
    document.querySelector("#symbol3").innerHTML = getRandomSymbol;
  }
  randomCard();
};
