
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

var canvas = document.getElementById('myCanvas');
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	console.log("a");

	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

//	new DnD(canvas, this);



	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd


};

	function getMousePosition(canvas, evt){

		var rect = canvas.getBoundClientRect();

		console.log(evt.x);
		console.log(evt.y);
		return {
			x: evt.x - rect.left, 
			y: evt.x - rect.top
		};

	};

	function onInteractionStart(canvas, event){
		console.log('a');

	};

	function onInteractionUpdate(canvas, event){
		console.log('b');
	};
	

	function onInteractionUpdate(canvas, event){
		console.log('c');
	};

	canvas.addEventListener('onclick', this.getMousePosition, false);
	canvas.addEventListener('mousedown', this.onInteractionStart, false);
	canvas.addEventListener('mousemove', this.onInteractionEnd, false);
	canvas.addEventListener('mouseup', this.onInteractionUpdate, false);



