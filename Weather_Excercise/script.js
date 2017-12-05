function myFunction() {
  var input, filter, index;
  input = document.getElementById("myInput");
  if (input.value) {
    filter = input.value.toUpperCase();
    //tr = document.getElementsByTagName("tr"); 
    if (filter.includes('MON')) {
      index = 1;
    } else if (filter.includes('TUE')) {
      index = 2;
    } else if (filter.includes('WED')) {
      index = 3;
    } else if (filter.includes('THU')) {
      index = 4;
    } else if (filter.includes('FRI')) {
      index = 5;
    }  else if (filter.includes('SAT')) {
      index = 6;
    }
    //th = document.getElementsByTagName("th");
    var row = document.getElementsByTagName("tr")[index];
    if (filter.includes('BANGALORE')) {
      document.getElementById('result').innerHTML = 'Tempearture in Bangalore is <b>' +  row.getElementsByTagName("td")[0].innerHTML + ' </b>Degree Celcius Today ';
    } else if (filter.includes('CHENNAI')) {
      document.getElementById('result').innerHTML = 'Tempearture in Chennai is <b>' +  row.getElementsByTagName("td")[1].innerHTML + ' </b>Degree Celcius Today ';
    } else if (filter.includes('DELHI')) {
      document.getElementById('result').innerHTML = 'Tempearture in Delhi is <b>' + row.getElementsByTagName("td")[2].innerHTML + ' </b>Degree Celcius Today ';
    } else if (filter.includes('HYDERABAD')) {
      document.getElementById('result').innerHTML = 'Tempearture in Hyderabad is <b>' + row.getElementsByTagName("td")[3].innerHTML + ' </b>Degree Celcius Today ';
    } else if (filter.includes('KOLKATA')) {
      document.getElementById('result').innerHTML = 'Tempearture in Kolkata is <b>' +  row.getElementsByTagName("td")[4].innerHTML + ' </b>Degree Celcius Today ';
    } else {
      document.getElementById('result').innerHTML = 'Search with Relevant Details';
    }
  } else {
    document.getElementById('result').innerHTML = '';
  }
} 
