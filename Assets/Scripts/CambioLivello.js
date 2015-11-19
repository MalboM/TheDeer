var suono : GameObject;
var livello : int;

function OnMouseEnter () {
	
	suono.GetComponent.<AudioSource>().Play();

}


function OnMouseDown () {

	Application.LoadLevel(livello);
}