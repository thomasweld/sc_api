// import jquery
import $ from 'jquery';

// check for jquery
// console.log($);

// import template function that builds html from API data
import card from './templates/card'

// assign api url to a variable for later use
var url = 'https://api.soundcloud.com/tracks?client_id=6d394f941827974ca06f3760a0741529';

// assign HTML area where template will render profile cards on the page
// will append results here later
var cardArea = $('.songs');

// Make My Request
var dataRequest = $.getJSON(url);

// console.log(dataRequest);

// variable to hold html generated from forEach loop
var cardsHTML = '';

// When it succedes, call my template Card Function
dataRequest.then( function (res) {
  console.log(res);

  res.forEach( function (track) {
    console.log(track);

    // passing each user into card function for templating / processing
    var html = card(track);

    cardsHTML += html;

  });

  // append each result user card to html section class=cardArea
  cardArea.append(cardsHTML);

});
