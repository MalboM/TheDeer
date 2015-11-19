var suono : GameObject;


function OnMouseEnter () {
	
	suono.GetComponent.<AudioSource>().Play();

}


function OnMouseDown () {

	Application.LoadLevel(1);
}