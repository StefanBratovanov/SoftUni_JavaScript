function createParagraph(div, text) {
    var parent = document.getElementById(div);
    var paragraph = document.createElement("p");
    
    paragraph.innerHTML = text;
    parent.appendChild(paragraph);
}

createParagraph('wrapper', 'Some text');
createParagraph('wrapper', 'Text some JS');



//function create(id,text){
//    id = document.createElement('p');
//    var createText = document.createTextNode(text);
//    id.appendChild(createText);
//    document.body.appendChild(id);
//}