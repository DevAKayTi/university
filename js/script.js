// Start Jquery Area
$(document).ready(function(){
    // start header
        // start navbar
        $('.navbuttons').click(function(){
            $(this).toggleClass('crossxs');
        });

        // Start Login Box
        $(".open-btn").click(function(){
            document.getElementById('form-popup').style.display = "block"
          })
        
          $("#formclose-btn").click(function(){
            document.getElementById('form-popup').style.display = "none"
          })
        // End Login Box

});


// End Jquery Area 

// Start Javascript Area

// Start Students Counter Section
    var getcountervalues = document.querySelectorAll('.counter-values');
    
    getcountervalues.forEach(function(getvalue){
        getvalue.textContent = 0;
        function updatecounter() {
            const getcttarget = +getvalue.getAttribute('data-target');

            const getctcontent = getvalue.textContent;
            
            const incnumber = getcttarget/100;
            
            if(getctcontent < getcttarget) {
                getvalue.textContent = Number(getctcontent) + Number(incnumber);
                setTimeout(updatecounter,20);
            }    
        }

        updatecounter();
        
    });


// End Students Counter Section
// Start Rating section


google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanamar',     8],
          ['Thailand',      2],
          ['Singapore',  4],
          ['Indonesia', 2],
          ['Srilanka',    8]
        ]);

        var options = {
          title: 'International Students',
          width:400,
          height:400
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
        }
// End Rating Section


// End Javascript Area

const getyear = document.getElementById("getyear");
const getfullyear = new Date().getUTCFullYear();
getyear.textContent = getfullyear;


