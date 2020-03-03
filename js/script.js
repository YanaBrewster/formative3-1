$(document).ready(function(){


  var myKey = JSON.parse(apiKey);
  myKey = myKey[0].key;

  $('#submit').click(function(){
    var category = document.getElementById('inputCategory').value;
    var country = document.getElementById('inputCountry').value;
    storeData(country, category);
    var url = buildUrl();
    getApiData(url);
  });

  $('#submitSource').click(function(){
    var source = document.getElementById('inputSource').value;
    storeSourceData(source);
    var url = buildUrlSource();
    getApiDataSource(url);
  });

  $('#submitSearch').click(function(){
    var search = document.getElementById('inputSearch').value;
    storeSearchData(search, searchValue);
    var url = buildUrlSearch();
    getApiDataSearch(url);
  });


  // get the api url requested from submit filter
  function getApiData(url) {
    $.ajax({
      url: url,
      type:'GET',
      data:'json',
      success: function(data){

        displayFilteredNews(data.articles);

      },//success ends
      error:function(){
        console.log('error');
      } // error
    });//ajax
  }

  function getApiDataSource(url) {
    $.ajax({
      url: url,
      type:'GET',
      data:'json',
      success: function(data){

        displayFilteredSourceNews(data.articles);
      },//success ends
      error:function(){
        console.log('error');
      } // error
    });//ajax
  }

  function getApiDataSearch(url) {
    $.ajax({
      url: url,
      type:'GET',
      data:'json',
      success: function(data){

        displayFilteredSearchNews(data.articles);
        console.log(url);
      },//success ends
      error:function(){
        console.log('error');
      } // error
    });//ajax
  }

  // ===================================================================
  // STORE USER DATA

  function storeUserInput(){
    // this assigns no value to variables until input
    var country = '';
    var category = '';
    var source = '';
    var search = '';
  }

  // new function within userInput that stores data
  var userInput = new storeUserInput();

  function storeData(country, category){
    // if the category input is not empty
    if(category !== ''){
      // selectedCategory stores the value inputted
      var selectedCategory = $('#inputCategory option:selected').val();
      // userInput is a function that stores the inputted value for the selected category
      userInput.category = selectedCategory;
    }
    if(country !== ''){
      var selectedCountry = $('#inputCountry option:selected').val();
      userInput.country = selectedCountry;
    }
  }

  function storeSourceData(source) {
    if(source !== ''){
      var selectedSource = $('#inputSource option:selected').val();
      userInput.source = selectedSource;
    }
  }

  function storeSearchData(search, searchValue) {
    if(search !== ''){
      var selectedSearch = searchValue;
      userInput.search = selectedSearch;
      console.log(userInput.search);
    }
  }


  // ===================================================
  // BUILD DYNAMIC URL

  function buildUrl(){
    var url = 'http://newsapi.org/v2/top-headlines?' + 'apiKey=' + myKey;
    // if the user input for country is not empty
    if(userInput.country != ''){
      // append this values at the end of the url
      url +=  '&country=' + userInput.country;
    }
    if(userInput.category != ''){
      url +=  '&category=' + userInput.category;
    }
    // console.log(url);
    return url;
  }

  function buildUrlSource(){
    var url = 'http://newsapi.org/v2/top-headlines?' + 'apiKey=' + myKey;
    if(userInput.source != ''){
      url += "&sources=" + userInput.source;
    }
    // console.log(url);
    return url;
  }

  function buildUrlSearch(){
    var url = 'http://newsapi.org/v2/everything?' + 'apiKey=' + myKey;
    if(userInput.search != ''){
      url += 'q=' + userInput.search;
    }
    console.log(url);
    return url;
  }

  // ==============================================================
  // DISPLAY FILTERED NEWS

  function displayFilteredNews(data){
    $("#result").empty();
    document.getElementById('result').innerHTML +=
    '<div class="col-12 col-lg-12 col-md-12 col-sm-12"><h2 class="mt-5 text-center">Breaking Headlines in ' + userInput.country + ' about ' + userInput.category + ' News</h2><br><br></div>';
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

  function displayFilteredSourceNews(data){
    $("#result").empty();
    document.getElementById('result').innerHTML +=
    '<div class="col-12 col-lg-12 col-md-12 col-sm-12"><h2 class="mt-5 text-center">Breaking Headlines from ' + userInput.source + '</h2><br><br></div>';
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

  function displayFilteredSearchNews(data){
    $("#result").empty();
    document.getElementById('result').innerHTML +=
    '<div class="col-12 col-lg-12 col-md-12 col-sm-12"><h2 class="mt-5 text-center">Breaking Headlines from ' + userInput.search + '</h2><br><br></div>';
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
  }

  //anonymous function
  $('#inputCountry').on('change', function() {
    getCountryValue();
  });

  //==============================================
  // user input category

  function getCategoryValue(){
    var categoryValue = $('#inputCategory option:selected').val();
  }

  //anonymous function
  $('#inputCategory').on('change', function() {
    getCategoryValue();
  });


  //=============================================================================
  // // user input source

  function getSourceValue(){
    var sourceValue = $('#inputSource option:selected').val();
    console.log(sourceValue);
  }

  //anonymous function
  $('#inputSource').on('change', function() {
    getSourceValue();
  });

  //=============================================================================
  // // user input search

  function getSearchValue(){
    var searchValue = document.querySelector('#inputSearch').value;
    searchValue = searchValue.replace(/\s+/g, '-').toLowerCase();
    console.log(searchValue);
  }

  //anonymous function
  $('#inputSearch').on('change', function() {
    getSearchValue();
  });


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

      document.getElementById('result').innerHTML +=
      '<div class="col-12 col-lg-12 col-md-12 col-sm-12"><h2 class="mt-5 text-center">Breaking Headlines in New Zealand</h2><br><br></div>';
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


  // DISABLE SOURCE

  // $(function() {
  //   $("#inputCountry").change(function() {
  //     $("#inputSource").prop("disabled", true);
  //   });
  //
  //   $("#inputCategory").change(function() {
  //     $("#inputSource").prop("disabled", true);
  //
  //   });
  //   $("#inputSource").change(function() {
  //     $("#inputCountry".prop("disabled", true);
  //     $("#inputCategory".prop("disabled", true);
  //   });
  // });

  // ==================================================================


});//document.ready
