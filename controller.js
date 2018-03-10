
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currentEditingMode = editingMode.line;
	this.currentLineWidth = 5;
	this.currentColor = '#000000'; // Default color
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onIteractionUpdate = function(){

	}.bind(this);

	this.onInteractionEnd = function(){

	}.bind(this);

	this.onInteractionStart = function(){
		this.currentLineWidth = document.getElementById("spinnerWidth");
		this.currentColor = document.getElementById("spinnerWidth");
		// Setting the selected shape
		var radios = document.getElementsByName("mx");

		for (var i = 0, length = radios.length; i < length; i++){
			if (radios[i].checked){
			// do whatever you want with the checked radio
			if(radios[i].id == "butLine"){
				alert("line");
				this.currentEditingMode = editingMode.line;
				this.currentShape = new Rectangle();
			}else if(radios[i].id == "butRect"){
				this.currentEditingMode = editingMode.rect;
				this.currentShape = new Line();
				alert("square");
			}
			// only one radio can be logically checked, don't check the rest
			break;
		 }
		}
	}.bind(this);


};


