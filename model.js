// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {

    this.forms = new Array();

    this.removeForm = function(index) {
        this.forms.splice(index, 1);
    }.bind(this);

    this.getForms = function(){
        return this.forms;
    }.bind(this);

    this.addForm = function(form) {
		this.forms.push(form);
	}.bind(this);
	
}

function Form(color, weight) {
    this.weight = weight;
    this.color = color;
    this.name = "Form";
}

function Line(x1, y1, x2, y2, color, weight, type) {
    Form.call(this, color, weight);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.dash = type;
    this.name = "Line";
}

function Rectangle(x1, y1, length, height, color, weight, type) {
	Form.call(this, color, weight);
	this.height = height;
    this.length = length;
    this.x1 = x1;
    this.y1 = y1;
    this.dash = type;
    this.name = "Rectangle";
}

function Ellipse(x1, y1, length, height, color, weight, type) {
	Form.call(this, color, weight);
	this.height = height;
    this.length = length;
    this.x1 = x1;
    this.y1 = y1;
    this.dash = type;
    this.name = "Ellipse";
}