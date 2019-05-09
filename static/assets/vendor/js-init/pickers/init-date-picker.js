
//date picker start

$(function(){

    $('.date').datepicker({
        //format: 'mm-dd',
        autoclose: true,        
        orientation: "bottom",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });
   
});



