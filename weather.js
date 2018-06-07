$(document).ready(function() {
    
   $("form").submit(function(event) {
      event.preventDefault();
      //zipcode
      var zipCode = $("#input").val();
      // console.log(zipCode);
      //Weather API-URL
      var URL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&units=imperial&APPID=865f583ab7e2e42228c051145a844358";
  
      
    $.get(URL)
     //If successful, do this with the data
    .then(function(response){
      console.log(response);

      //pull out data you want
      //icon
      var icon = response.weather[0].icon
      
      //city
      var city = response.name;
      
      //temperature
      var temperature = response.main.temp;
      
      //description
      var description = response.weather[0].description


      //humidity
      var humidity = response.main.humidity;
      
      //sunrise
      var sunrise = new Date(response.sys.sunrise * 1000);

      //sunset
      var sunset = new Date(response.sys.sunset * 1000);

      //draw data to page
      var $mainDiv = $(`<div />`).appendTo(`body`);
      $mainDiv.attr(`class`, `container`);

      var $content =$(`<p />`, {text: `The current temperature in ${city} is ${temperature} degrees(F) with ${description}. Humidity is at ${humidity} %.`});

      $mainDiv.append($content);






  


  //       // $("#logo").attr("src", "http://openweathermap.org/img/w/" + logo + ".png");
  //       // $("#city").html(city);
  //       // $("#temperature").html(temperature);
  //       // $("#description").html(description);
  //       // $("#wind").html(wind);
  //     }
  
      })
      
  //  //end form submit
  
   });
  }) 