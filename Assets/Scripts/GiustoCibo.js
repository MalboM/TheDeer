var obj : GameObject;


function OnMouseDown () {

	obj.GetComponent.<Renderer>().enabled = true;
	obj.GetComponent.<AudioSource>().Play();
	
		
}



function OnTriggerStay(other:Collider){
    
    if(Input.GetAxis ("PadA") == 1) {
        obj.GetComponent.<Renderer>().enabled = true;
        obj.GetComponent.<AudioSource>().Play();
    }
    
    if(Input.GetAxis("PadRightTrigger") >= 0.1){
        obj.GetComponent.<Renderer>().enabled = true;
        obj.GetComponent.<AudioSource>().Play();
    }
}
