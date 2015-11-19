var oggetto : GameObject;
var tex : Texture2D;
var boleano : boolean;

boleano = true;

function OnMouseEnter () {


	if (boleano== true){
	oggetto.GetComponent.<Renderer>().material.mainTexture = tex;
	
	oggetto.GetComponent.<AudioSource>().Play();
	
	boleano = false;
	}
}