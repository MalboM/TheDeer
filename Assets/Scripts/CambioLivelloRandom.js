
var suono : GameObject;
var livello : int;
var dissolvenza : Animator;
var waittime : float;
var livellorandom : int;

function Start(){

    livellorandom = Random.Range(1,3);
     

}


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
    
    if(livellorandom  == 1)
    {
        Application.LoadLevel(3);
    }
    else if(livellorandom == 2)
    {
        Application.LoadLevel(9);
    }
    else if(livellorandom == 3)
    {
       
        Application.LoadLevel(10);
    }
  

}