function myFunction() {
   
  let formas = ["♥","♠","♣","♦"];
  let numeros = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let aleatorio1=Math.floor(Math.random()*(13-0)+0);
  let aleatorio2=Math.floor(Math.random()*(4-0)+0);
  let result= numeros [aleatorio1];
  let result2= formas [aleatorio2];
console.log(result);

    document.getElementById("num").innerHTML = result
    document.getElementById("figA").innerHTML = result2
    document.getElementById("figB").innerHTML = result2
 
}
