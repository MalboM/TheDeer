var suono : GameObject;
var livello : int;
var dissolvenza : Animator;
var waittime : float;

function OnMouseEnter () {
	
	suono.GetComponent.<AudioSource>().Play();

}


function OnMouseDown () {
    dissolvenza.SetBool("DissolvenzaBool",true);
    //Application.LoadLevel(livello);

    StartCoroutine(WaitandLoad()) ;
}





function WaitandLoad () {
  
    yield WaitForSeconds (waittime);
    Application.LoadLevel(livello);
}