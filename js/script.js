$(document).ready(function(){

  // TESTING JQUERY
  // $("button").click(function(){
  //   $("p").toggle();
  // });

  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;



  var countryEp;
  var category;
  var source;


  //reading users choice

  // document.getElementById('submit').addEventListener('click', function(){
  //   countryEp = document.getElementById('countryEp').value;
  //   category = document.getElementById('category').value;
  //   sources = document.getElementById('sources').value;
  //   console.log(countryEp, category, sources);
  //   displayData(countryEp, category, sources);
  // });

  var url = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' +  'apiKey=23ff36ea29f349d49a5f8fef2459395f';
  var req = new Request(url);
  fetch(req)
  .then(function(response) {
    console.log(response.json());
  })

  // display data
  function displayData(data){
    console.log(data);
    //ajax method
    $.ajax({
      url: url,
      type:'GET',
      data:'json',
      success: function(data){
        console.log(data);
        var i;

            for (i=0; i<data.length; i++){

              document.getElementById('result').innerHTML +=
                '<div class="col pb-5">'+
                '<div class="card border border-success" style="width: 18rem;">' +
                '<img src="'+ data[i].articles.urlToImage +'" class="card-img-top" alt="">' +
                '<div class="card-body"><h5 class="card-title">' + data[i].articles.title + '</h5>' +
                '<p class="card-text">'+ data[i].articles.description + '</p>' +
                '<p class="card-text">'+ data[i].articles.publishedAt + '</p>'
                // '<a href="#" class="btn btn-info">More Info</a></div></div> '

          }
      }, //success ends

      error:function(){
        console.log('error');
        // error


      }});//ajax

    } // function displayData ends here

  });//document.ready

  // country=
  // sources=
  // category=
