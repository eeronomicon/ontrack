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
  
};


// Interface Logic
$(document).ready(function() {
  $("form#aboutYou").submit(function(event) {
    var sRails = parseInt($("#qRails").val());
    var sDrupal = parseInt($("#qDrupal").val());
    var sAndroid = parseInt($("#qAndroid").val());
    var sDesign = parseInt($("#qDesign").val());
    var sDotNet = parseInt($("#qDotNet").val());
    var sTiebreaker = parseInt($("#qTiebreaker").val());

    var yourInput = [sRails,  sDrupal,  sAndroid,  sDesign,  sDotNet,  sTiebreaker];
    alert(Math.max.apply(null, myScores(yourInput)));

    $("#myResults").show();

    event.preventDefault();
  });


});
