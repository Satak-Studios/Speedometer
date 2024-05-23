var x, y, a, b, _dist, _speed = 0;

function getFirstPos(){
    navigator.geolocation.getCurrentPosition(showPositionOld);
    setInterval(getSecondPos, 1000);
}

function getSecondPos(){
    navigator.geolocation.getCurrentPosition(showPositionNew);
    setInterval(getFirstPos, 1000);
}

function showPositionOld(position) {
  x = position.coords.latitude;
  y = position.coords.longitude;
}

function showPositionNew(position) {
    a = position.coords.latitude;
    b = position.coords.longitude;
    CalcSpeed();
}

function CalcSpeed(){
    document.getElementById('coord').innerHTML = "x: " + x + ", y: " + y + "<br>a: " + a + ", b: " + b;
    _dist = Math.sqrt((x-a)*(x-a) + (y-b)*(y-b));
    document.getElementById('dist').innerHTML = "Distance : " + _dist;
    _speed = _dist/10;
    document.getElementById('speed').innerHTML = _speed + "Units";
}