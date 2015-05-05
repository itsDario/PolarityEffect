#pragma strict

private var colliderScript: lineMagnetBallCheck;
private var colliderChild: GameObject;
private var endBox: GameObject;

var PullingBall : AudioClip;

var PushingBall : AudioClip;

function Start () {
	colliderChild = transform.Find("ForceBox").gameObject;
	
	colliderScript = colliderChild.GetComponent("lineMagnetBallCheck");
	
	endBox = transform.Find("Stopper").gameObject;
	endBox.transform.position.y = -20;


	colliderScript.push = false;
    colliderScript.pull = false;
}

function Update () {

}

function OnMouseOver(){
	endBox.transform.position.y = 1;
   if(Input.GetMouseButton(1)){
      colliderScript.push = true;
      if(colliderScript.player){
      	GetComponent.<AudioSource>().PlayOneShot(PushingBall);
      }

   }else if(Input.GetMouseButton(0)){
  	  colliderScript.pull = true;
      if(colliderScript.player){
  	  	GetComponent.<AudioSource>().PlayOneShot(PullingBall);
  	  }


   }else{
      colliderScript.push = false;
      colliderScript.pull = false;

      GetComponent.<AudioSource>().Stop();

   }
}

function OnMouseExit(){
	endBox.transform.position.y = -20;
	colliderScript.push = false;
    colliderScript.pull = false;
}
