"use strict";

function hyperlinksExtractor(args) {
	var htmlText = args.join('\n');
	var pattern = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)|([^\s>]+))[^>]*>/g;
	var hyperlinks;
	while (hyperlinks = pattern.exec(htmlText)) {
		console.log(hyperlinks[3] ? hyperlinks[3] : hyperlinks[4] ? hyperlinks[4] : hyperlinks[5]);
	}
}

hyperlinksExtractor(['<a href="http://softuni.bg" class="new"></a>']);
hyperlinksExtractor(['<p>This text has no links</p>']);
hyperlinksExtractor([
	'<!DOCTYPE html>',
	'<html>',
	'<head>',
	'<title>Hyperlinks</title>',
	'<link href="theme.css" rel="stylesheet" />',
	'</head>',
	'<body>',
	'<ul><li><a   href="/"  id="home">Home</a></li><li><a',
	'class="selected" href=/courses>Courses</a>',
	'</li><li><a href =',
	'\'/forum\' >Forum</a></li><li><a class="href"',
	'onclick="go()" href= "#">Forum</a></li>',
	'<li><a id="js" href =',
	'"javascript:alert(\'hi yo\')" class="new">click</a></li>',
	'<li><a id=\'nakov\' href =',
	'http://www.nakov.com class=\'new\'>nak</a></li></ul>',
	'<a href="#empty"></a>',
	'<a id="href">href=\'fake\'<img src=\'http://abv.bg/i.gif\'',
	'alt=\'abv\'/></a><a href="#">&lt;a href=\'hello\'&gt;</a>',
	'<!-- This code is commented:',
	'<a href="#commented">commentex hyperlink</a> -->',
	'</body>'
]);