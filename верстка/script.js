// Смена валют
let BYN = document.getElementById("BYN");
let BYNAdaptive = document.getElementById("BYNAdaptive");
let RUB = document.getElementById("RUB");
let RUBAdaptive = document.getElementById("RUBAdaptive");
let USD = document.getElementById("USD");
let USDAdaptive = document.getElementById("USDAdaptive");
let EUR = document.getElementById("EUR");
let EURAdaptive = document.getElementById("EURAdaptive");
let currency = document.getElementById("currency");
let currencyAdaptive = document.getElementById("currencyAdaptive");

let kettle = document.getElementById("kettle");
let laptop = document.getElementById("laptop");
let fridge = document.getElementById("fridge");
let collar = document.getElementById("collar");
let mouse = document.getElementById("mouse");
let headphones = document.getElementById("headphones");
let column = document.getElementById("column");
let toy = document.getElementById("toy");
let kitiket = document.getElementById("kitiket");
let cheburashka = document.getElementById("cheburashka");

let kettlePrice = 50;
let laptopPrice = 3500;
let feidgePrice = 1100;
let collarPrice = 15;
let mousePrice = 25;
let headphonesPrice = 40;
let columnPrice = 86;
let toyPrice = 30;
let kitiketPrice = 0.8;
let cheburashkaPrice = 10;

function getBYN()
{
    currency.innerHTML = "BYN";
    kettle.innerHTML = kettlePrice.toFixed(2) + " BYN";
    laptop.innerHTML = laptopPrice.toFixed(2) + " BYN";
    fridge.innerHTML = feidgePrice.toFixed(2) + " BYN";
    collar.innerHTML = collarPrice.toFixed(2) + " BYN";
    mouse.innerHTML = mousePrice.toFixed(2) + " BYN";
    headphones.innerHTML = headphonesPrice.toFixed(2) + " BYN";
    column.innerHTML = collarPrice.toFixed(2) + " BYN";
    toy.innerHTML = toyPrice.toFixed(2) + " BYN";
    cheburashka.innerHTML = cheburashkaPrice.toFixed(2) + "BYN";
    kitiket.innerHTML = kitiketPrice.toFixed(2) + "BYN";
}

function getBYNAdaptive(){
    currencyAdaptive.innerHTML = "BYN";
    kettle.innerHTML = kettlePrice.toFixed(2) + " BYN";
    laptop.innerHTML = laptopPrice.toFixed(2) + " BYN";
    fridge.innerHTML = feidgePrice.toFixed(2) + " BYN";
    collar.innerHTML = collarPrice.toFixed(2) + " BYN";
    mouse.innerHTML = mousePrice.toFixed(2) + " BYN";
    headphones.innerHTML = headphonesPrice.toFixed(2) + " BYN";
    column.innerHTML = collarPrice.toFixed(2) + " BYN";
    toy.innerHTML = toyPrice.toFixed(2) + " BYN";
    cheburashka.innerHTML = cheburashkaPrice.toFixed(2) + "BYN";
    kitiket.innerHTML = kitiketPrice.toFixed(2) + "BYN";
}

function getRUB(){
    currency.innerHTML = "RUB";
    kettle.innerHTML = (kettlePrice * 31.94).toFixed(0) + " RUB";
    laptop.innerHTML = (laptopPrice * 31.94).toFixed(0) + " RUB";
    fridge.innerHTML = (feidgePrice * 31.94).toFixed(0) + " RUB";
    collar.innerHTML = (collarPrice * 31.94).toFixed(0) + " RUB";
    mouse.innerHTML = (mousePrice * 31.94).toFixed(0) + " RUB";
    headphones.innerHTML = (headphonesPrice * 31.94).toFixed(0) + " RUB";
    column.innerHTML = (collarPrice * 31.94).toFixed(0) + " RUB";
    toy.innerHTML = (toyPrice * 31.94).toFixed(0) + " RUB";
    cheburashka.innerHTML = (cheburashkaPrice * 31.94).toFixed(0) + "RUB";
    kitiket.innerHTML = (kitiketPrice * 31.94).toFixed(0) + "RUB";
}

function getRUBAdaptive(){
    currencyAdaptive.innerHTML = "RUB";
    kettle.innerHTML = (kettlePrice * 31.94).toFixed(0) + " RUB";
    laptop.innerHTML = (laptopPrice * 31.94).toFixed(0) + " RUB";
    fridge.innerHTML = (feidgePrice * 31.94).toFixed(0) + " RUB";
    collar.innerHTML = (collarPrice * 31.94).toFixed(0) + " RUB";
    mouse.innerHTML = (mousePrice * 31.94).toFixed(0) + " RUB";
    headphones.innerHTML = (headphonesPrice * 31.94).toFixed(0) + " RUB";
    column.innerHTML = (collarPrice * 31.94).toFixed(0) + " RUB";
    toy.innerHTML = (toyPrice * 31.94).toFixed(0) + " RUB";
    cheburashka.innerHTML = (cheburashkaPrice * 31.94).toFixed(0) + "RUB";
    kitiket.innerHTML = (kitiketPrice * 31.94).toFixed(0) + "RUB";
}

function getUSD() {
    currency.innerHTML = "USD";
    kettle.innerHTML = (kettlePrice * 0.40).toFixed(2) + " USD";
    laptop.innerHTML = (laptopPrice * 0.40).toFixed(2) + " USD";
    fridge.innerHTML = (feidgePrice * 0.40).toFixed(2) + " USD";
    collar.innerHTML = (collarPrice * 0.40).toFixed(2) + " USD";
    mouse.innerHTML = (mousePrice * 0.40).toFixed(2) + " USD";
    headphones.innerHTML = (headphonesPrice * 0.40).toFixed(2) + " USD";
    column.innerHTML = (collarPrice * 0.40).toFixed(2) + " USD";
    toy.innerHTML = (toyPrice * 0.40).toFixed(2) + " USD";
    cheburashka.innerHTML = (cheburashkaPrice * 0.40).toFixed(2) + "USD";
    kitiket.innerHTML = (kitiketPrice * 0.40).toFixed(2) + "USD";
}

function getUSDAdaptive(){
    currencyAdaptive.innerHTML = "USD";
    kettle.innerHTML = (kettlePrice * 0.40).toFixed(2) + " USD";
    laptop.innerHTML = (laptopPrice * 0.40).toFixed(2) + " USD";
    fridge.innerHTML = (feidgePrice * 0.40).toFixed(2) + " USD";
    collar.innerHTML = (collarPrice * 0.40).toFixed(2) + " USD";
    mouse.innerHTML = (mousePrice * 0.40).toFixed(2) + " USD";
    headphones.innerHTML = (headphonesPrice * 0.40).toFixed(2) + " USD";
    column.innerHTML = (collarPrice * 0.40).toFixed(2) + " USD";
    toy.innerHTML = (toyPrice * 0.40).toFixed(2) + " USD";
    cheburashka.innerHTML = (cheburashkaPrice * 0.40).toFixed(2) + "USD";
    kitiket.innerHTML = (kitiketPrice * 0.40).toFixed(2) + "USD";
}

function getEUR() {
    currency.innerHTML = "EUR";
    kettle.innerHTML = (kettlePrice * 0.36).toFixed(2) + " EUR";
    laptop.innerHTML = (laptopPrice * 0.36).toFixed(2) + " EUR";
    fridge.innerHTML = (feidgePrice * 0.36).toFixed(2) + " EUR";
    collar.innerHTML = (collarPrice * 0.36).toFixed(2) + " EUR";
    mouse.innerHTML = (mousePrice * 0.36).toFixed(2) + " EUR";
    headphones.innerHTML = (headphonesPrice * 0.36).toFixed(2) + " EUR";
    column.innerHTML = (collarPrice * 0.36).toFixed(2) + " EUR";
    toy.innerHTML = (toyPrice * 0.36).toFixed(2) + " EUR";
    cheburashka.innerHTML = (cheburashkaPrice * 0.36).toFixed(2) + "EUR";
    kitiket.innerHTML = (kitiketPrice * 0.36).toFixed(2) + "EUR";
}
function getEURAdaptive(){
    currencyAdaptive.innerHTML = "EUR";
    kettle.innerHTML = (kettlePrice * 0.36).toFixed(2) + " EUR";
    laptop.innerHTML = (laptopPrice * 0.36).toFixed(2) + " EUR";
    fridge.innerHTML = (feidgePrice * 0.36).toFixed(2) + " EUR";
    collar.innerHTML = (collarPrice * 0.36).toFixed(2) + " EUR";
    mouse.innerHTML = (mousePrice * 0.36).toFixed(2) + " EUR";
    headphones.innerHTML = (headphonesPrice * 0.36).toFixed(2) + " EUR";
    column.innerHTML = (collarPrice * 0.36).toFixed(2) + " EUR";
    toy.innerHTML = (toyPrice * 0.36).toFixed(2) + " EUR";
    cheburashka.innerHTML = (cheburashkaPrice * 0.36).toFixed(2) + "EUR";
    kitiket.innerHTML = (kitiketPrice * 0.36).toFixed(2) + "EUR";
}

addEventListener('DOMContentLoaded', getBYN);
addEventListener('DOMContentLoaded', getBYNAdaptive);
BYNAdaptive.addEventListener('click', getBYNAdaptive);
BYN.addEventListener('click', getBYN);
RUBAdaptive.addEventListener('click', getRUBAdaptive);
RUB.addEventListener('click', getRUB);
USDAdaptive.addEventListener('click', getUSDAdaptive);
USD.addEventListener('click', getUSD);
EURAdaptive.addEventListener('click', getEURAdaptive);
EUR.addEventListener('click', getEUR);

// Анимация при наведении
let element_box = document.getElementsByClassName("box");
    for(let i = 0; i < element_box.length; i ++){
        element_box[i].onmouseover = () => {
        element_box[i].style.animation = "x12 0.1s linear forwards"
    }
        element_box[i].onmouseout = () => {
        element_box[i].style.animation = "x1 0.1s linear forwards"
    }
}

let element_figure = document.getElementsByTagName("figure");
    for(let i = 0; i < element_figure.length; i ++){
        element_figure[i].onmouseover = () => {
        element_figure[i].style.animation = "poduct 0.1s linear forwards"
    }
        element_figure[i].onmouseout = () => {
        element_figure[i].style.animation = "poduct_back 0.1s linear forwards"
    }
}