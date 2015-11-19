public var suono : GameObject;

public var modello : GameObject;

var stringa : String;

function OnCollisionEnter(collision : Collision) {
// Debug-draw all contact points and normals
for (var contact : ContactPoint in collision.contacts)
		{
		
		 if(collision.gameObject.tag == stringa){
			
			modello.GetComponent.<Renderer>().enabled =true;
			
			Destroy(collision.gameObject);
			
			suono.GetComponent.<AudioSource>().Play();
			
		}
		
		
		}
}

