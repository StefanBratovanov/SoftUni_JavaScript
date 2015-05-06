function quadraticEquationRoots(a, b, c) {
	var D = b * b - 4 * a * c,
		x =  -b / (2 * a),
		x1 = (-b + Math.sqrt(D)) / (2 * a),
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		
	if (D < 0) {
		return ('No real roots.');
	} else if (D === 0) {
		return ('X = ' + x.toFixed(2));
	} else {
		return ('x\u2081 = ' + x1.toFixed(2) + '\nx\u2082 = ' + x2.toFixed(2));
	}
}

console.log(quadraticEquationRoots(2, 5, -3));
console.log(quadraticEquationRoots(2, -4, 2));
console.log(quadraticEquationRoots(4, 2, 1));
