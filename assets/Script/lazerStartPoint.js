#pragma strict

var lazer: GameObject;
var fireSpeed: float;

function Start () {
	lazerFireing();
}

function Update () {
}

function lazerFireing(){
	while(true){
		yield WaitForSeconds(fireSpeed);
		Instantiate(lazer,transform.position,transform.rotation);
	}
}