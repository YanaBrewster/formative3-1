$(document).ready(function(){

  var country, category, source, endPoint;
  var countryCode;
  var categoryCode;
  var sourceCode;

// COUNTRYS OBJECT

var countrys = [{
  code: 0,
  name: 'Country'
},{
  code: 'us',
  name: 'United States'
},{
  code: 'hk',
  name: 'Hong Kong'
},{
  code: 'jp',
  name: 'Japan'
}]
console.log(countrys);


//   function countrys(code, name) {
//     this.code = code;
//     this.name = name;
//   }
// var us = new countrys('us', 'United States');
// var hk = new countrys('hk', 'Hong Kong');
// var jp = new countrys('jp', 'Japan');

// console.log(jp);

// CATEGORYS OBJECT

var categorys = [{
  code: 0,
  name: 'Category'
},{
  code: 'general',
  name: 'General'
},{
  code: 'health',
  name: 'Health'
},{
  code: 'business',
  name: 'Business'
}]
console.log(categorys);

// function categorys(code, name) {
//   this.code = code;
//   this.name = name;
// }
// var general = new categorys('general', 'General');
// var health = new categorys('health', 'Health');
// var business = new categorys('business', 'Business');

// SOURCES OBJECT

var sources = [{
  code: 0,
  name: 'Source'
},{
  code: 'bbc-news',
  name: 'BBC News'
},{
  code: 'cnbc',
  name: 'CNBC'
},{
  code: 'fox-news',
  name: 'Fox News'
}]
console.log(sources);

// function sources(code, name) {
//   this.code = code;
//   this.name = name;
// }
// var bbc = new sources('bbc-news', 'BBC News');
// var cnbc = new sources('cnbc', 'CNBC');
// var foxNews = new sources('fox-news', 'FOX News');

// GET INPUT OF SUBMIT

function getInput(){

var i;


  for (i = 0; i < categorys.length; i++ ){
    if ((inputCategory === categorys[i].name) && (inputCountry !== 'noCountry')){
      categoryCode = '&category=' + categorys[i].code;
      endPoint = 'top-headlines';

    } else if ((inputCategory === categorys[i].name) && (inputCountry === 'noCountry')){
      categoryCode = 'category=' + categorys[i].code;
      countryCode = '';
      endPoint = 'top-headlines';

    } // else if ends
  } //category loop ends
  for (i = 0; i < countrys.length; i++ ){
    if ((inputCountry === countrys[i].name) && (inputCategory === 'noCategory')){
      countryCode = 'country=' + countrys[i].code;
      countryCode = '';
      endPoint = 'top-headlines';

    } else if ((inputCountry === countrys[i].name) && (inputCountry !== 'noCategory')){
      countryCode = 'country=' + countrys[i].code;
      endPoint = 'top-headlines';

    } // else if ends
  } //country loop ends
  for (i = 0; i < sources.length; i++ ){
    if ((inputSource=== sources[i].name) && (inputCountry !== 'noCountry') && (inputCategory !== 'noCategory')){
      sourceCode = 'source=' + sources[i].code;
      countryCode = '';
      categoryCode = '';
      endPoint = 'top-headlines';
    }
  }
  //source loop ends
} // getInput ends

// var url = `http://newsapi.org/v2/top-headlines?${countryCode}${categoryCode}${sourceCode}&apiKey=${myKey}`;
// console.log(url);

  // get api key
  var myKey = JSON.parse(apiKey);
  // console.log(myKey[0]);
  myKey = myKey[0].key;
  // console.log(myKey);

// onLoad(){
  var url = 'http://newsapi.org/v2/top-headlines?' + 'country=nz' + '&apiKey=' +  myKey;
// }


// getInput();

  //ajax method
  $.ajax({
    url: url,
    type:'GET',
    data:'json',
    success: function(data){
      console.log(data);

      $('#submit').click(function(){
        inputCategory = document.getElementById('inputCategory').value;
        inputCountry = document.getElementById('inputCountry').value;
        inputSource = document.getElementById('inputSource').value;
        //
        // var country = document.getElementById('inputCountry').value ;
        // var category = document.getElementById('inputCategory').value ;
        // var source = document.getElementById('inputSource').value ;
        // console.log(country, category, source);
      });


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
