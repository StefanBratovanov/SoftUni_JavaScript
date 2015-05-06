"use strict";

function sortConcerts(args) {
	var concertList = {};

	for (var i = 0; i < args.length; i += 1) {
		var inputRow = args[i].split('|').filter(Boolean);
		var band = inputRow[0].trim();
		var town = inputRow[1].trim();
		var stadium = inputRow[3].trim();

		if (!(town in concertList)) {
			concertList[town] = {};
		}

		if (!(stadium in concertList[town])) {
			concertList[town][stadium] = [];
		}

		if (concertList[town][stadium].indexOf(band) == -1) {
			concertList[town][stadium].push(band);
		}
	}

	console.log(JSON.stringify(sortObject(concertList)));

	function sortObject(object) {
		var newObject = {};
		var townKeys = Object.keys(object).sort();
		for (var i = 0; i < townKeys.length; i += 1) {
			if (object.hasOwnProperty(townKeys[i])) {
				newObject[townKeys[i]] = {};
				var stadiumKeys = Object.keys(object[townKeys[i]]).sort();
				for (var j = 0; j < stadiumKeys.length; j += 1) {
					if (object[townKeys[i]].hasOwnProperty(stadiumKeys[j])) {
						newObject[townKeys[i]][stadiumKeys[j]] =
							object[townKeys[i]][stadiumKeys[j]].sort();
					}
				}
			}
		}

		return newObject;
	}
}

sortConcerts([
	'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
	'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
	'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
	'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
	'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
	'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
	'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
	'Helloween | London | 28-Jul-2014 | Wembley Stadium',
	'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
	'Metallica | London | 03-Oct-2014 | Olympic Stadium',
	'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
	'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
]);