#pragma strict

private var magnetForce : Vector3;
private var inside : boolean;
private var ball : Collider;
private var radius : float = 5f;
private var force : float = 100f;
private var index : float;

function OnTriggerEnter (other : Collider) {

	ball = other;

	if(other.tag == "ball") {
		inside = true;
	}
}

function OnTriggerExit(other : Collider) {

	ball = other;
	if(other.tag == "ball") {
		inside = false;
	}
}

if(inside) {

	magnetForce = transform.position - ball.transform.position;
	index = (radius - magnetForce.magnitude) / radius;
	ball.rigidbody.AddForce(force * magnetForce * index, ForceMode.Impulse);
}