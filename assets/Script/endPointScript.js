#pragma strict

function Start () {
	redFind();
}

function Update () {
	
}

function redFind(){
	while(true){
		yield WaitForSeconds(1);
		if(GameObject.FindWithTag("RedCollectable")){
			this.gameObject.tag = "forceBox";
		}else{
			this.gameObject.tag = "end";
		}
		
		if(this.gameObject.tag == "forceBox"){
			this.gameObject.GetComponent.<Renderer>().material.color = Color.gray;
		}else{
			this.gameObject.GetComponent.<Renderer>().material.color = Color.green;
		}
	}
}