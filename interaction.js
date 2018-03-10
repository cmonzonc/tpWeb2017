
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'

  // Developper les 3 fonctions gérant les événements
this.press = function(e){
//  console.log(e);
  interactor.onInteractionStart(this);
}.bind(this);

this.move = function(e){
//  console.log(e);
}.bind(this);

this.release = function(e){
//  console.log(e);  
}.bind(this);

// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.move, false);
  canvas.addEventListener('mousedown', this.press, false);
  canvas.addEventListener('mousemove', this.release, false);
  // canvas.addEventListener('mouseup', this.clean, false);

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

}