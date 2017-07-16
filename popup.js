var button = document.getElementById('convert');
var input = document.getElementById('opacity');

button.onclick = convert;

input.addEventListener('keypress', function(e) {
    if(event.keyCode == 13) {
    	convert();
    } 
});

function convert() {
	var i = document.getElementById("opacity").value;
	if(i > 100) {
		i = 100;
	}
	if(i<0) {
		i = 0;
	}
	var e = i / 100;
	var alpha = Math.round(e * 255);
	var hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
	var html = 'Result: <div id="result">'+hex+'</div><br><br>E.g: '+ i +'% white = #<strong>'+ hex + '</strong>FFFFFF';
	document.getElementById("hidden").innerHTML = html;


}