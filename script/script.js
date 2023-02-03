setTimeout(() => {
   $(".loading").hide();


 }, 4000)

      



var objToday = new Date(),
weekday = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'),
dayOfWeek = weekday[objToday.getDay()],
domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "" }(),
dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
months = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'),
curMonth = months[objToday.getMonth()],
curYear = objToday.getFullYear(),
curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;







if(curHour < 10){
$("#clock").text("0" + curHour + "." + curMinute);

}else{
$("#clock").text(curHour);
}

const word = dayOfWeek;
const firstLetter = word.charAt(0);
const firstLetterCap = firstLetter.toUpperCase();
const remainingLetters = word.slice(1);
const dayWeekss = firstLetterCap + remainingLetters;

const word2 = curMonth;
const firstLetter2 = word2.charAt(0);
const firstLetterCap2 = firstLetter2.toUpperCase();
const remainingLetters2 = word2.slice(1);
const monthsd = firstLetterCap2 + remainingLetters2;


$("#mounth").text(monthsd);






fetch('https://api.ipify.org/?format=json')
.then(res =>{
   return(res.json())
})
.then(data =>{
   let iPs = data.ip;
   fetch('https://www.iplocate.io/api/lookup/'+iPs)
   .then(res =>{
      return(res.json())
   })
   .then(data =>{
   let MnCity = data.city;







   const KEY = '7df488647cfcdb40a2d92f2bb420c7bf';

   
  

   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${MnCity}&appid=`+KEY)
      .then((response) => {
         return response.json()
      })
      .then((data) => {
         console.log(data)
         $(".main__city").text(data.city.name);

         let n1Day = data.list[6].main.temp - 273.15;
         let n2Day = data.list[14].main.temp - 273.15;
         let n3Day = data.list[22].main.temp - 273.15;
         let n4Day = data.list[30].main.temp - 273.15;
         let n5Day = data.list[38].main.temp - 273.15;


 
       

         let date1D = new Date(data.list[6].dt_txt);
         let date1DText = date1D.toLocaleString('en-us', {weekday: 'long'});
         let date2D = new Date(data.list[14].dt_txt);
         let date2DText = date2D.toLocaleString('en-us', {weekday: 'long'});
         let date3D = new Date(data.list[22].dt_txt);
         let date3DText = date3D.toLocaleString('en-us', {weekday: 'long'});
         let date4D = new Date(data.list[30].dt_txt);
         let date4DText = date4D.toLocaleString('en-us', {weekday: 'long'});
         let date5D = new Date(data.list[38].dt_txt);
         let date5DText = date5D.toLocaleString('en-us', {weekday: 'long'});

         $("#day1Text").text(date1DText);
         $("#day2Text").text(date2DText);
         $("#day3Text").text(date3DText);
         $("#day4Text").text(date4DText);
         $("#day5Text").text(date5DText);



    

         $("#day1").text(n1Day.toFixed(1) + "°");
         $("#day2").text(n2Day.toFixed(1) + "°");
         $("#day3").text(n3Day.toFixed(1) + "°");
         $("#day4").text(n4Day.toFixed(1) + "°");
         $("#day5").text(n5Day.toFixed(1) + "°");




         
         
      });


   
   
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${MnCity}&appid=7df488647cfcdb40a2d92f2bb420c7bf`)
      .then(res => res.json())
      .then(data=>{
         console.log(data)

         let feelsLike = data.main.feels_like - 273.15;
         let humidityTem = data.main.humidity;
         let windTem = data.wind.speed;
         let mainTem = data.main.temp - 273.15;



         $("#feels__like").text(feelsLike.toFixed(1) + "°");
         $("#humidity").text(humidityTem + "%");
         $("#wind").text(windTem.toFixed(1) + "km/h");
         $("#mainTemp").text("");
                
         $( "#mainTemp" ).append(mainTem.toFixed(1) + "<span>°</span>" );

   
         let controlWhether = data.weather[0].main;
         console.log(controlWhether)
         
         if(controlWhether == "Clouds"){
            iconWeahter.style.backgroundImage = "url(./img/icon__wheater/cloudy.svg)";
            wheather__bg.style.backgroundImage = "url(./img/bg/clouds.png)";


         }else if(controlWhether == "Clear" || controlWhether == "Sunny"){
            iconWeahter.style.backgroundImage = "url(./img/icon__wheater/clearSkyDay.svg)";
            wheather__bg.style.backgroundImage = "url(./img/bg/clear.png)";


         }else if(controlWhether == "Haze" || controlWhether == "Mist" || controlWhether == "Drizzle"){
            iconWeahter.style.backgroundImage = "url(./img/icon__wheater/mist.svg)";
            wheather__bg.style.backgroundImage = "url(./img/bg/haze.png)";


         }else if(controlWhether == "Rain"){
            iconWeahter.style.backgroundImage = "url(./img/icon__wheater/rain.svg)";
            wheather__bg.style.backgroundImage = "url(./img/bg/rain.png)";


         }else if(controlWhether == "Snow"){
            iconWeahter.style.backgroundImage = "url(./img/icon__wheater/snoowy.svg)";
            wheather__bg.style.backgroundImage = "url(./img/bg/swon.png)";


         }else if(controlWhether == "Thunderstorm"){
            iconWeahter.style.backgroundImage = "url(./img/icon__wheater/thunderstorm.svg)";
            wheather__bg.style.backgroundImage = "url(./img/bg/thunderstorm.png)";

         }else{
            iconWeahter.style.backgroundImage = "url(./img/icon__wheater/sunny.svg)";
            wheather__bg.style.backgroundImage = "url(./img/bg/sunny.png)";
         }
      




   
            
      
});
   



fetch(`https://api.weatherapi.com/v1/current.json?key=83664bb452434c02a8174114221004&q=${MnCity}`)
.then(res => res.json())
.then(data=>{
         console.log(data)

   console.log(data.current.is_day)
  

   function monthOfTheYear(day, month, year){
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      
      return months[new Date(`${day}/${month}/${year}`).getMonth()];
   }
   const date = data.location.localtime;


   const y = parseInt(date.substr(0, 4));
   const m = parseInt(date.substr(5, 2));
   const d = parseInt(date.substr(8, 2));
   
   const time = date.substr(11);
   const timeDate = parseInt(date.substr(11));
   let timeInfo = timeDate;

   $("#day").text(dayWeekss);
   $("#day__number").text(d);
   $("#clock").text(time);

   
 


});

   
})

});



$("#newLocation").click(function () { 
   let newCity = $("#chaned__location").val();
   if(newCity.length != 0){

         const KEY = '7df488647cfcdb40a2d92f2bb420c7bf';
      
         
        
      
         fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newCity}&appid=`+KEY)
            .then((response) => {
               return response.json()
            })
            .then((data) => {
               $(".main__city").text(data.city.name);
      
               let n1Day = data.list[6].main.temp - 273.15;
               let n2Day = data.list[14].main.temp - 273.15;
               let n3Day = data.list[22].main.temp - 273.15;
               let n4Day = data.list[30].main.temp - 273.15;
               let n5Day = data.list[38].main.temp - 273.15;
      
      
       
              
             
         let date1D = new Date(data.list[6].dt_txt);
         let date1DText = date1D.toLocaleString('en-us', {weekday: 'long'});
         let date2D = new Date(data.list[14].dt_txt);
         let date2DText = date2D.toLocaleString('en-us', {weekday: 'long'});
         let date3D = new Date(data.list[22].dt_txt);
         let date3DText = date3D.toLocaleString('en-us', {weekday: 'long'});
         let date4D = new Date(data.list[30].dt_txt);
         let date4DText = date4D.toLocaleString('en-us', {weekday: 'long'});
         let date5D = new Date(data.list[38].dt_txt);
         let date5DText = date5D.toLocaleString('en-us', {weekday: 'long'});

         $("#day1Text").text(date1DText);
         $("#day2Text").text(date2DText);
         $("#day3Text").text(date3DText);
         $("#day4Text").text(date4DText);
         $("#day5Text").text(date5DText);
              
      
               $("#day1").text(n1Day.toFixed(1) + "°");
               $("#day2").text(n2Day.toFixed(1) + "°");
               $("#day3").text(n3Day.toFixed(1) + "°");
               $("#day4").text(n4Day.toFixed(1) + "°");
               $("#day5").text(n5Day.toFixed(1) + "°");
      
      
      
      
               
               
            });
      
      
         
         
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=7df488647cfcdb40a2d92f2bb420c7bf`)
            .then(res => res.json())
            .then(data=>{
               let feelsLike = data.main.feels_like - 273.15;
               let humidityTem = data.main.humidity;
               let windTem = data.wind.speed;
               let mainTem = data.main.temp - 273.15;
      
      
      
               $("#feels__like").text(feelsLike.toFixed(1) + "°");
               $("#humidity").text(humidityTem + "%");
               $("#wind").text(windTem.toFixed(1) + "km/h");
               $("#mainTemp").text("");
                      
               $( "#mainTemp" ).append(mainTem.toFixed(1) + "<span>°</span>" );
      
            
   
            let controlWhether = data.weather[0].main;
            console.log(controlWhether)
         
            
            if(controlWhether == "Clouds"){
               iconWeahter.style.backgroundImage = "url(./img/icon__wheater/cloudy.svg)";
               wheather__bg.style.backgroundImage = "url(./img/bg/clouds.png)";


            }else if(controlWhether == "Clear" || controlWhether == "Sunny"){
               iconWeahter.style.backgroundImage = "url(./img/icon__wheater/clearSkyDay.svg)";
               wheather__bg.style.backgroundImage = "url(./img/bg/clear.png)";


            }else if(controlWhether == "Haze" || controlWhether == "Mist" || controlWhether == "Drizzle"){
               iconWeahter.style.backgroundImage = "url(./img/icon__wheater/mist.svg)";
               wheather__bg.style.backgroundImage = "url(./img/bg/haze.png)";


            }else if(controlWhether == "Rain"){
               iconWeahter.style.backgroundImage = "url(./img/icon__wheater/rain.svg)";
               wheather__bg.style.backgroundImage = "url(./img/bg/rain.png)";


            }else if(controlWhether == "Snow"){
               iconWeahter.style.backgroundImage = "url(./img/icon__wheater/snoowy.svg)";
               wheather__bg.style.backgroundImage = "url(./img/bg/swon.png)";


            }else if(controlWhether == "Thunderstorm"){
               iconWeahter.style.backgroundImage = "url(./img/icon__wheater/thunderstorm.svg)";
               wheather__bg.style.backgroundImage = "url(./img/bg/thunderstorm.png)";

            }else{
               iconWeahter.style.backgroundImage = "url(./img/icon__wheater/sunny.svg)";
               wheather__bg.style.backgroundImage = "url(./img/bg/sunny.png)";
            }
        
      
         
                  
            
      });
         
      
      
      
fetch(`https://api.weatherapi.com/v1/current.json?key=83664bb452434c02a8174114221004&q=${newCity}`)
.then(res => res.json())
.then(data=>{

   function monthOfTheYear(day, month, year){
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      
      return months[new Date(`${day}/${month}/${year}`).getMonth()];
   }
   const date = data.location.localtime;


   const y = parseInt(date.substr(0, 4));
   const m = parseInt(date.substr(5, 2));
   const d = parseInt(date.substr(8, 2));
   
   const time = date.substr(11);
   const timeDate = parseInt(date.substr(11));
   let timeInfo = timeDate;

   $("#day").text(dayWeekss);
   $("#day__number").text(d);
   $("#clock").text(time);


  
  
 


});
         
      

    
   }

   $("#chaned__location").val("");


 });






$(".burger").click(function () { 
   $(".right__container").addClass("right__container__active");
   
});

$(".main").click(function () { 
   $(".right__container").removeClass("right__container__active");
});

$(".right__box").click(function () { 
   $(".right__container").removeClass("right__container__active");
});



