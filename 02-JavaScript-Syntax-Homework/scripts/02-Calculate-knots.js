function kmhToKnots(kmh) {
	var knots = kmh * 0.5399568;
	return knots;
}

console.log(kmhToKnots(20).toFixed(2));
console.log(kmhToKnots(112).toFixed(2));
console.log(kmhToKnots(400).toFixed(2));