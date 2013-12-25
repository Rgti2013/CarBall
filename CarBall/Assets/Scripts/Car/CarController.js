//CarController1.js

/*
 TODO: 
	 - Lower the tire friction at high speed to prevent the car flipping
	 - Control the visual representation of the wheels
	 - Adjust the friction on the wheels manually to prevent flipping
*/  

var wheels : Transform[];
var centerOfMass : Transform;

var enginePower=150.0;

private var power=0.0;
private var brake=0.0;
private var steer=0.0;

private var maxSteer= 35.0;


function Start(){
   //rigidbody.centerOfMass-=Vector3(0,-0.3, 0);
   rigidbody.centerOfMass = centerOfMass.localPosition;
}

function Update () {

	// Power the vehicle
    power=Input.GetAxis("Vertical") * enginePower * Time.deltaTime * 250.0;
    
    // Steer the vehicle
    steer=Input.GetAxis("Horizontal") * maxSteer;
    
    // Apply brakes
    brake=Input.GetKey("space") ? rigidbody.mass * 0.4: 0.0;

    
    GetCollider(0).steerAngle=steer;
    GetCollider(1).steerAngle=steer;

    if(brake > 0.0){

        GetCollider(0).brakeTorque=brake;
        GetCollider(1).brakeTorque=brake;
        GetCollider(2).brakeTorque=brake;
        GetCollider(3).brakeTorque=brake;
        GetCollider(2).motorTorque=0.0;
        GetCollider(3).motorTorque=0.0;

    } else {

        GetCollider(0).brakeTorque=0;
        GetCollider(1).brakeTorque=0;
        GetCollider(2).brakeTorque=0;
        GetCollider(3).brakeTorque=0;
        GetCollider(2).motorTorque=power;
        GetCollider(3).motorTorque=power;

    }
    
    // Handbrakes
    if(Input.GetKey(KeyCode.Space)) {
    	GetCollider(0).brakeTorque=1000f;
    	GetCollider(1).brakeTorque=1000f;
    	GetCollider(2).brakeTorque=1000f;
    	GetCollider(3).brakeTorque=1000f;
    }

}

 

function GetCollider(n : int) : WheelCollider{

    return wheels[n].gameObject.GetComponent(WheelCollider);

}