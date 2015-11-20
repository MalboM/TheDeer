import System.Collections.Generic;

var i : float;
var t : float;
var prova : float;

var translationvertical : float;
var translationhorizontal : float;

var speed : float;

var limitey : float;
var limitey2 : float;

function Update () {
			
	
	
	this.transform.Translate(Vector3.up *i* -2* Time.deltaTime, Space.World);
	this.transform.Translate(Vector3.right *t*2* Time.deltaTime, Space.World);
	
	

	if ((Input.GetAxisRaw("RightJoystickVertical") <limitey) || (Input.GetAxisRaw("RightJoystickVertical") >limitey2) )
		
       	 {
            prova = 1;
            i = Input.GetAxisRaw ("RightJoystickVertical") ;
             
    }
    else{
    
    prova = 0;
    i = 0;
    }
    
    
    
    if ((Input.GetAxisRaw("RightJoystickHorizontal") <limitey) || (Input.GetAxisRaw("RightJoystickHorizontal") >limitey2) )
		
       	 {
            prova = 1;
           	t = Input.GetAxisRaw ("RightJoystickHorizontal") ;	
	
             
    }
    else{
    
    prova = 0;
    t = 0;
    }
    
    
//    if (Input.GetAxis("RightJoystickHorizontal"))
//        {
//             t = 1;
//             
//    }
//       else {t = 0;}
//    
}