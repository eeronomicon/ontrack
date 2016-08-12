// Business Logic
// This function collects user input and adds a 3 point bonus based on the tiebreaker answer
var myScores = function(myInput) {
  if (myInput[5] === 1) {
    scRails = myInput[0] + 3;
    scDrupal = myInput[1];
    scAndroid = myInput[2];
    scDesign = myInput[3];
    scDotNet = myInput[4];
  }
  else if (myInput[5] === 2) {
    scRails = myInput[0];
    scDrupal = myInput[1] + 3;
    scAndroid = myInput[2];
    scDesign = myInput[3];
    scDotNet = myInput[4];
  }
  else if (myInput[5] === 3) {
    scRails = myInput[0];
    scDrupal = myInput[1];
    scAndroid = myInput[2] + 3;
    scDesign = myInput[3];
    scDotNet = myInput[4];
  }
  else if (myInput[5] === 4) {
    scRails = myInput[0];
    scDrupal = myInput[1];
    scAndroid = myInput[2];
    scDesign = myInput[3] + 3;
    scDotNet = myInput[4];
  }
  else {
    scRails = myInput[0];
    scDrupal = myInput[1];
    scAndroid = myInput[2];
    scDesign = myInput[3];
    scDotNet = myInput[4] + 3;
  }
  var allScores = [scRails,  scDrupal,  scAndroid,  scDesign,  scDotNet];
  return allScores;
};
// This function determines which of the 5 tracks has the highest score and returns the index
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
}
// This function returns the description of the track with the highest score


// Interface Logic
$(document).ready(function() {
  $("form#aboutYou").submit(function(event) {
    $("#myResults").hide();
    $(".resultImage").hide();

    var sRails = parseInt($("#qRails").val());
    var sDrupal = parseInt($("#qDrupal").val());
    var sAndroid = parseInt($("#qAndroid").val());
    var sDesign = parseInt($("#qDesign").val());
    var sDotNet = parseInt($("#qDotNet").val());
    var sTiebreaker = parseInt($("#qTiebreaker").val());

    var yourInput = [sRails,  sDrupal,  sAndroid,  sDesign,  sDotNet,  sTiebreaker];
    var yourScores = myScores(yourInput);
    var yourTrack = findTrack(yourScores);
    var yourTrackName = trackName(yourTrack);

    $("#yourDestiny").text(yourTrackName);
    for (i = 1; i < 6; i++) {
      $("#scoreTrack" + i).text(yourScores[i - 1]);
    }

    $("#myResults").show();
    $("#resultImage" + yourTrack).show();

    event.preventDefault();
  });


});
