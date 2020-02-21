$(document).ready(function(){

  // TESTING JQUERY
  // $("button").click(function(){
  //   $("p").toggle();
  // });

  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;
  console.log(myKey);

  //   var req = new Request(url);
  //   fetch(req)
  //   .then(function(response) {
  //     console.log(response.json());
  // })

  //reading users choice
  // document.getElementById('submit').addEventListener('click', function(){
  //   country = document.getElementById('country').value;
  //   category = document.getElementById('category').value;
  //   sources = document.getElementById('sources').value;
  //   // displayNews(country, category, sources);
  // });

  // // display articles
  // function displayNews(data)
  //   if (ep === 'country' && 'category') {
  //     var url = `http://newsapi.org/v2/top-headlines?${co}${ca}${myKey}`;
  //   } else (ep === 'sources'){
  //     var url =  `http://newsapi.org/v2/top-headlines?${so}${myKey}`;
  //   }

  //ajax method
  $.ajax({
    url: 'http://newsapi.org/v2/top-headlines?' + 'country=nz' + '&apiKey=' +  myKey,
    type:'GET',
    data:'json',
    success: function(data){
      console.log(data);
      // displayAllNews(articles){
      // var articles;
      var i;

        for (i=0; i<data.articles.length; i++){

          document.getElementById('result').innerHTML +=
          // '<div class="row border border-success">'+
          '<div class="col col-lg-4 col-md-12 col-sm-12 pb-3">'+
          '<div class="card border border-primary">' +
          '<img src="'+ data.articles[i].urlToImage +'" class="card-img" alt="news image">' +
          '<div class="card-body px-3 py-3"><h5 class="card-title">' + data.articles[i].title + '</h5>' +
          '<p class="card-text">'+ data.articles[i].description + '</p>' +
          '<p class="card-text">Source: <i>'+ data.articles[i].source.name + '</i></p><hr>' +
          '<p class="card-text">| '+ data.articles[i].publishedAt + ' |</p>';
          // '<a href="#" class="btn btn-info">More Info</a></div></div> '

        }// i loop ends


      // }// display news ends
    },//success ends
    error:function(){
      console.log('error');
    } // error
});//ajax


//  SHOW AND HIDE

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
