var bianco : GameObject;

var attivato : boolean;
var attivato2 : boolean;

var lifeTime = 3.0;

var lifeTime2 = 6.0;

var timer = 0.0;

var timer2 = 0.0;

var testo : TextMesh;
var testomaterial : TextMesh;
function OnMouseOver() {

	attivato = true;
	testomaterial = testo.transform.GetComponent(TextMesh);
}

function Update() {
	
	if(attivato) {
	    bianco.GetComponent.<Renderer>().material.color += Color(0, 0, 0) * Time.deltaTime;
	    testomaterial.color.a = testomaterial.color.a + 0.07;
	
	timer += Time.deltaTime;
	
	}

    if (timer2 >= 2)
        testomaterial.color.a = testomaterial.color.a - 0.01;

	if (timer >= lifeTime) {
				
	    bianco.GetComponent.<Renderer>().material.color -= Color(0, 0, 0) * Time.deltaTime;

	 

		attivato = false;
		
		
		timer2 += Time.deltaTime;
		
			if (timer2 >= lifeTime2) {
			
			timer = 0;
			timer2 = 0;
			attivato = false;
			
			}
	}
	
	
	

}


function OnTriggerEnter(other:Collider){
   
    attivato = true;
    testomaterial = testo.transform.GetComponent(TextMesh);
}


