
var deerwin : GameObject;

var osso1 : GameObject;
var osso2 : GameObject;
var osso3 : GameObject;
var osso4 : GameObject;
var osso5 : GameObject;



function Update () {


    if((osso1.GetComponent.<Renderer>().enabled == true) && (osso2.GetComponent.<Renderer>().enabled == true)&& (osso3.GetComponent.<Renderer>().enabled == true)&& (osso4.GetComponent.<Renderer>().enabled == true)&& (osso5.GetComponent.<Renderer>().enabled == true)) {
        deerwin.GetComponent.<Renderer>().enabled = true;
        deerwin.GetComponent("AudioSource").enabled = true;
    }
}