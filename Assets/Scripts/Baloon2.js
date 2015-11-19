var bianco : GameObject;
var bianco2 : GameObject;
var pesce1 : GameObject;
var pesce2 : GameObject;


var attivato : boolean;
var attivato2 : boolean;

var lifeTime = 3.0;

var lifeTime2 = 6.0;

var timer = 0.0;

var timer2 = 0.0;

function OnMouseDown() {

	attivato = true;
	
}

function Update() {
	
	if(attivato) {
	bianco.GetComponent.<Renderer>().material.color += Color(0, 0, 0) * Time.deltaTime;
	bianco2.GetComponent.<Renderer>().material.color += Color(0, 0, 0) * Time.deltaTime;
	pesce1.GetComponent.<Renderer>().material.color += Color(0, 0, 0) * Time.deltaTime;
	pesce2.GetComponent.<Renderer>().material.color += Color(0, 0, 0) * Time.deltaTime;

	timer += Time.deltaTime;
	
	}
	if (timer >= lifeTime) {
				
		bianco.GetComponent.<Renderer>().material.color -= Color(0, 0, 0) * Time.deltaTime;
		bianco2.GetComponent.<Renderer>().material.color -= Color(0, 0, 0) * Time.deltaTime;
		pesce1.GetComponent.<Renderer>().material.color -= Color(0, 0, 0) * Time.deltaTime;
		pesce2.GetComponent.<Renderer>().material.color -= Color(0, 0, 0) * Time.deltaTime;
		
		attivato = false;
		
		
		timer2 += Time.deltaTime;
		
			if (timer2 >= lifeTime2) {
			
			timer = 0;
			timer2 = 0;
			attivato = false;
			
			}
	}
	
	
	

}

