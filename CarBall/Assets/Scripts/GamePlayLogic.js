﻿#pragma strict

public var player1Score : int = 0;
public var player2Score : int = 0;
public var resetTime : float = 3;

public var player1CarObject : GameObject;
public var player2CarObject : GameObject;
public var ballObject : GameObject;

private var player1CarInitPos : Vector3;
private var player1CarInitRot : Quaternion;
private var player2CarInitPos : Vector3;
private var player2CarInitRot : Quaternion;
private var ballInitPos : Vector3;
private var ballInitRot : Quaternion;

private var timer : float = resetTime;
private var timerRunning : boolean = false;

function Start () {
	player1CarInitPos = player1CarObject.transform.position;
	player1CarInitRot = player1CarObject.transform.rotation;
	player2CarInitPos = player2CarObject.transform.position;
	player2CarInitRot = player2CarObject.transform.rotation;
	ballInitPos = ballObject.transform.position;
	ballInitRot = ballObject.transform.rotation;
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
	Debug.Log("Repositioning scene!");
	
	// Reposition players
	player1Reposition();
	player2Reposition();
	
	// Reposition the ball
	ballObject.transform.position = ballInitPos;
	ballObject.transform.rotation = ballInitRot;
	ballObject.rigidbody.velocity = new Vector3(0,0,0);
	
}

function player1Reposition () {
	player1CarObject.transform.position = player1CarInitPos;
	player1CarObject.transform.rotation = player1CarInitRot;
	player1CarObject.rigidbody.velocity = new Vector3(0,0,0);
}

function player2Reposition () {
	player2CarObject.transform.position = player2CarInitPos;
	player2CarObject.transform.rotation = player2CarInitRot;
	player2CarObject.rigidbody.velocity = new Vector3(0,0,0);
}
