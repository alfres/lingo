var target, t , t2, fi = 0, timer1, timer2, timer3, timer4, timer5

var intentos = { valor: 0,
 sumar:function(){this.valor += 1; veces.textContent = this.valor},
 limpiar:function(){this.valor = 0;veces.textContent = this.valor}
}

var bien = { valor: 0,
 sumar:function(){this.valor += 1; co.textContent = this.valor},
 limpiar:function(){this.valor = 0;co.textContent = this.valor}
}

var descolocadas = { valor: 0,
 sumar:function(){this.valor += 1; desco.textContent = this.valor},
 limpiar:function(){this.valor = 0;desco.textContent = this.valor}
}

var mal = { valor: 0,
 sumar:function(){this.valor = 5; malo.textContent = this.valor},
 restar:function(){this.valor -= 1; malo.textContent = this.valor},
 limpiar:function(){this.valor = 0;malo.textContent = this.valor}
}

function carre(){
var newNode , newNode2
for (var n = 1; n < 6;n++) {	
newNode = document.createElement("div");
newNode.id = 'fila' + n
newNode.classList.add("fila", "w3-sand");
document.getElementById('main').insertBefore(newNode, document.getElementById('info'));
for (var n2 = 1; n2 < 6;n2++) {
newNode2 = document.createElement("div")
newNode2.id = 'box' + (((n-1) * 5) + n2)
newNode2.classList.add("box", "b" + n);
newNode.appendChild(newNode2);
}

}
	
otra()	
}

window.onload = carre

function sendip(d){
var dato = new FormData();
dato.append("data" , d);
dato.append("fila" , intentos.valor);
dato.append("word" , target);
var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
 xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      //console.log(xhr.response);
	  //alert(xhr.response)
    }
  }
xhr.open( 'post', 'https://tekintools.com/lingo/action_page.php', true );
xhr.send(dato);	
}

function otra(){
	target = pal[Math.floor(Math.random() * pal.length)]
	sendip("data")
	intentos.limpiar(); bien.limpiar(); descolocadas.limpiar(); mal.limpiar();
	
	
   fi = 0
	document.getElementById('id01').style.display='none'
	$(".box" ).each(function( index ) {
	this.textContent = ''
	this.style.backgroundColor = "Tomato"
})
	
intro.contentEditable = "true"	
	
bot2.style.visibility = "hidden"
bot3.style.visibility = "hidden"
intro.focus()
 intro.textContent = ''
 
}

function showbutton(e){
if(e.textContent.length == 5){bot1.style.visibility = "visible"; bot1.focus()} else {bot1.style.visibility = "hidden"}
}

function check0(){ if(fi == 5){up()	} else {check()} }

function check(){
  if(fi < 5)fi += 1
	bien.limpiar(); descolocadas.limpiar(); mal.sumar();

	 t = target.split('')
 t2 = intro.textContent.toUpperCase().split('')
 var myclases = ".b" +  fi
	
	$(myclases ).each(function( index ) {
	this.textContent = t2[index]
    this.style.backgroundColor = "red"
})

while ( check2(t, t2, fi) == false) { check2(t, t2, fi)}

intentos.sumar()
if(bien.valor == 5)return bingo()
bot1.style.visibility = "hidden"
intro.focus()
intro.textContent = ''	
}


function check2(tt, tt2, fil){
	
		for (var n = (tt.length -1); n > (-1);n--) {
	if(tt2[n] == tt[n]){
		var myclases = "#box" +  (((fil -1) * 5) + n + 1)
		$(myclases ).each(function( index ) {
			this.style.backgroundColor = "MediumSeaGreen"
			bien.sumar()
			mal.restar()
	t.splice(n,1)
	t2.splice(n,1)
	return false
		
	})	
	}
}
while ( check3(t, t2, fil) == false) { check3(t, t2, fil)}	

}

function check3(tt, tt2, fil){
	//alert(tt2)
		for (var n = (tt.length -1); n > (-1);n--) {
			for (var n2 = (tt.length -1); n2 > (-1);n2--) {
	if(tt2[n] == tt[n2]){
		var myclases = ".b" +  fil
		$(myclases ).each(function( index ) {
		       if(this.textContent == tt2[n] && this.style.backgroundColor == "red" ){
				   this.style.backgroundColor = "Orange"; return false
			   }
			})
	   descolocadas.sumar()
		mal.restar()		
	t.splice(n2,1)
	t2.splice(n,1)
	return false
	}
}
		}

}

function bingo(){
	sendip("bingo")
intro.contentEditable = "false"	
help.style.visibility = "hidden"
bot1.style.visibility = "hidden"
bot2.style.visibility = "visible"
intro.textContent = 'BINGO'
bot2.focus()
bot3.style.visibility = "visible"	
}

function linki(){
$( '#dicc' ).load('https://www.wordreference.com/definicion/' + target  + ' #article');
 $( '#dicc' ).css( "color", "black" );	
document.getElementById('id01').style.display='block'	
}

function aspa(){
document.getElementById('id01').style.display='none'
document.getElementById('dicc').innerHTML=''
}

function up2(timer, nu, f1, f2){
	
	clearTimeout(timer)
		$(f1 ).each(function( index ) {
	this.textContent = $( '#box' + (index + nu) ).html()
	this.style.backgroundColor = $( '#box' + (index + nu) ).css( "background-color")
	})
		$(f2 ).each(function( index ) {
	this.textContent = ''
	this.style.backgroundColor = "Tomato"
    })	
}
function up(){
	$(".b1" ).each(function( index ) {
	this.textContent = ''
	this.style.backgroundColor = "Tomato"
    })

	
timer1 = setTimeout(function(){ up2(timer1,  6,  ".b1" ,".b2" )},200);	
timer2 = setTimeout(function(){ up2(timer2, 11,  ".b2" ,".b3" )},400);	
timer3 = setTimeout(function(){ up2(timer3, 16,  ".b3" ,".b4" )},600);	
timer4 = setTimeout(function(){ up2(timer4, 21,  ".b4" ,".b5" )},800);	
timer5 = setTimeout(function(){clearTimeout(timer5); check()}, 950);	
}

