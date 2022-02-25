//Usando callback
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}

//Usando promise
let myPromise = new Promise((resolve,reject) => {
    setTimeout(function() {resolve("I love you !!!");},3000);
});

myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });