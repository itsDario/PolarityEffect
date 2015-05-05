#pragma strict

var push: boolean;
var pull: boolean;
var player: boolean;
private var direction: Vector3;

var pushPower: float;

function Start () {
	direction = transform.up;
	push = false;
	player = false;
}

function Update () {

}
function OnTriggerExit(other:Collider){
	
	if(other.gameObject.tag == "Player"){
		player = false;
	}
}

function OnTriggerStay(other: Collider){
	var ball : Ball;
	if(other.gameObject.tag == "Player"){
		player = true;
	}
	if(other.gameObject.tag == "Player" && push){
		ball = other.gameObject.GetComponent(Ball);
		//direction = transform.position - other.gameObject.transform.position;
		//direction.Normalize();
		ball.move(direction, pushPower);
	}else if(other.gameObject.tag == "Player" && pull){
		ball = other.gameObject.GetComponent(Ball);
		//direction = transform.position - other.gameObject.transform.position;
		//direction.Normalize();
		ball.move(-direction, pushPower);
	}
}