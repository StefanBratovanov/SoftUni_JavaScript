HTMLGenerator = {
    createParagraph: function createParagraph(id, text) {
        var parent = document.getElementById(id);
        var paragraph = document.createElement("p");

        paragraph.innerHTML = text;
        parent.appendChild(paragraph);
    },
    createDiv: function createDiv(id, classs) {
        var parent = document.getElementById(id);
        var div = document.createElement("div");
        div.className = classs;
        parent.appendChild(div);
    },
    createLink: function createLink(id, text, url) {
        var parent = document.getElementById(id);
        var link = document.createElement("a");
        
        link.innerHTML = text;
        link.href = url;
        parent.appendChild(link);
    }

}

HTMLGenerator.createParagraph('wrapper', 'Soft Uni');
HTMLGenerator.createDiv('wrapper', 'section');
HTMLGenerator.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
