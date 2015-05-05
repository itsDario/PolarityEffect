#pragma strict

var moving: boolean;
var mdirection: Vector3;
var lineMoveSpeed: float;
var spawn: GameObject;

var ballHitByLaser : AudioClip;

var endOfLevel : AudioClip;

var TimeBonus : int = 100;


function Start () {
	moving = false;
	spawn = GameObject.FindGameObjectWithTag("start");
	transform.position = spawn.transform.position;
}

function Update () {
	mdirection.Normalize();
	if(moving){
		gameObject.GetComponent.<Rigidbody>().velocity = mdirection * lineMoveSpeed;
	}else{
		gameObject.GetComponent.<Rigidbody>().velocity = new Vector3(0,0,0);
	}
	mdirection = new Vector3(0,0,0);
	
	moving = false;
	
//	rotate();
}

function OnTriggerEnter(other: Collider){
	if(other.gameObject.tag == "end"){
		transform.position = spawn.transform.position;

		GetComponent.<AudioSource>().PlayOneShot(endOfLevel);

		SCORE.DecreaseTime = false;

	} else if(other.gameObject.tag == "lazer"){
		gameObject.GetComponent.<Rigidbody>().velocity = new Vector3(0,0,0);
		transform.position = spawn.transform.position;

		GetComponent.<AudioSource>().PlayOneShot(ballHitByLaser);
		
	} else if(other.gameObject.tag == "death"){
		gameObject.GetComponent.<Rigidbody>().velocity = new Vector3(0,0,0);
		transform.position = spawn.transform.position;
	}

	if(other.gameObject.tag == "Collectable"){
		Destroy(other.gameObject);
		SCORE.timer += TimeBonus;
		}
	if(other.gameObject.tag == "RedCollectable"){
		Destroy(other.gameObject);
		SCORE.timer += TimeBonus;
		}
}

function OnCollisionEnter(other:Collision){
	if(other.gameObject.tag == "death"){
		gameObject.GetComponent.<Rigidbody>().velocity = new Vector3(0,0,0);
		transform.position = spawn.transform.position;
	}
}

function move(direction: Vector3, power: float){
	moving = true;
	lineMoveSpeed = power;
	mdirection += direction;
	
}

function rotate(target: Vector3, direction: int){
	transform.RotateAround (target, Vector3.up, direction * 20 * Time.deltaTime);
}