
function calcCircleArea(r) {
	var area = Math.PI * r * r;
	return area;
}

document.getElementById('circleAreaR7').innerHTML = "r = 7; area = " + calcCircleArea(7);
document.getElementById('circleAreaR1.5').innerHTML = "r = 1.5; area = " + calcCircleArea(1.5);
document.getElementById('circleAreaR20').innerHTML = "r = 20; area = " + calcCircleArea(20);