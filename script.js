





var data =[]
var days =[]
var loct =[]

var links = document.querySelector('#search')

links.addEventListener('keyup' , function(e){
  var elemnt = e.target
  var inpuut = elemnt.value
  weather(inpuut)
})
weather('alex')

function weather(rain){

  var http = new XMLHttpRequest();
  http.open('get',`https://api.weatherapi.com/v1/forecast.json?key=18098b1eab884c30960124359240501&q=${rain}&days=3`)
  http.send();
  
  http.addEventListener('readystatechange' , function(){
    if(http.readyState == 4 && http.status === 200 ){
      data = JSON.parse(http.response)
      days = data.forecast.forecastday
      loct = data.location.name
      display()
    }

  })
}



function display(){


const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let mon = new Date(days[0].date);
var thisForMonuth = month[mon.getMonth()]

let date = new Date(days[0].date);
var thisForDate = date.getDate();
var thisFormDay = weekDays[date.getDay()];

    var one =
      `
      
      <div class="forecast-container rounded-start-3" id="forecast">
        <div class="today forecast">
<div class="forecast-heade d-flex" id="today">
<div class="day text-center">${thisFormDay}</div>
<div class="day text-center ms-auto">${thisForDate} ${thisForMonuth}</div>
</div> 
<div class="forecast-content" id="current" style="padding-top:25px;>
<div class="location">${loct} <h5 class="perpel">I Wish a Nice Day Habiba Hagag❤️</h5></div>
<div class="degree">
    <div class="num w-50 ps-3">${days[0].day.maxtemp_c}<sup>o</sup>C</div>
  
    <div class="forecast-icon">
        <img src="https:${days[0].day.condition.icon}" alt="" width="90">
    </div>       
</div>
<div class="custom ps-4">${days[0].day.condition.text}</div>
<div id="rg"><i class="fa-solid fa-umbrella"></i>${days[0].day.daily_chance_of_rain} %<i class="fa-solid fa-wind"></i>${days[0].day.maxwind_kph}km/h<i class="fa-regular fa-compass"></i>EAST</div>
  </div>
  </div>
      </div>
    
      `  
      ;

       date = new Date(days[1].date);

      var thisFormDay = weekDays[date.getDay()];

    var two =
      `
      
      <div class="forecast-container" id="forecast">
        <div class="today forecast">
<div class="forecast-heade " id="today">
<div class="day text-center">${thisFormDay}</div>
</div> 
<div class="forecast-content" id="current">
<div class="forecast-icon mb-3 text-center">
<img src="https:${days[1].day.condition.icon}" alt="" width="70">
</div> 
<div class="degree text-center">
    <div class="maxc fw-bolder fs-3">${days[1].day.maxtemp_c}<sup>o</sup>C</div>
    <div class="minc">${days[1].day.mintemp_c}<sup>o</sup>C</div>
  
      
</div>
<div class="custom text-center pb-5 p-4">${days[1].day.condition.text}</div>
<div id="rg"><i class="fa-solid fa-umbrella"></i>${days[1].day.daily_chance_of_rain} %<i class="fa-solid fa-wind"></i>${days[1].day.maxwind_kph}km/h<i class="fa-regular fa-compass"></i>EAST</div>
  </div>
  </div>
      </div>
    
      `  
      ;
    
      date = new Date(days[2].date);

      var thisFormDay = weekDays[date.getDay()];

    var box = '';
    for(var i = 2 ; i<3; i++){
      box+=
      `
      
      <div class="forecast-container rounded-end-3" id="forecast">
        <div class="today forecast">
<div class="forecast-heade " id="today">
<div class="day text-center">${thisFormDay}</div>
</div> 
<div class="forecast-content" id="current">
<div class="forecast-icon mb-3 text-center">
<img src="https:${days[i].day.condition.icon}" alt="" width="70">
</div> 
<div class="degree text-center">
    <div class="maxc fw-bolder fs-3">${days[i].day.maxtemp_c}<sup>o</sup>C</div>
    <div class="minc">${days[i].day.mintemp_c}<sup>o</sup>C</div>
  
      
</div>
<div class="custom text-center pb-5 p-4">${days[i].day.condition.text}</div>
<div id="rg"><i class="fa-solid fa-umbrella"></i>${days[i].day.daily_chance_of_rain} %<i class="fa-solid fa-wind"></i>${days[i].day.maxwind_kph}km/h<i class="fa-regular fa-compass"></i>EAST</div>
  </div>
  </div>
      </div>
    
      `  
      ;
    }
   
   
    document.getElementById('one').innerHTML = one
    document.getElementById('two').innerHTML = two
    document.getElementById('three').innerHTML = box
   
}















































































































