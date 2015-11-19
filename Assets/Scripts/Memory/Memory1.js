var carta1 : GameObject;
var carta2 : GameObject;

var tex : Texture2D;
var tex2 : Texture2D;

var attivato : boolean;

private var lifeTime = 0.9;

var timer = 0.0;

var conteggio : int;


function OnMouseDown () {
	
	if(conteggio == 0){
	carta1.GetComponent.<Renderer>().material.mainTexture = tex;
	attivato = true;
	GameObject.Find("Main Camera").GetComponent.<AudioSource>().Play();
	}
	
}

function Update() {

	if(attivato == true){
		
		timer += Time.deltaTime;
		
		
		
		if(timer >= lifeTime){
			timer = 0;
			carta1.GetComponent.<Renderer>().material.mainTexture = tex2;
			attivato = false;
	
		}
		
		if(carta2.GetComponent.<Renderer>().material.mainTexture == tex) {
		
			conteggio = 1;
			carta1.GetComponent.<Renderer>().material.mainTexture = tex;
			carta2.GetComponent.<Renderer>().material.mainTexture = tex;
		}
		
	}
	
}