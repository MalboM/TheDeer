
var oggetto : GameObject;

var animazione : String;

function OnMouseEnter () {

	oggetto.GetComponent.<Animation>().CrossFade(animazione);

}