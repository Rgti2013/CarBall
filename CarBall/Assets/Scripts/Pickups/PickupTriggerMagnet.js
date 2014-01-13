#pragma strict

public var gamePlayLogic : GamePlayLogic;
private var carName : String;

function OnTriggerEnter (other : Collider) {

	carName = other.transform.parent.gameObject.name;
	if(other.tag == "car") {

		if(carName == "Beetle1") {
			gamePlayLogic.addPower(1, Vector3(0, 0, 5));
		} else if(carName == "Beetle2") {
			gamePlayLogic.addPower(2, Vector3(0, 0, 5));
		}
	}
	Destroy(transform.root.gameObject);
}