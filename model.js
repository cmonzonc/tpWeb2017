// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {

    this.forms = new Array();

    this.addForm = function(form) {
		this.forms.push(form);
		console.log('asdasdasdasdasd')
	}.bind(this);
	
    this.removeForm = function(index) {
        this.forms.splice(index,1);
    }.bind(this);

    this.getForms = function(){
        return this.forms;
    }.bind(this);
}

function Form(color, weight) {
    this.weight = weight;
    this.color = color;
}

function Line(x1, y1, x2, y2, color, weight) {
    Form.call(this, color, weight);
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
}

function Rectangle(x1, y1, length, height, color, weight) {
	Form.call(this, color, weight);
	this.height = height;
    this.length = length;
    this.x1=x1;
	this.y1=y1;
}
