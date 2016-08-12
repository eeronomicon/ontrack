// Business Logic
// Checks the user input to detect if any of the tracks are tied at the lead
// var tiedLead = function(myInput) {
//   var tally = [];
//   for(var i = 0; i < myInput.length; i++) {
//     if(tally[myInput[i]] === undefined) {
//       tally[myInput[i]] = 1;
//     }
//     else {
//       return true;
//     }
//   }
//   return false;
// }
// Goes through user input and adds a point bonus based on the tiebreaker answer
var myScores = function(myInput) {
  if (myInput[5] === 1) {
    scRails = myInput[0] + 1;
    scDrupal = myInput[1];
    scAndroid = myInput[2];
    scDesign = myInput[3];
    scDotNet = myInput[4];
  }
  else if (myInput[5] === 2) {
    scRails = myInput[0];
    scDrupal = myInput[1] + 1;
    scAndroid = myInput[2];
    scDesign = myInput[3];
    scDotNet = myInput[4];
  }
  else if (myInput[5] === 3) {
    scRails = myInput[0];
    scDrupal = myInput[1];
    scAndroid = myInput[2] + 1;
    scDesign = myInput[3];
    scDotNet = myInput[4];
  }
  else if (myInput[5] === 4) {
    scRails = myInput[0];
    scDrupal = myInput[1];
    scAndroid = myInput[2];
    scDesign = myInput[3] + 1;
    scDotNet = myInput[4];
  }
  else {
    scRails = myInput[0];
    scDrupal = myInput[1];
    scAndroid = myInput[2];
    scDesign = myInput[3];
    scDotNet = myInput[4] + 1;
  }
  var allScores = [scRails,  scDrupal,  scAndroid,  scDesign,  scDotNet];
  return allScores;
};
// Determines which of the 5 tracks has the highest score and returns the index and in case of a tie the first occurrence of the tied tracks is the winner
var findTrack = function(myScores) {
  var highScore = 0;
  for (i = 0; i < myScores.length; i++) {
    if (myScores[i] > highScore) {
      highScore = myScores[i];
      highScoreIndex = i;
    }
  }
  return highScoreIndex + 1;
};
// This function returns the name of the track with the highest score
var trackName = function(highScore) {
  var programTracks = ["Ruby/Rails", "PHP/Drupal", "Java/Android", "CSS/Design", "C#/.Net"]
  return programTracks[highScore - 1];
};
// This function returns the description of the track with the highest score
var trackDescription = function(highScore) {
  var programDescriptions = [
    "Ruby and Rails are typically used by younger companies and startups, especially for building interactive web applications.",
    "PHP and Drupal are typically used to build content-focused websites.",
    "Java is one of the most widely-used programming languages, and is used in everything from Android apps to large enterprise development.",
    "The CSS/Design track is a launching point for anyone interested in designing beautiful, memorable web experiences.",
    "C# and .NET are typically used by larger enterprises, government agencies, and companies serving enterprise and government clients."
  ]
  return programDescriptions[highScore - 1];
};

// Interface Logic
$(document).ready(function() {
  $("form#aboutYou").submit(function(event) {
    // To be used in converting affinity score to text
    var trackAffinity = [
      "Little or no interest.",
      "Somewhat on your radar.",
      "Quite intrigued, aren't you?",
      "This is your life's True Calling!"
    ]
    // Hide results in case the form is resubmitted
    $("#myResults").hide();
    $(".resultImage").hide();
    // Grab values from input fields
    var yourName = $("#myName").val();
    var sRails = parseInt($("#qRails").val());
    var sDrupal = parseInt($("#qDrupal").val());
    var sAndroid = parseInt($("#qAndroid").val());
    var sDesign = parseInt($("#qDesign").val());
    var sDotNet = parseInt($("#qDotNet").val());
    var sTiebreaker = parseInt($("#qTiebreaker").val());
    // Call functions to calculate scores and determine top score
    var yourInput = [sRails,  sDrupal,  sAndroid,  sDesign,  sDotNet,  sTiebreaker];
    var yourScores = myScores(yourInput);
    var yourTrack = findTrack(yourScores);
    var yourTrackName = trackName(yourTrack);
    var yourTrackDescription = trackDescription(yourTrack);
    // Assign values to Results section
    $(".yrName").text(yourName);
    $("#yourDestiny").text(yourTrackName);
    $("#resultText").text(yourTrackDescription);
    for (i = 1; i < 6; i++) {
      $("#scoreTrack" + i).text(trackAffinity[yourScores[i - 1]]);
    }
    // Display Results content in a Modal
    $("#resultImage" + yourTrack).show();
    $("#resultsModal").modal("show");
    // Prevent form default submit behavior
    event.preventDefault();
  });
});
