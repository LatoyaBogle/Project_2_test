//initial wger api request
var request = require("request");

function wger() {
  request("https://wger.de/api/v2/exercise/?limit=1000&language=2&status=2&format=json", function(error, res, req, body){
    if(error) {
      // If there is an error, tell the user 
      res.json('An erorr occured');
  }
  // Otherwise do something with the API data and send a response
  else {
      //res.json(body);
  }
  //console.log(req);
  console.log(req);
  });
 
  };

  //wger();

  //function showing list of exercises
  function exerciseName() {
    
    request("https://wger.de/api/v2/exercise/?limit=1000&language=2&status=2&format=json", function(error, res, req, body){
    if(error) {
      // If there is an error, tell the user 
      res.json('An erorr occured');
  }
  // Otherwise do something with the API data and send a response
  else {
      //res.json(body);
      var nameParse = JSON.parse(req);
      var results = nameParse.results;
      for (i=0; i<results.length; i++) {
       var exerciseName = (results[i].name); 
       console.log(typeof exerciseName);

      }
  }

  //console.log(exe);
  //console.log(results);
  });
 
  };

  //exerciseName();

//function for description
  function exerciseDescription() {
    
    request("https://wger.de/api/v2/exercise/?limit=1000&language=2&status=2&format=json", function(error, res, req, body){
    if(error) {
      // If there is an error, tell the user 
      res.json('An erorr occured');
  }
  // Otherwise do something with the API data and send a response
  else {
      //res.json(body);
      var nameParse = JSON.parse(req);
      var results = nameParse.results;
      for (i=0; i<results.length; i++) {
       var exerciseDescrip = (results[i].description); 
       console.log(exerciseDescrip);

      }
  }

  //console.log(exe);
  //console.log(results);
  });
 
  };

  //exerciseDescription();


  function muscleGroup() {
   
    
      request("https://wger.de/api/v2/exercisecategory/?limit=1000&language=2&status=2&format=json", function(error, res, req, body){
      if(error) {
        // If there is an error, tell the user 
        res.json('An erorr occured');
    }
    // Otherwise do something with the API data and send a response
    else {
        //res.json(body);
        var nameParse = JSON.parse(req);
        var results = nameParse.results;
        for (i=0; i<results.length; i++) {
         var muscleGroup = (results[i].name); 
         var muscleGroupid = (results[i].id);///matches the number for the exercise category
         console.log(typeof muscleGroupid);
  
        }
    }
  
    //console.log(exe);
    //console.log(results);
    });
   
    };
  

  //muscleGroup();

  function exerciseCategory() {
   
    
    request("https://wger.de/api/v2/exercise/?limit=1000&language=2&status=2&format=json", function(error, res, req, body){
    if(error) {
      // If there is an error, tell the user 
      res.json('An erorr occured');
  }
  // Otherwise do something with the API data and send a response
  else {
      //res.json(body);
      var nameParse = JSON.parse(req);
      var results = nameParse.results;
      for (i=0; i<results.length; i++) {
       var exerciseCategory = (results[i].category); 
       console.log(exerciseCategory); //has multiple of the same number listed
       console.log(typeof exerciseCategory);//shows as a number for type of to match muscle id

      }
  }

  //console.log(exe);
  //console.log(results);
  });
 
  };

//exerciseCategory();

function possible (){

  request("https://wger.de/api/v2/exercise/?limit=1000&language=2&status=2&format=json", function(error, res, req, body){
    if(error) {
      // If there is an error, tell the user 
      res.json('An erorr occured');
  }
  // Otherwise do something with the API data and send a response
  else {
      //res.json(body);
      var nameParse = JSON.parse(req);
      var results = nameParse.results;

    

  for (var i = 0; i < response.events.length; i++) {

    var event = {

      
        "count": 552,
        "next": "https://wger.de/api/v2/exercise/?page=2",
        "previous": null,
        "results": [
            {
                "id": "" ,
                "license_author": "",
                "status": "",
                "description": "",
                "name": "",
                "name_original": "",
                "creation_date": "",
                "uuid": "",
                "license": 2,
                "category": 8,
                "language": 2,
                "muscles": [],
                "muscles_secondary": [],
                "equipment": []
            },

            if (response.events[i].hasOwnProperty("name") && response.events[i].status.lon != 0) {

              event.results.name.push(response.events[i].venue.lon);
              

              events.features.push(event);
          }
          else { 
              event.geometry.coordinates.push(response.events[i].group.lon);
              event.geometry.coordinates.push(response.events[i].group.lat);
              event.properties.name = response.events[i].name;
              event.properties.link = response.events[i].link;
              event.properties.visibility = response.events[i].visibility;
              event.properties.address = response.events[i].group.localized_location;

              events.features.push(event);
          }

      }
          
      },
}


