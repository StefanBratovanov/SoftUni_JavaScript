Array.prototype.removeItem = function(value) {
    var result = [];
    for (i in this) {
        if (this[i] === value) {
            this.splice(i, 1);
        }
    }
    console.log(this);
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.removeItem(1);
var arr = ['hi', 'bye', 'hello' ];
arr.removeItem('bye');
