function myFunction() {
  var input, filter, tr, th, i, j, index;
  input = document.getElementById("myInput");
  if (input.value) {
    filter = input.value.toUpperCase();
    tr = document.getElementsByTagName("tr");
    for (j = 0; j < tr.length; j++) {
      if(j == 0)
        continue;
       if (filter.includes('MON')) {
        index = 1;
        break;
      } else if (filter.includes('TUE')) {
        index = 2;
        break;
      } else if (filter.includes('WED')) {
        index = 3;
        break;
      } else if (filter.includes('THU')) {
        index = 4;
        break;
      } else if (filter.includes('FRI')) {
        index = 5;
        break;
      }  else if (filter.includes('SAT')) {
        index = 6;
        break;
      }
    }   

      th = document.getElementsByTagName("th");
      for (i = 0; i < th.length; i++) {
        var row = document.getElementsByTagName("tr")[index];
        if (filter.includes('BANGALORE')) {
          document.getElementById('result').innerHTML = 'Tempearture in Bangalore is <b>' +  row.getElementsByTagName("td")[0].innerHTML + ' </b>Degree Celcius Today ';
          break;
        } else if (filter.includes('CHENNAI')) {
          document.getElementById('result').innerHTML = 'Tempearture in Chennai is <b>' +  row.getElementsByTagName("td")[1].innerHTML + ' </b>Degree Celcius Today ';
          break;
        } else if (filter.includes('DELHI')) {
          document.getElementById('result').innerHTML = 'Tempearture in Delhi is <b>' + row.getElementsByTagName("td")[2].innerHTML + ' </b>Degree Celcius Today ';
          break;
        } else if (filter.includes('HYDERABAD')) {
          document.getElementById('result').innerHTML = 'Tempearture in Hyderabad is <b>' + row.getElementsByTagName("td")[3].innerHTML + ' </b>Degree Celcius Today ';
          break;
        } else if (filter.includes('KOLKATA')) {
          document.getElementById('result').innerHTML = 'Tempearture in Kolkata is <b>' +  row.getElementsByTagName("td")[4].innerHTML + ' </b>Degree Celcius Today ';
          break;
        } else {
          document.getElementById('result').innerHTML = 'Search with Relevant Details';
          break;
        }
      }
    } else {
    document.getElementById('result').innerHTML = '';
  }
} 
