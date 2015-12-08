
var cervobolla: GameObject;
var cervobolla2: GameObject;

var i : int;
i=0;

function OnTriggerEnter (col : Collider) {
	if (col.gameObject.tag == "cervo") {
		
		i = 1;
		
	}
}

function Update() {
	
	if(i == 1){
	
	    cervobolla.GetComponent.<Renderer>().enabled = true;
	    cervobolla2.GetComponent.<Renderer>().enabled = true;
	
	
	}

}