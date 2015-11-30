
var suono : GameObject;
var livello : int;
var dissolvenza : Animator;
var waittime : float;

function OnMouseEnter () {
	
	suono.GetComponent.<AudioSource>().Play();

}

function OnTriggerEnter(other:Collider){
    
    suono.GetComponent.<AudioSource>().Play();

}

function OnMouseDown () {
    dissolvenza.SetBool("DissolvenzaBool",true);
   
    StartCoroutine(WaitandLoad()) ;
}


function Update(){

   // if(Mathf.Round(Input.GetAxisRaw("PadRightTrigger")) < 0){
    //    dissolvenza.SetBool("DissolvenzaBool",true);
    
   //     StartCoroutine(WaitandLoad()) ;
   // }

}



function OnTriggerStay(other:Collider){
    
    if(Input.GetAxis ("PadA") == 1) {
        dissolvenza.SetBool("DissolvenzaBool",true);
    
          StartCoroutine(WaitandLoad()) ;
    }
    
      if(Input.GetAxis("PadRightTrigger") >= 0.1){
      dissolvenza.SetBool("DissolvenzaBool",true);
    
        StartCoroutine(WaitandLoad()) ;
    }
}



function WaitandLoad () {
  
    yield WaitForSeconds (waittime);
    Application.LoadLevel(livello);

}