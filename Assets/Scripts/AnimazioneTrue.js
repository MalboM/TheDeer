var animazione : GameObject;
var animazionestring : String;
var i : int;

i = 0;


function OnMouseDown () {
	
	if(i == 0){
	animazione.GetComponent.<Animation>().CrossFade(animazionestring);
	animazione.GetComponent.<AudioSource>().Play();
	i++;
	}
}