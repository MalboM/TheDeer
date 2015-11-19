var animazione : GameObject;


function Update () {

	if (Input.GetAxis("Horizontal")) 
	animazione.GetComponent.<Animation>().Play("walkcervo3");
	
	else
	animazione.GetComponent.<Animation>().Play("idlecervo3");
}