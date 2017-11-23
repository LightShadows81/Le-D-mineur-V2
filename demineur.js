var totalBombes = 10;
var grille = new Array();
var l = 10;
var colonne = 10;
var ligne = 10;
function setup(){
  createCanvas(200,200);
  background(50,50,50);
  noStroke();
  initialise();

}

function initialise(){
  /*création de lignes*/
  for(var i=0; i<ligne; i++){
		grille[i] = new Array();
	}
  for(var i=0; i<ligne; i++){ // on parcourt les lignes
		// ... et dans chaque ligne, on initialise les cases en blanc
		for(var j=0; j<colonne; j++){
				grille[i][j] = new Cell(i,j,l); ;
		}
	}

}



class Cell{
  constructor(i,j,l) {
    this.x = i*l;
    this.y = j*l;
    this.l = l;
  }

  show() {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.l, this.l);
  }
}

function draw() {
  background(255);
  for (var i = 0; i < ligne; i++) {
    for (var j = 0; j < colonne; j++) {
      grille[i][j].show();
    }
  }
}
