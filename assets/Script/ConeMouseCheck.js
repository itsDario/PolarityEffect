#pragma strict

private var colliderScript: ConeBallCheck;
private var colliderChild: GameObject;
private var endBox: GameObject;

function Start () {
	colliderChild =  transform.Find("HitBox").gameObject;
	colliderScript = colliderChild.GetComponent("ConeBallCheck");
	
	endBox = transform.Find("endBox").gameObject;


	colliderScript.push = false;
    colliderScript.pull = false;
    colliderScript.over = false;
    colliderScript.target = transform.position;
}

function Update () {

}

function OnMouseOver(){
	endBox.transform.position.y = 1;
   colliderScript.over = true;
   colliderScript.target = transform.position;
   
   if(Input.GetMouseButton(1)){
      colliderScript.push = true;
   }else if(Input.GetMouseButton(0)){
  	  colliderScript.pull = true;
   }else{
      colliderScript.push = false;
      colliderScript.pull = false;
   }
   /*
   if(Input.GetKey("left")){
   		colliderScript.rotateleft = true;
   		colliderScript.rotateright = false;
   }else if(Input.GetKey("right")){
   		colliderScript.rotateleft = false;
   		colliderScript.rotateright = true;
   }else{
   		colliderScript.rotateleft = false;
   		colliderScript.rotateright = false;
   }
   */
}

function OnMouseExit(){
	colliderScript.push = false;
    colliderScript.pull = false;
    colliderScript.over = false;
	endBox.transform.position.y = -20;
}