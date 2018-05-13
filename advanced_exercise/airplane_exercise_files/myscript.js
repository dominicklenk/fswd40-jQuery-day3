$(document).ready(function() {

$(document).mousemove(function(event){
        
        var top = event.pageY-195;
        var left = event.pageX-150;
        $("#airplane").animate({top:top+"px",left:left+"px"},10,"linear");
        document.getElementById('demo').innerHTML="left = "+event.pageX+" top = "+event.pageY;
    });

        $("img").on("click",function(){
            $(this).removeAttr("id").fadeOut(1500).fadeIn(1500);
        });

});