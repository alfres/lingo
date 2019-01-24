
var target, t , t2, fi = 1

window.onload = otra

function otra(){
	$(".box" ).each(function( index ) {
	this.textContent = ''
	this.style.backgroundColor = "Tomato"
})	
intro.contentEditable = "true"	
fi = 1	
bot2.style.visibility = "hidden"
intro.focus()
 intro.textContent = ''
 target = pal[Math.floor(Math.random() * pal.length)]
}

function showbutton(e){
if(e.textContent.length == 5){bot1.style.visibility = "visible"; bot1.focus()} else {bot1.style.visibility = "hidden"}
}
function check(){

 t = target.split('')
 t2 = intro.textContent.toUpperCase().split('')
 var myclases = ".b" +  fi
	
	$(myclases ).each(function( index ) {
	this.textContent = t2[index]

})

while ( check2(t, t2, fi) == false) {
  check2(t, t2, fi)
}
var matches = 0
	$(myclases ).each(function( index ) {
	if(this.style.backgroundColor == "mediumseagreen"){matches += 1; }
	})

if(matches == 5)return bingo()

fi += 1

intro.focus()
intro.textContent = ''	
}

function bingo(){
intro.contentEditable = "false"	
bot1.style.visibility = "hidden"
bot2.style.visibility = "visible"
intro.textContent = 'BINGO'
bot2.focus()	
}

function check2(tt, tt2, fil){
	
		for (var n = (tt.length -1); n > (-1);n--) {
	if(tt2[n] == tt[n]){
		var myclases = "#box" +  (((fil -1) * 5) + n + 1)
		$(myclases ).each(function( index ) {
			this.style.backgroundColor = "MediumSeaGreen"
			
	t.splice(n,1)
	t2.splice(n,1)
	return false
		
	})	
	}
}
while ( check3(t, t2, fil) == false) {
  check3(t, t2, fil)
}	

}

function check3(tt, tt2, fil){
	//alert(tt2)
		for (var n = (tt.length -1); n > (-1);n--) {
			for (var n2 = (tt.length -1); n2 > (-1);n2--) {
	if(tt2[n] == tt[n2]){
		var myclases = ".b" +  fil
		$(myclases ).each(function( index ) {
		
			if(this.textContent == tt2[n])this.style.backgroundColor = "Orange"
			
	
		
	})	
	t.splice(n2,1)
	t2.splice(n,1)
	return false
	}
}
		}

}