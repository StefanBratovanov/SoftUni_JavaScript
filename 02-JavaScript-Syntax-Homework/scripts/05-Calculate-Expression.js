document.getElementById('submit').onclick = calculateResult;

function calculateResult() {
	var expression = document.getElementById('input-field').value;
	var result = eval(expression);
	document.getElementById('result').innerHTML = result;
}