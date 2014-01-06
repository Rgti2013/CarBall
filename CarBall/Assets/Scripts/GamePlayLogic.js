#pragma strict

var player1Score : int = 0;
var player2Score : int = 0;
public var resetTime : float = 3;

private var timer : float = resetTime;
private var timerRunning : boolean = false;

function Start () {

}

function Update () {
	// Update HUD
	// TODO: Add HUD and update it
	
	// Control the timer
	if(timerRunning) {
		timer -= Time.deltaTime;
		
		if(timer < 0) {
			timerRunning = false;
			timer = resetTime;
			
			// Reposition the objects
			repositionScene();
		}
	}
	
}

function startTimer() {
	timerRunning = true;
	
	// For test purposes
	Debug.Log("Score -> " + player1Score + ":" + player2Score);
}

function isTimerRunning() {
	return timerRunning;
}

function addToScore(pId : int, points : int) {
	if(pId == 1) {
		player1Score += points;
	} else if(pId == 2) {
		player2Score += points;
	}
}

function repositionScene() {
	// TODO: Reposition the ball and the cars
	
}