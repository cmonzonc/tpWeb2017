
## Design

## Interaction - IHM / interaction.js

Le fnuction DnD permettre d'ecouter les evenements qu'ont lieu dans le canvas, les evenements definis dans le DnD sont:
```
- Press: est declenche lorsque l'utilisateur fait une click sur le canvas / canvas.addEventListener('mousedown', this.press, false);
- Move: est declenche lorsque l'utilisateur commence à deplacer le souris / canvascanvas.addEventListener('mousemove', this.move, false);
- Release: est declenche lorsque l'utilisateur a fini le deplacement /canvas.addEventListener('mouseup', this.release, false);
```
les coordonnées d'emplacement du pointeur définies sont celles indiquées ci-dessous, celles-ci sont mises à jour lorsqu'un événement se produit (le mouvement commence, pendant le mouvement et à la fin du mouvement).
```
  var startPointX = 0;
  var startPointY = 0;
  var endPointX = 0;
  var endPointY = 0;
  var startEvent = 0;
```

Après l'execution de chacune de function de DnD une action d'interacteur est declenche. 

## Le modèle / model.js

Les functions definis sont: 
```
- Drawing: il permettre de gérer les figures (ajouter, supprimer et obtenir la liste de figures)
- Form: il définit les propietés basiques d'une forme (width, color)
- Line: 
- Rectangle
```

## La vue / view.js
La vue est une représentation graphique possible du modèle. Dans notre cas, le modèle est déjà hautement graphique et nous allons donc feinter pour minimiser le développement à faire grâce à la « flexibilité » de Javascript. En effet, Javascript permet de rajouter dans une classe déjà définie des fonctions.

```
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
```

## Le contrôleur / controller.js
Dans notre cas, l'interacteur sera un crayon (Pencil dans le fichier controler.js) que l'utilisateur va manipuler pour ajouter des formes au dessin. Comme vous pouvez le constater le crayon est paramétrable (couleur, épaisseur, type de forme).
```
	this.currentEditingMode = editingMode.line;
	this.currentLineWidth = 5;
	this.currentColor = '#000000'; // Default color
	this.currentShape = 0;
	this.DnD = new DnD(canvas, this);
```

Les function definis dan le contrôleur a pour but de notifier l'interacteur d'une modification de l'interaction, ces functions sont les suivantes:
```
- this.onInteractionUpdate 
- this.onInteractionEnd
- this.onInteractionStart
```
