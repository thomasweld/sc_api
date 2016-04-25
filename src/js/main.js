// import jquery
import $ from 'jquery';

// import template function that builds html from API data
import card from './templates/card'

var results = $('#results');
var form = $('#searchSound');
var field = $('#searchInput');
var player = $('#player');
var now_playing = $('#now_playing');



// assign api token and url to a variable for later use
var token = '6d394f941827974ca06f3760a0741529'

var searchURL = 'https://api.soundcloud.com/tracks?client_id=' + token + '&limit=20&q=';

function searchSite (term){

  console.log(term);
  //empty results
  results.empty();

  // Make My Request
  var dataRequest = $.getJSON(searchURL + term);

  dataRequest.then( function (res) {
    console.log(res);

    res.forEach( function (track) {
      console.log(track);

      // passing each user into card function for templating / processing
      var html = card(track);

      // cardsHTML += html;

      // append each result user card to html section class=cardArea
      results.append(html);

    });

  });

};


// always have event object passed in when listening for event
// on('submit') listens for ENTER KEY
form.on('submit', function ( event ){
  event.preventDefault();

  var term = field.val();
  searchSite(term);

});


// when someone clicks on a track, play audio -- use delegate selector to find each track and
//
results.on('click', 'li', function (event){
  event.preventDefault();

  console.log($(this));
  // get stream url from data-stream from element li tag or "this" element that was clicked
  var stream = $(this).data('stream');
  // then change source attribute of player to stream url of the one that was clicked
  player.attr('src', stream + '?client_id=' + token);

  now_playing.html($(this).find('.song_name').text());



});





//
// $('#searchInput').keypress(function(e) {
//     if(e.which == 13) {
//         $('#searchButton').trigger("click");
//     }
// });
//
//


// // when someone clicks search, add search to query url
// $('#searchButton').click(function(){
//   // prevent default action of clicking the button or pressing enter
//   event.preventDefault();
//   // add search term from #searchInput
//   var seachTerm = $('#searchInput').val();
//   url = url + '&q=' + seachTerm;
//   // Make My Request
//   var dataRequest = $.getJSON(url);

//  // When it succedes, call my template Card Function
//   dataRequest.then( function (res) {
//     console.log(res);
//
//     res.forEach( function (track) {
//       console.log(track);
//
//       // passing each user into card function for templating / processing
//       var html = card(track);
//
//       cardsHTML += html;
//
//     });
//
//     // append each result user card to html section class=cardArea
//     cardArea.append(cardsHTML);
//
//   });
//
// });
