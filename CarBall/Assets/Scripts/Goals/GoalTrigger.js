#pragma strict

public var playerId : int;
public var pointsForScoring : int = 1;

public var gamePlayLogic : GamePlayLogic;

function OnTriggerEnter (other : Collider) {
	// If the entering object is a ball
	if(other.tag == "ball" && gamePlayLogic.isTimerRunning() == false) {
		Debug.Log("Field goal of player " + playerId + " got scored!");
		
		// Add to the players score
		if(playerId == 1) {
			gamePlayLogic.addToScore(2, pointsForScoring);
		} else if(playerId == 2) {
			gamePlayLogic.addToScore(1, pointsForScoring);
		}
		
		
		// Start a timer to reset the scene after given time
		gamePlayLogic.startTimer();
	
	}
}