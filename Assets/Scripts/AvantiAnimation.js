
var animazione : String;
var telecamera : Animator;

function OnMouseDown() {

    telecamera.SetBool(animazione,true);
}


function OnTriggerStay(other:Collider){
    
    if(Input.GetAxis ("PadA") == 1) {
        telecamera.SetBool(animazione,true);
    }
    
    if(Input.GetAxis("PadRightTrigger") >= 0.1){
        telecamera.SetBool(animazione,true);
    }
}