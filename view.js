// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Drawing.prototype.paint = function(ctx) {
    // console.log(this.getForms());
    // ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // console.log(ctx);
    this.getForms().forEach(function(s) {
        s.paint(ctx);
    });
};

Form.prototype.paint = function(ctx){
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.weight;
};

Line.prototype.paint = function(ctx) {
    Form.prototype.paint.call(this,ctx);
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
};

Rectangle.prototype.paint = function(ctx) {
    Form.prototype.paint.call(this,ctx);
    ctx.rect(this.x1, this.y1, this.length, this.height);
    ctx.stroke();
};

Ellipse.prototype.paint = function(ctx) {
    Form.prototype.paint.call(this,ctx);
    var centroX = 800/2, centroY = 600/2, radioX = 100, radioY = 60, rotacion=0, ap = 0, af = 2*Math.PI, cR = true;
    ctx.ellipse(this.x1, this.y1, this.length, this.height, rotacion, ap, af, cR);
    ctx.stroke();
}

Drawing.prototype.updateShapeList = function(){

    var shapeIdentifer = this.forms.length-1;

    var span = document.createElement("span");
    span.setAttribute("class", "fa fa-remove");

    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-default");
    button.setAttribute("onclick", "drawSection.removeShape(" + shapeIdentifer + ")");
    button.setAttribute("id", shapeIdentifer);
    button.appendChild(span);

    // Setting text that's going to be used in the li section
    if(this.forms[shapeIdentifer] instanceof Rectangle){
        var textDescription = document.createTextNode(this.forms[shapeIdentifer].name);
    } else if(this.forms[shapeIdentifer] instanceof Line){
        var textDescription = document.createTextNode(this.forms[shapeIdentifer].name);
    } else if(this.forms[shapeIdentifer] instanceof Ellipse){
        var textDescription = document.createTextNode(this.forms[shapeIdentifer].name);
    }
    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center")
    li.setAttribute("id", "shape-element-list-" + shapeIdentifer);
    li.setAttribute("name", "shape-indexer");
    li.appendChild(button);
    li.appendChild(textDescription);

    var shapeList = document.getElementById("shapeList");
    shapeList.appendChild(li);
};

Drawing.prototype.removeShape = function(identifier){
    this.removeForm($(document.getElementById("shape-element-list-" + identifier)).index());
    document.getElementById("shape-element-list-" + identifier).remove();    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.paint(ctx, canvas);
};