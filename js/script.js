$(document).ready(function(){

  // TESTING JQUERY
  // $("button").click(function(){
  //   $("p").toggle();
  // });

  var myKey = JSON.parse(apiKey);
   console.log(myKey[0]);
   myKey = myKey[0].key;

   var country;
   var category;
   var source;
   var endPoint;

  //reading users choice

   document.getElementById('submit').addEventListener('click', function(){
    endPoint = document.getElementById('endPoint').value;
     category = document.getElementById('category').value;
     source = document.getElementById('source').value;
     country = document.getElementById('country').value;
     console.log(endPoint,category,country,source);
     displayData(endPoint,category,country,source);
   });

// display data
   function displayData(ep, ca, co, so){
       console.log(ep, ca, co, so);
       //ajax method
       $.ajax({
         url: `http://newsapi.org/v2/top-headlines?${ep}&apiKey=${myKey}`,
         type:'GET',
         data:'json',
         success: function(data){
           console.log(data);
           if (ep === 'category'){
             console.log('category');
            category(data, ep, ca, co, so);
          }
          // else if (ep === 'country'){
          //      console.log('country');
          //    country(data, ep, ca, co, so);
          //  } else if (ep === 'source'){
          //     console.log('source');
          //    source(data, ep, ca, co, so);
          //  }

           // function category(data, ep, ca, co, so){
           //   var k;
           //   var userCategory;
           //
           //   document.getElementById('result').innerHTML = '';
           //          for(k = 0; k < d.length; k++ ){
           //            if (ca === 'general') {
           //              userCategory = d[k].;
           //            } else if (ca === 'business') {
           //              userCategory = d[k].;
           //            } else if (ca === 'health') {
           //              userCategory = d[k].;
           //            } else if (ca === 'entertainment') {
           //              userCategory = d[k].;
           //              console.log(data);
           //            } else if (ca === 'sports') {
           //              userCategory = d[k].;
           //            }
           //
           //            document.getElementById('result').innerHTML +=
           //            '<div class="col-3">' +
           //            '<img class="img-fluid" alt="Image" src="' + data[k]. + '">' +
           //            '<h4 class="text-white">' + data[k].+ '</h4>'+
           //            '<p class="text-white">' + data[k].+ '</p>' +
           //            '</div>';
           //          } //  loop ends
           //        }; // category ends



         }, //success ends

            error:function(){
              console.log('error');
            // error


          }});//ajax

          } // function displayData ends here

          });//document.ready
