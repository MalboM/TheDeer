public var suono : GameObject;

public var modello : GameObject;

var stringa : String;

function OnTriggerEnter(other:Collider) {
// Debug-draw all contact points and normals
   /// for (var contact : ContactPoint in other.contacts)
		//{
		
		 if(other.gameObject.tag == stringa){
			
			modello.GetComponent.<Renderer>().enabled =true;
			
			Destroy(other.gameObject);
			
			suono.GetComponent.<AudioSource>().Play();
			
		//}
		
		}
}

