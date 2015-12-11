var img;
var temp;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(170,230,120);
  //     loadImage("assets/location_Icon.png", function(img) {
  //     image(img, 0, 0);
  // });
  // Request the data from openweathermap
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=Chicago,IL&units=imperial&APPID=7bbbb47522848e8b9c26ba35c226c734';
  loadJSON(url, gotWeather);
  
}





// }

function gotWeather(weather) {
  var lat = weather.coord.lat;
  var long = weather.coord.lon;
  temp = weather.main.temp;
  var name= weather.name;
  
  if (temp>55) {
  background( "#FF9C00");
}
else{
  background("#336699");
}
  
  //print(lat);
  textSize(16);
  text('Name:- '+name, 50, 30);
  textSize(16);
  text('Latitude:- '+lat, 50, 50);
  textSize(16);
  text('Longitude:- '+long, 50, 70);
  textSize(16);
  text('Temperature:-'+temp, 50, 90);

  //function draw() {
//   background(0,0,0);

}  



  // var temperatureDiv = createDiv(weather.coord.lat);
  // var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");
  

