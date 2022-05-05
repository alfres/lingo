var querty = "qwertyuiopasdfghjklñ@zxcvbnm ";
intro.contentEditable = "false"
    // añadimos las letras
	let kboard=document.createElement("div");
kboard.id ="teclado"
kboard.classList.add("w3-center", "w3-animate-zoom" );


document.body.appendChild(kboard);	
let letras=document.createElement("div");
 letras.id ="letras"  
document.getElementById("teclado").appendChild(letras);

   querty.split('').map(el => {

        let span=document.createElement("span");
		 if (el==" ") { 
		 span.classList.add("space"); 
		 span.addEventListener("click",  function() {
		if( document.getElementById("intro").innerText =="BINGO") {return};
		if(intro.textContent.length == 5){check0()}
		 
		 } )
		
      } else if (el=="@") {
		 span.classList.add("delete");
		 span.addEventListener("click",  function() {
		 if( document.getElementById("intro").innerText =="BINGO") {return};
		 $('#intro').text(function (_,txt) {
         return txt.slice(0, -1);});
	
	      })
		 } else {
        span.innerText = el
        span.addEventListener("click",  function() {
		if(intro.textContent.length == 5){return}
		
		document.getElementById("intro").innerText+=el;
		
		})};

        
       document.getElementById("letras").appendChild(span);

    });