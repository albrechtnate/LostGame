var health : int = 10;

function Start () {

}

var box : Transform;
 
function Update () {
 
 var dist : float = Vector3.Distance(box.position, transform.position);
 Debug.Log(dist);
 
 if(dist <= 10){
  health -= 1;
	yield WaitForSeconds (0.25);
 }else{
  box.light.enabled = false;
 }
}