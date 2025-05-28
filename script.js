
let btn=document.querySelector(".btn");
let cityinp=document.querySelector("#city");
let display=document.querySelector(".display");

function weather_details(city){
     return fetch(`https://goweather.herokuapp.com/weather/${city}`).then((raw)=>{
          if(!raw.ok) throw new Error("City not found");
          return raw.json();
     });
}

function show_data(details){



document.getElementById("locationName").textContent = cityinp.value.trim() || "N/A";
document.getElementById("temp").textContent = details.temperature || "N/A";
document.getElementById("condition").textContent = details.description || "N/A";
document.getElementById("wind").textContent = details.wind || "N/A";


 document.getElementById("weatherResult").classList.remove("hidden");
setTimeout(function(){
     document.getElementById("weatherResult").classList.add("hidden");
},5000);



}




btn.addEventListener("click", function(){
//   event.preventDefault();

  let city = cityinp.value.trim();
  console.log("City entered:", city);

  if (city.length > 0) {
    weather_details(city)
      .then((data) => {
     show_data(data);
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  } else {
    alert("Enter a city");
  }
});



