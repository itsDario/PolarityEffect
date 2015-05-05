#pragma strict

static var score: int = 0;

static var timer: float = 500.0;
static var DecreaseTime : boolean = true;

var customGuiStyleFour : GUIStyle;
var YST : String = "Score: ";

var customGuiStyleFive : GUIStyle;
var YTT : String = "Timer: ";

function Update () {



	if (DecreaseTime == true) {
		timer -= Time.deltaTime;
	}


}


function OnGUI () {

	//GUI Box
		GUI.Box (Rect(10, 10, 150, 30), YST + score, customGuiStyleFour);

		GUI.Box (Rect(10, 25, 150, 30), YTT + timer.ToString("f1"), customGuiStyleFive);
//GUI.TextField (Rect(10, 200, 400, 400), "Left click on the Magnet to push the ball. Right click on the Magnet to pull the ball. Reach the end point, avoid the lazer.");
}