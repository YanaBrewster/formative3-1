$(document).ready(function(){


  var myKey = JSON.parse(apiKey);
  myKey = myKey[0].key;

  $('#submit').click(function(){
    var category = document.getElementById('inputCategory').value;
    var country = document.getElementById('inputCountry').value;
    // inputSource = document.getElementById('inputSource').value;
    storeData(country, category);
    var url = buildUrl();
    callApi(url);
  });

function callApi(url) {
  $.ajax({
    url: url,
    type:'GET',
    data:'json',
    success: function(data){

      // createSourceList(data.articles);
      displayAllNews(data.articles);

    },//success ends
    error:function(){
      console.log('error');
    } // error
  });//ajax
}
// =======================================
// STORE USER DATA

function storeUserInput(){
  this.countryCode = null;
  this.categoryCode = null;
  this.sourceCode = null;
}
var userInput = new storeUserInput();

function storeData(country, category){
  if(category !== ""){
    var selectedCategory = $('#inputCategory option:selected').val();
    userInput.categoryCode = selectedCategory;
  }
  if(country !== ""){
    var selectedCountry = $('#inputCountry option:selected').val();
    userInput.countryCode = selectedCountry;
  }
  console.log(userInput);
}
// ===================================================
// BUILD DYNAMIC URL

  function buildUrl(){
    var url = 'http://newsapi.org/v2/top-headlines?' + 'apiKey=' + myKey;
    if(userInput.countryCode != null){
      url +=  '&country=' + userInput.countryCode;
    }
    if(userInput.categoryCode != null){
      url +=  '&category=' + userInput.categoryCode;
    }
    console.log(url);
    return url;
  }

// ==============================================================
// DISPLAY FILTERED NEWS

function displayAllNews(data){
  $("#result").empty();
  var i;
  for (i=0; i<data.length; i++){
    document.getElementById('result').innerHTML +=
    '<div class="col col-lg-4 col-md-12 col-sm-12 pb-3">'+
    '<div class="card border border-info">' +
    '<img src="'+ data[i].urlToImage +'" class="card-img" alt="news image">' +
    '<div class="card-body px-3 py-3"><h5 class="card-title"><a href="' + data[i].url + '">' + data[i].title + '</a></h5>' +
    '<p class="card-text">'+ data[i].description + '</p>' +
    '<p class="card-text">Source: <i>'+ data[i].source.name + '</i></p><hr>' +
    '<p class="card-text">| '+ data[i].publishedAt + ' |</p>';
  }// i loop ends
}

//================================================
//user input country
function getCountryValue(){
  var countryValue = $('#inputCountry option:selected').val();
  console.log(countryValue);
}

//anonymous function
$('#inputCountry').on('change', function() {
  getCountryValue();
});

//==============================================
// user input category

function getCategoryValue(){
  var categoryValue = $('#inputCategory option:selected').val();
  console.log(categoryValue);
}

//anonymous function
$('#inputCategory').on('change', function() {
  getCategoryValue();
});


//=============================================================================
// // user input source
//
// function getSourceValue(){
//   var sourceValue = $('#inputSource option:selected').val();
//   console.log(sourceValue);
// }
//
// //anonymous function
// $('#inputSource').on('change', function() {
//   getSourceValue();
// });
//

// ============================================================================

// DISPLAY ON LOAD

  var url = 'http://newsapi.org/v2/top-headlines?' + 'country=nz' + '&apiKey=' +  myKey;

  //ajax method
  $.ajax({
    url: url,
    type:'GET',
    data:'json',
    success: function(data){
      console.log(data);

      // SHOW ARTICLES ON LOAD
      $("#result").empty();
      var i;
      for (i=0; i<data.articles.length; i++){

        document.getElementById('result').innerHTML +=

        '<div class="col col-lg-4 col-md-12 col-sm-12 pb-3">'+
        '<div class="card border border-info">' +
        '<img src="'+ data.articles[i].urlToImage +'" class="card-img" alt="news image">' +
        '<div class="card-body px-3 py-3"><h5 class="card-title"><a href="' + data.articles[i].url + '">' + data.articles[i].title + '</a></h5>' +
        '<p class="card-text">'+ data.articles[i].description + '</p>' +
        '<p class="card-text">Source: <i>'+ data.articles[i].source.name + '</i></p><hr>' +
        '<p class="card-text">| '+ data.articles[i].publishedAt + ' |</p>';

      }// i loop ends
    },//success ends
    error:function(){
      console.log('error');
    } // error
  });//ajax


// ===============================================================================


  //  SHOW AND HIDE ABOUT SECTION

  $('#about').hide();
  $('.btn-hide').hide();

  $('.btn-show').click(function(){
    $('#about').slideDown(1000);
    $('.btn-hide').show();
    $('.btn-show').hide();
  });

  $('.btn-hide').click(function(){
    $('#about').slideUp();
    $('#about').hide();
    $('.btn-hide').hide();
    $('.btn-show').show();
  });

});//document.ready
