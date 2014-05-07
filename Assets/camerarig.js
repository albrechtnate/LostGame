var pointB : Vector3;
 
function Start () {
    var pointA = transform.position;
    MoveObject(transform, pointA, pointB, 3.0);
}
 
function MoveObject (thisTransform : Transform, startPos : Vector3, endPos : Vector3, time : float) {
    var i = 0.0;
    var rate = 0.5/time;
    while (i < 1.0) {
        i += Time.deltaTime * rate;
        thisTransform.position = Vector3.Lerp(startPos, endPos, i);
		transform.Rotate(Vector3.down * Time.deltaTime * 3);
        yield; 
    }
	gameObject.AddComponent ("MouseLook");
}