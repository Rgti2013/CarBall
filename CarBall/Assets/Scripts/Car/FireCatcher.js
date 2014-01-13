#pragma strict

private var configurableJoint : ConfigurableJoint;
public var gamePlayLogic : GamePlayLogic;
private var power : Vector3;
public var playerId : int;

function Start () {

}

function Update () {

	if(playerId == 1){

		if(Input.GetKeyDown(KeyCode.N)){
			
			power = gamePlayLogic.player1Power;
			configurableJoint = GetComponent(ConfigurableJoint);
			configurableJoint.targetVelocity = power;
		}
		else if(Input.GetKeyUp(KeyCode.N)){

			configurableJoint = GetComponent(ConfigurableJoint);
			configurableJoint.targetVelocity = Vector3(0, 0, -2);
		}
	}
	else if(playerId == 2){

		if(Input.GetKeyDown(KeyCode.G)){
			
			power = gamePlayLogic.player2Power;
			configurableJoint = GetComponent(ConfigurableJoint);
			configurableJoint.targetVelocity = power;
		}
		else if(Input.GetKeyUp(KeyCode.G)){

			configurableJoint = GetComponent(ConfigurableJoint);
			configurableJoint.targetVelocity = Vector3(0, 0, -2);
		}
	}
}