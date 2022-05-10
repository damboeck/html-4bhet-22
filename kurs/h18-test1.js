
function printR(x,id) {
	let t = document.getElementById(id);
	let i;
	for (i=0;i<=10;i++) {
		t.innerHTML += i+"x"+x+"="+(i*x)+" ";
	}	
	t.innerHTML += "<br>";
}

function ch(id) {
	let h = document.defaultView.outerHeight;
	let b = document.defaultView.outerWidth;
	let hi = document.defaultView.innerHeight;
	let bi = document.defaultView.innerWidth;
	let ausgabe = document.getElementById(id);
	document.close()
	ausgabe.innerHTML = "Dein Fenster ist "+b+"x"+h+"Pixel groß<br>";
	ausgabe.innerHTML += "Dein Text ist "+bi+"x"+hi+"Pixel groß<br>";
}
