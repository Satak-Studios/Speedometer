var x, y, a, b, _dist, _speed = 0;

function getFirstPos(){
    navigator.geolocation.getCurrentPosition(showPositionOld);
    setInterval(getSecondPos, 10000);
}

function getSecondPos(){
    navigator.geolocation.getCurrentPosition(showPositionNew);
    setInterval(getFirstPos, 10000);
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
    CalcGeoSpeed(x,y,a,b)
}

function CalcGeoSpeed(lat1, lon1, lat2, lon2) {
    function toRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    var R = 6371000;
    var dLat = toRadians(lat2 - lat1);
    var dLon = toRadians(lon2 - lon1); 
    var lat1Rad = toRadians(lat1);
    var lat2Rad = toRadians(lat2);
    
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    var _dist = R * c;
    document.getElementById('disto').innerHTML = "Distance: " + _dist + " meters";
    
    var _speed = _dist / 10;
    document.getElementById('speedo').innerHTML = _speed + " m/s";
}

