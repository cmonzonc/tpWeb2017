
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  var startPointX = 0;
  var startPointY = 0;
  var endPointX = 0;
  var endPointY = 0;
  var startEvent = 0;

  // Developper les 3 fonctions gérant les événements
this.press = function(e){
  this.startPointX = e.x;
  this.startPointY = e.y;
  this.endPointX = e.x;
  this.endPointY = e.y;
  startEvent = 1;
  interactor.onInteractionStart(DnD);
}.bind(this);

this.move = function(e){

  if(startEvent){
    this.endPointX = e.x;
    this.endPointY = e.y;
    interactor.onInteractionUpdate(this);
  }
  
}.bind(this);

this.release = function(e){
  if(startEvent){
    startEvent = 0;
    interactor.onInteractionEnd(this);
  }
}.bind(this);

// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousemove', this.move, false);
  canvas.addEventListener('mousedown', this.press, false);
  canvas.addEventListener('mouseup', this.release, false);
  // canvas.addEventListener('mouseup', this.clean, false);


}