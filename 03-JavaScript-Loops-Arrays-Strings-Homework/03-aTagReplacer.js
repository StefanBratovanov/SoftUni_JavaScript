function replaceATag(str) {
    
    var newString = str.replace(/<a (.+)>(.+)<\/a>/g, '[URL $1]$2[\/URL]');
    console.log(newString);
}


replaceATag('<ul><li><a href="http://softuni.bg">SoftUni</a></li></ul>');
replaceATag('<ul><li><a href="http://google.com">Google</a></li></ul>');
replaceATag('<li>   <a href="http://nba.com">NBA</a>    </li>');
replaceATag('<li><a href="">Test</a></li>');


//function solve(inputString) {
//    var match;
//    var regex = /<a(.*?)>(.*?)<\/a>/g;
//    while (match = regex.exec(inputString)) {
//        var initial = match[0];
//        var replacementString = '[URL' + match[1] + ']' + match[2] +  '[/URL]';
//        inputString = inputString.replace(initial, replacementString);
//    }
//    console.log(inputString);
//}
//
//solve('<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li> </ul>' + '<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li> </ul>');



//function replaceATag(str) {
//    while (str.indexOf('<a href') > -1) {
//        str = str.replace('<a href=\"', '[URL href=');
//        str = str.replace('\">', ']');
//        str = str.replace('</a>', '[/URL]');
//    }
//    
//    return str;
//}
//
//var sample = '<ul><li><a href=\"http://softuni.bg\">SoftUni</a></li></ul><a href=\"http://softuni.bg\">SoftUni</a>'; // I wanted to test if it removes all occasions
//
//var result = replaceATag(sample);
//console.log(result);