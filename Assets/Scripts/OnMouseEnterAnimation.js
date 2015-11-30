#pragma strict

var animazione : GameObject;



function OnMouseEnter () {
    animazione.GetComponent.<Animation>().Play();
}





function OnTriggerEnter(other:Collider){
    
    animazione.GetComponent.<Animation>().Play();
}
