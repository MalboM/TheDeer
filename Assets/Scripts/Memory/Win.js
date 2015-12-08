var carta1 : GameObject;
var carta2 : GameObject;
var carta3 : GameObject;
var carta4 : GameObject;
var carta5 : GameObject;
var carta6 : GameObject;
var carta7: GameObject;
var carta8 : GameObject;
var carta9 : GameObject;
var carta10 : GameObject;
var carta11: GameObject;
var carta12: GameObject;

var deerwin: GameObject;

var texdefault : Texture2D;


var attivato : boolean;

private var lifeTime = 0.9;

var timer = 0.0;

var conteggio : int;
var win : boolean;





function Update() {


		
		
		
    if((carta1.GetComponent.<Renderer>().material.mainTexture != texdefault) && (carta2.GetComponent.<Renderer>().material.mainTexture != texdefault)&& (carta3.GetComponent.<Renderer>().material.mainTexture != texdefault)&& (carta4.GetComponent.<Renderer>().material.mainTexture != texdefault)&& (carta5.GetComponent.<Renderer>().material.mainTexture != texdefault)&& (carta6.GetComponent.<Renderer>().material.mainTexture != texdefault)&& (carta7.GetComponent.<Renderer>().material.mainTexture != texdefault)&& (carta8.GetComponent.<Renderer>().material.mainTexture != texdefault)&& (carta9.GetComponent.<Renderer>().material.mainTexture != texdefault)&& (carta10.GetComponent.<Renderer>().material.mainTexture != texdefault)&& (carta11.GetComponent.<Renderer>().material.mainTexture != texdefault)&& (carta12.GetComponent.<Renderer>().material.mainTexture != texdefault)) {
		
        win = true;
        deerwin.GetComponent.<Renderer>().enabled = true;
        deerwin.GetComponent.<AudioSource>().Play();
		}
		
	
	
}