using UnityEngine;
using System.Collections;

//[ExecuteInEditMode]
public class StartScreen : MonoBehaviour 
{
	//public string LevelToLoad = 1;

	public void startbutton()
	{
		    Application.LoadLevel(1);
	}
}