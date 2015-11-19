var suono : GameObject;
var suono2: GameObject;
var suonosplash: GameObject;
var schizzo: GameObject;

var i : int;
i=0;

function OnTriggerEnter (col : Collider) {
	if (col.gameObject.tag == "cervo") {
		
		i = 1;
		
	}
}

function Update() {
	
	if(i == 1){
	
		schizzo.GetComponent.<Renderer>().enabled = true;
	
		suono.GetComponent("AudioSource").enabled = true;
		
		suonosplash.GetComponent("AudioSource").enabled = true;
		
		suono2.GetComponent.<AudioSource>().Stop();
	}

}