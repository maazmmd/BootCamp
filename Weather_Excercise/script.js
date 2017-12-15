function myFunction() {
  var input, filter, index, i , j;
  input = document.getElementById("myInput");
  if (input.value) {
    filter = input.value.toUpperCase();
    var tr = document.getElementsByTagName("tr"); 
    for (i = 0; i < tr.length; i++) {
      if(i == 0){
        continue;
      }
      var row = document.getElementsByTagName("tr")[i];
      var day = row.getElementsByTagName("th")[0].innerHTML.toUpperCase();
      if (filter.includes(day)) {
        index = i;
        break;
      }
    }
    var th = document.getElementsByTagName("th"); 
    for (j = 0; j < th.length; j++) {
      if(j == 0){
        continue;
      }
      var city = th[j].innerHTML.toUpperCase();
      var row = document.getElementsByTagName("tr")[index];
      if (filter.includes(city)) {
        document.getElementById('result').innerHTML = 'Tempearture in ' + th[j].innerHTML + ' is <b>' +  row.getElementsByTagName("td")[j-1].innerHTML + ' </b>Degree Celcius Today ';
        break;
      }
      // else {
      //   document.getElementById('result').innerHTML = 'Search with Relevant Details';
      // }
    } 
  } else {
    document.getElementById('result').innerHTML = '';
  }
} 
