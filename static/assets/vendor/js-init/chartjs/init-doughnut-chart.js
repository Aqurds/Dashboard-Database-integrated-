
// chartjs initialization

$(function () {
    "use strict";


// doughnut_chart

    var ctx = document.getElementById("doughnut_chart");
    var data = {
        labels: [
            "Yes", "No"
        ],
        datasets: [{
            data: [20, 80],
            backgroundColor: [
                "#fedc8d",
                "#c6e5a2",                
            ],           
            borderColor: [
                "#fedc8d",
                "#c6e5a2",                
            ]
        }]
    };

    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            legend: {
                display: true,
                labels: {
                    boxWidth: 20
                }
            }
        }
    });


});


