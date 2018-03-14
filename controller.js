
var editingMode = { rect: 0, line: 1, ellipse: 2 };

function Pencil(ctx, drawing, canvas) {
	this.currentEditingMode = editingMode.line;
	this.currentLineWidth = 5;
	this.currentColor = '#000000'; // Default color
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	this.DnD = new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionUpdate = function(){
		if (this.currentEditingMode == editingMode.rect){
            var length = this.DnD.endPointX - this.DnD.startPointX;
			var height = this.DnD.endPointY - this.DnD.startPointY;
            this.currentShape = new Rectangle(this.DnD.startPointX, this.DnD.startPointY, length, height, this.currentColor, this.currentLineWidth);
        } else if (this.currentEditingMode == editingMode.line){
            this.currentShape = new Line(this.DnD.startPointX, this.DnD.startPointY, this.DnD.endPointX, this.DnD.endPointY, this.currentColor, this.currentLineWidth);
        } else if (this.currentEditingMode == editingMode.ellipse){
            this.currentShape = new Ellipse(this.DnD.startPointX, this.DnD.startPointY, this.DnD.endPointX, this.DnD.endPointY, this.currentColor, this.currentLineWidth);
        }
		ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);
	}.bind(this);

	this.onInteractionEnd = function(){
        if (this.currentEditingMode == editingMode.rect){
            var length = this.DnD.endPointX - this.DnD.startPointX;
			var height = this.DnD.endPointY - this.DnD.startPointY;
            this.currentShape = new Rectangle(this.DnD.startPointX, this.DnD.startPointY, length, height, this.currentColor, this.currentLineWidth);
        } else if (this.currentEditingMode == editingMode.line){
            this.currentShape = new Line(this.DnD.startPointX, this.DnD.startPointY, this.DnD.endPointX, this.DnD.endPointY, this.currentColor, this.currentLineWidth);
        } else if (this.currentEditingMode == editingMode.ellipse){
			var length = this.DnD.endPointX - this.DnD.startPointX;
			var height = this.DnD.endPointY - this.DnD.startPointY;
            this.currentShape = new Ellipse(this.DnD.startPointX, this.DnD.startPointY, this.DnD.endPointX, this.DnD.endPointY, this.currentColor, this.currentLineWidth);
        }
		ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.addForm(this.currentShape);
        drawing.paint(ctx, canvas);
        drawing.updateShapeList(this.currentShape);
        this.currentShape = null;
	}.bind(this);

	this.onInteractionStart = function(){
		this.currentLineWidth = document.getElementById("spinnerWidth").value;
		this.currentColor = document.getElementById("colour").value;
		// Setting the selected shape
		var radios = document.getElementsByName("mx");

		for (var i = 0, length = radios.length; i < length; i++){
			if (radios[i].checked){
			// do whatever you want with the checked radio
			if(radios[i].id == "butLine"){
				this.currentEditingMode = editingMode.line;
				// console.log(this.DnD.startPointX, this.DnD.startPointY, this.DnD.startPointX, this.DnD.startPointY, this.currentLineWidth, this.currentColor);
				this.currentShape = new Line(this.DnD.startPointX, this.DnD.startPointY, this.DnD.startPointX, this.DnD.startPointY, this.currentColor, this.currentLineWidth);
				this.currentShape.paint(ctx, canvas);
			}else if(radios[i].id == "butRect"){
				this.currentEditingMode = editingMode.rect;
				this.currentShape = new Rectangle(this.DnD.startPointX, this.DnD.startPointY, 0, 0, this.currentColor, this.currentLineWidth);
				this.currentShape.paint(ctx, canvas);
			}else if(radios[i].id == "butEllipse"){
				this.currentEditingMode = editingMode.ellipse;
				this.currentShape = new Ellipse(this.DnD.startPointX, this.DnD.startPointY, 0, 0, this.currentColor, this.currentLineWidth);
				this.currentShape.paint(ctx, canvas);
			}
			
			break;
		 }
		}
	}.bind(this);
	
}


