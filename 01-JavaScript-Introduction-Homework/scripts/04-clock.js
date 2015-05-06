setInterval('timer()', 1000);

function timer() {
	var	timeNow = new Date();
	var hours = timeNow.getHours();
	var minutes = timeNow.getMinutes();
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	var seconds = timeNow.getSeconds();
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
}
