var space=document.getElementsByClassName("color-change");
console.log(space);

var a=["red","brown","blueviolet","blue","yellow","purple","aqua",];

var number=(Math.floor(Math.random()*a.length));
console.log(number);
document.body.style.backgroundColor=a[number];