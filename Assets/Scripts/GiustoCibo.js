var obj : GameObject;


function OnMouseDown () {

	obj.GetComponent.<Renderer>().enabled = true;
	obj.GetComponent.<AudioSource>().Play();
	
		
}