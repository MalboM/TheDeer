
var oggetto : GameObject;

var tempo : float;

var lifeTime = 0.0;

var timer = 0.0;

function Update () {

	timer += Time.deltaTime;
	
		if (timer >= lifeTime) 
		oggetto.GetComponent.<Renderer>().material.color += Color(0, 0, 0) * Time.deltaTime * 0.4;

}