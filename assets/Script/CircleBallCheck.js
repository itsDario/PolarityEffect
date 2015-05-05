#pragma strict

var push: boolean;
var pull: boolean;
var over: boolean;
var rotateleft: boolean;
var rotateright:boolean;

var target: Vector3;
private var power: float = 5;

function Start () {

}

function Update () {

}

function OnTriggerStay(other: Collider){
	if(other.gameObject.tag == "Player"){
		var ball : Ball;
		var direction = target - other.gameObject.transform.position;
		direction.Normalize();
		ball = other.gameObject.GetComponent(Ball);
		//direction.Normalize();
		if(push){
			//ball.move(-direction * power);
		}else if(pull){
			//ball.move(direction * power);
		}
		if(true){ // was rotateleft
			ball.rotate(target, 1 * power);
		}if(rotateright){
			ball.rotate(target, -1 * power);
		}
		
	}
}