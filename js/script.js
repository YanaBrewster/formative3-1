$(document).ready(function(){

  // get api key
  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;
  console.log(myKey);

  var url = 'http://newsapi.org/v2/top-headlines?' + 'country=nz' + '&apiKey=' +  myKey;

  // COUNTRY
  $('.us').click(function(){
    country = 'us';
  });
  $('.hk').click(function(){
    country = 'hk';
  });
  $('.jp').click(function(){
    country = 'jp';
  });

  // CATEGORY
  $('.general').click(function(){
    category = 'general';
  });
  $('.business').click(function(){
    category = 'business';
  });
  $('.health').click(function(){
    category = 'health';
  });

  // SOURCES
  $('.bbc-news').click(function(){
    source = 'bbc-news';
  });
  $('.cnbc').click(function(){
    source = 'cnbc';
  });
  $('.fox-news').click(function(){
    source = 'fox-news';
  });


  //ajax method
  $.ajax({
    url: url,
    type:'GET',
    data:'json',
    success: function(data){
      console.log(data);

      $('#submit').click(function(){
        var country = document.getElementById('country').value ;
        var category = document.getElementById('category').value ;
        var source = document.getElementById('source').value ;
        console.log(country, category, source);

        // displayResults(country, category, source);

      });

      function displayResults(country, category, source){

        //   if (( country == 'country' ) && ( category == 'category')) {
        //     if (( category == 'category' ) && ( country == 'country')) {

        //     var url = `http://newsapi.org/v2/top-headlines?country=${country}${category}${myKey}`;
        //     console.log(url);
        //
        //       var a;
        //       for (a=0; a<data.articles.length; a++){
        //       $("#result").empty();
        //       document.getElementById('result').innerHTML +=
        //
        //       '<div class="col col-lg-4 col-md-12 col-sm-12 pb-3">'+
        //       '<div class="card border border-primary">' +
        //       '<img src="'+ data.articles[a].urlToImage +'" class="card-img" alt="news image">' +
        //       '<div class="card-body px-3 py-3"><h5 class="card-title">' + data.articles[a].title + '</h5>' +
        //       '<p class="card-text">'+ data.articles[a].description + '</p>' +
        //       '<p class="card-text">Source: <i>'+ data.articles[a].source.name + '</i></p><hr>' +
        //       '<p class="card-text">| '+ data.articles[a].publishedAt + ' |</p>';
        //     }
        //   }
        //   }
        //   else {
        //     var url =  `http://newsapi.org/v2/top-headlines?${source}${myKey}`;
        //     console.log(url);
        //
        //     var b;
        //     for (b=0; b<data.articles.length; b++){
        //     $("#result").empty();
        //     document.getElementById('result').innerHTML +=
        //
        //     '<div class="col col-lg-4 col-md-12 col-sm-12 pb-3">'+
        //     '<div class="card border border-primary">' +
        //     '<img src="'+ data.articles[b].urlToImage +'" class="card-img" alt="news image">' +
        //     '<div class="card-body px-3 py-3"><h5 class="card-title">' + data.articles[b].title + '</h5>' +
        //     '<p class="card-text">'+ data.articles[b].description + '</p>' +
        //     '<p class="card-text">Source: <i>'+ data.articles[b].source.name + '</i></p><hr>' +
        //     '<p class="card-text">| '+ data.articles[b].publishedAt + ' |</p>';
        //   }
        // }// else ends

      };//displayResults ends

      // SHOW ARTICLES ON LOAD
      var i;
      for (i=0; i<data.articles.length; i++){

        document.getElementById('result').innerHTML +=

        '<div class="col col-lg-4 col-md-12 col-sm-12 pb-3">'+
        '<div class="card border border-primary">' +
        '<img src="'+ data.articles[i].urlToImage +'" class="card-img" alt="news image">' +
        '<div class="card-body px-3 py-3"><h5 class="card-title">' + data.articles[i].title + '</h5>' +
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
