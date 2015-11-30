
function OnMouseDown () {

	Application.LoadLevel(1);
	
}



function OnTriggerStay(other:Collider){
    
    if(Input.GetAxis ("PadA") == 1) {
        Application.LoadLevel(1);
    }
    
    if(Input.GetAxis("PadRightTrigger") >= 0.1){
        Application.LoadLevel(1);
    }
}
