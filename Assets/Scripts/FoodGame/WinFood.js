
var deerwin : GameObject;

var cibo1 : GameObject;
var cibo2 : GameObject;
var cibo3 : GameObject;
var cibo4 : GameObject;
var cibo5 : GameObject;



function Update () {


    if((cibo1.GetComponent.<Renderer>().enabled == true) && (cibo2.GetComponent.<Renderer>().enabled == true)&& (cibo3.GetComponent.<Renderer>().enabled == true)&& (cibo4.GetComponent.<Renderer>().enabled == true)&& (cibo5.GetComponent.<Renderer>().enabled == true)) {
        deerwin.GetComponent.<Renderer>().enabled = true;
        deerwin.GetComponent("AudioSource").enabled = true;
    }
}