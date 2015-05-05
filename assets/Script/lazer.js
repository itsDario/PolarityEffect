#pragma strict
var speed: float;

function Start () {

}

function Update () {
	//transform.position =  TransformDirection(transform.position.x, transform.position.y++,transform.position.z);
	GetComponent.<Rigidbody>().velocity = transform.up * speed;
}

function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag == "lazereEnd"){
		Destroy(gameObject);
	}
}