var suono : GameObject;

var fondale: GameObject;

var lifeTime = 2.0;

var timer = 0.0;


var i : int;
i=0;

function OnTriggerEnter (col : Collider) {
	if (col.gameObject.tag == "cervo") {
		
		i = 1;
		
	}
}

function Update() {
	
	if(i == 1){
		
		timer ++;
	
		fondale.GetComponent.<Renderer>().material.color += Color(0, 0, 0) * Time.deltaTime;
		if (timer >= lifeTime) {
		
				i++;
			
		}
	}

}