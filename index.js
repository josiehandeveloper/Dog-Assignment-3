'use strict';

function getDogImage(breed) {

  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
     .then(response => response.json())
     .then(responseJson => displayResults(responseJson))
     .catch(error => alert("Something went wrong. Try again later."));
}


function userInput() {
  $("#doggie-form").submit(event => {
    event.preventDefault();
    let userInput = $("#breed-of-doggos").val();
    getDogImage(userInput);
   });
}



function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status !== "success") {
     alert("Couldn't find that dog breed please try again");
  } else if (responseJson.status === "success") {
     $(".results").replaceWith(
       `<img src="${responseJson.message}" class="results">`
     );

    $(".results").removeClass("hidden");
  }
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  userInput();

});