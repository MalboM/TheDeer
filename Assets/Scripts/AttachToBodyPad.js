
var i : int;

var mouse : GameObject;
var mousey : float;
var mousex : float;

var osso: GameObject;
var attaccato : boolean;

function Update(){

    mouseposition = mouse.transform.position;
    Debug.Log(mouseposition);

    if (attaccato == true)
         osso.transform.position = mouseposition;
}


function OnTriggerStay(other:Collider){
  
    if(other.gameObject.tag == "Mouse")
    {
    
        if(Input.GetAxis ("PadA") == 1) {
            attaccato = true;
        }
        
        if(Input.GetAxis ("PadB") == 1) {
            attaccato = false;
        }

        if(Input.GetAxis("PadRightTrigger") >= 0.1){
            attaccato = true;
        }


       
    }
}