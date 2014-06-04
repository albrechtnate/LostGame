var myTransform : Transform;
var speed : float = 5.0;
 
function Update () {
	transform.LookAt(myTransform);
	transform.Translate(Vector3(0,0,speed) * Time.deltaTime);
}