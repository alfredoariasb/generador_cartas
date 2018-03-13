function myFunction() {
   
  let formas = ["♥","♠","♣","♦"];
  let numeros = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let aleatorio1=Math.floor(Math.random()*(13-0)+0);
  let aleatorio2=Math.floor(Math.random()*(4-0)+0);
  let result= numeros [aleatorio1];
  let result2= formas [aleatorio2];
  const num=document.getElementById("num");
  let figA=document.getElementById("figA");
  let figB=document.getElementById("figB");
   //console.log(figB)

    num.innerHTML = result;
    figA.innerHTML = result2;
    figB.innerHTML = result2;
 	//console.dir (document.getElementById("figA"))

 	if (figA.innerHTML==="♠" || figB.innerHTML==="♣"){
 		figA.className="black"
 		figB.className="black"  
 	}
 	else {
 		figA.className=" "
 		figB.className=" " 
 	}

console.log(figA.innerHTML==="♠",figB.innerHTML==="♣")
}


