var animazione : GameObject;
var animazionestring : String;
var i : int;

i = 0;


function OnMouseOver () {
	
	if(i == 0){
	animazione.GetComponent.<Animation>().CrossFade(animazionestring);
	animazione.GetComponent.<AudioSource>().Play();
	i++;
	}
}



function OnTriggerEnter(other:Collider){
  
    if(i == 0){
        animazione.GetComponent.<Animation>().CrossFade(animazionestring);
        animazione.GetComponent.<AudioSource>().Play();
        i++;
    }
}