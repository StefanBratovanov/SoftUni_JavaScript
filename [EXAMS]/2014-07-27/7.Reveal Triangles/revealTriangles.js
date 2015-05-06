"use strict";

function trianglesTextReplacer(args) {
	var output = clone(args);
	var i;

	for (i = 0; i < output.length; i += 1) {
		output[i] = output[i].split('').filter(Boolean);
	}

	for (i = 0; i < args.length; i += 1) {
		for (var ch = 0; ch < args[i].length; ch += 1) {
			checkForTriangleAndReplaceText(args, i, ch, output);
		}

		console.log(output[i].join(''));
	}

	function clone(obj) {
		var deepCopyObj = new obj.constructor();
		for (var property in obj) {
			if (obj.hasOwnProperty(property)) {
				switch (typeof obj[property]) {
					case 'object':
						deepCopyObj[property] = clone(obj[property]);
						break;
					default:
						deepCopyObj[property] = obj[property];
						break;
				}
			}
		}

		return deepCopyObj;
	}

	function checkForTriangleAndReplaceText(matrix, row, col, copyArr) {
		if (matrix[row][col]) {
			var letter = matrix[row][col];
			if (row + 1 < args.length && col - 1 >= 0 && col + 1 < args[row + 1].length &&
				args[row + 1][col - 1] == letter && args[row + 1][col] == letter &&
				args[row + 1][col + 1] == letter) {
				copyArr[row][col] = '*';
				copyArr[row + 1][col - 1] = '*';
				copyArr[row + 1][col] = '*';
				copyArr[row + 1][col + 1] = '*';
			}
		}
	}
}

trianglesTextReplacer([
	'abcdexgh',
	'bbbdxxxh',
	'abcxxxxx']);

trianglesTextReplacer([
	'aa',
	'aaa',
	'aaaa',
	'aaaaa']);

trianglesTextReplacer([
	'ax',
	'xxx',
	'b',
	'bbb',
	'bbbb']);

trianglesTextReplacer([
	'dffdsgyefg',
	'ffffeyeee',
	'jbfffays',
	'dagfffdsss',
	'dfdfa',
	'dadaaadddf',
	'sdaaaaa',
	'daaaaaaasf']);