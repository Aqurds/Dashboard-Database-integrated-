$(document).ready(function() {

    //Doughnut echarts init

    var dom = document.getElementById("doughnut_chart_example");
    var dnutChart = echarts.init(dom);

    var app = {};
    option = null;
    option = {
        color: ['#328dff','#3dba6f', '#fe413b','#fab63f', '#18b9d4'],
        tooltip : {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['Direct','Mail','Affiliate','AD','Search']
        },
        calculable : true,
        series : [
            {
                name:'Source',
                type:'pie',
                radius : ['50%', '70%'],
                data:[
                    {value:335, name:'Direct'},
                    {value:310, name:'Mail'},
                    {value:234, name:'Affiliate'},
                    {value:135, name:'AD'},
                    {value:1548, name:'Search'}
                ]
            }
        ]
    };

    if (option && typeof option === "object") {
        dnutChart.setOption(option, false);
    }




    /**
     * Resize chart on window resize
     * @return {void}
     */
    window.onresize = function() {
        dnutChart.resize();
    };


});
