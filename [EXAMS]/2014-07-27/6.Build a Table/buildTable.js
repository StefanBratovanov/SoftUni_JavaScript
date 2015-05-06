"use strict";

function tableBuilder(args) {
	var start = parseInt(args[0]);
	var end = parseInt(args[1]);
	var fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
		1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040];

	console.log("<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>");

	for (var i = start; i <= end; i += 1) {
		var isFibonacciNum = (fibonacciSequence.indexOf(i) === -1) ? 'no' : 'yes';
		console.log("<tr><td>%d</td><td>%d</td><td>%s</td></tr>", i, (i * i), isFibonacciNum);
	}

	console.log("</table>");
}

tableBuilder(['2', '6']);
tableBuilder(['55', '56']);
