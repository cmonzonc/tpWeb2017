
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


## Le contrôleur / controller.js

