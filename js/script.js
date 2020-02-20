$(document).ready(function(){

  // TESTING JQUERY
  // $("button").click(function(){
  //   $("p").toggle();
  // });

  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;
  console.log(myKey);

  var req = new Request(url);
  fetch(req)
  .then(function(response) {
    console.log(response.json());
})

//reading users choice
document.getElementById('submit').addEventListener('click', function(){
  country = document.getElementById('country').value;
  category = document.getElementById('category').value;
  sources = document.getElementById('sources').value;
  // displayNews(country, category, sources);
});

// // display data
// function displayNews(data){
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
    // displayAllNews(data.articles){

    // document.getElementById('result').innerHTML = '';
    // for(i=0; i<data.length; i++){
    //   if(data[i].urlToImage === null){
    //     data[i] = data[i+1];
    //   }

    // document.getElementById('result').innerHTML +=
    // 	'<div class="row border border-success">';
    // for (i=0; i<data.length; i++){
    //   '<div class="col pb-5">'+
    //   '<div class="card border border-success" style="width: 18rem;">' +
    //   '<img src="'+ data[i].urlToImage +'" class="card-img-top" alt="">' +
    //   '<div class="card-body"><h5 class="card-title">' + data[i].title + '</h5>' +
    //   '<p class="card-text">'+ data[i].description + '</p>' +
    //   '<p class="card-text">'+ data[i].source.name + '</p>' +
    //   '<p class="card-text">'+ data[i].publishedAt + '</p>'
    //   // '<a href="#" class="btn btn-info">More Info</a></div></div> '
    // }
  },//success ends

  error:function(){
  console.log('error');
} // error

// }; // function displayAllNews ends here

});//ajax


});//document.ready
