// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    // ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log(ctx);
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