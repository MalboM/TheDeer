#pragma strict


var scena : int;

function Start () {

    StartCoroutine(WaitandLoad(5.0)) ;
        
}



function WaitandLoad (waitTime : float) {
  
    yield WaitForSeconds (waitTime);
       Application.LoadLevel(scena);
}