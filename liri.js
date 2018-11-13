// require("dotenv").config();


//keysn
// var spotify = new Spotify(keys.spotify); //spotifykey

const command = process.argv[2]

// ******* Switch Command*****/
// if (error) {
//     return console.log(error);
//    }

//  switch(command) {
//      case "concert-this":
//      console.log("concert")
    
//      break;

//      case "spotify-this-song":
//      console.log("spotify")
//      break;

//      case "movie-this":
//      console.log("movie")
//      break;

// //      case "do-what-it-says":
// //      console.log("???")
// //      break;

//  }



// // }); //the fs call


// ********* OBDM FUNCTION ****************// 


        var request = require("request");

        // Then run a request to the OMDB API with the movie specified
        request("http://www.omdbapi.com/?t=the+matrix&y=&plot=short&apikey=trilogy", function(error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            // console.log(body)
            console.log("The movie's Title is: " + JSON.parse(body).Title);
            console.log("The movie came out in: " + JSON.parse(body).Year);
            console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
            // console.log("Rotten Tomatoes movie rating: " + JSON.parse(body).Source.RottenTomatoes.Values); //rotten tomatoes
            console.log("The movie was produced in: " + JSON.parse(body).Country);
            console.log("The movie was produced in: " + JSON.parse(body).Language);
            console.log("Movie Plot: " + JSON.parse(body).Plot);
            console.log("Movie Actors: " + JSON.parse(body).Actors);

        }
        });



const axios = require('axios');
var moment = require('moment');

axios.get("https://rest.bandsintown.com/artists/brockhampton/events?app_id=codingbootcamp") //bands in town api call
.then(function (response) {
    // console.log(response);
        for (var i = 0; i < response.data.length; i++) { //loop through venues
        console.log("Venue " + [i] + ": " + response.data[i].venue.name)
        console.log("Venue Location " + [i] + ": " + response.data[i].venue.city)
        console.log(moment(response.data[i].datetime).format('MMMM Do YYYY, h:mm:ss a')) //MOMENNNNT 

        }
})
.catch(function (error) {
    console.log(error);
});


//******SPOTIFY**** */
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "ed70995a639a415ea5948cc1d1f97370",
  secret: "aa374329103246c2bb7c1752b2146bdd"
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
//   console.log (JSON.stringify(data)); 
console.log("Artist: " + JSON.stringify(data.tracks.items[0].album.artists[0].name))
console.log("Album Name: " + JSON.stringify(data.tracks.items[0].album.name));
console.log("Song Name: " + JSON.stringify(data.tracks.items[0].name));
// console.log(JSON.stringify(data.tracks.items[0].preview_url)); fixxx this later
  });

  // ask will 1. How to run each in a switch command? 2. Argv? 
  
//************************** */

