$(document).ready(function() {

    //Doughnut echarts init

    var dom = document.getElementById("doughnut_chart1");
    var dnutChart = echarts.init(dom);

    var app = {};
    option = null;
    option = {
        
        color: ['#606d6e','#81d6e9', '#ff936f','#00baaa', '#3a494c', '#ff5e64', '#f6c644'],
        tooltip : {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient : 'vertical',
            x : 'left',           
        },        
        series : [
            {
                name:'Source',
                type:'pie',                
                data:[
                    {value:335, name:'Monday'},
                    {value:310, name:'Tuesday'},
                    {value:234, name:'Wednesday'},
                    {value:135, name:'Thursday'},
                    {value:1548, name:'Friday'},
                    {value:508, name:'Saturday'},
                    {value:108, name:'Sunday'},
                    
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
