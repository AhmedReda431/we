/*global $, alert ,cobsole */
$(document).ready(function(){
    $(window).on("scroll",function(){
        var sc = $(window).scrollTop();
        if(sc > 800){
            $(".top-button").fadeIn(1000)
        }else{
            $(".top-button").fadeOut(1000)
        }
    });
    $(".top-button").click(function(){
        $("html,body").animate({scrollTop:0},1000,function(){
            $(".button").fadeOut(1000);
            $("input[type='search'],footer button[type='submit']").fadeOut(1000);
        });
    });
    $(".fa-search").on("click",function(){
        $("input[type='search'],footer button[type='submit']").toggle(1000);
    });
});