var suono : GameObject;
var livello : int;

function OnMouseOver () {
	
	suono.GetComponent.<AudioSource>().Play();

}


function OnMouseDown () {

    Application.LoadLevel(livello);
}