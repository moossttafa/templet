/*global $, alert, console*/

$(function () {
    
    'use strict';
    
    //Triger nicescrool plugin
    
    $("html").niceScroll({
        
        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e',
        cursorborderradius: "5px"
    });
 
    //chainge Header Hieght
    
    $('header').height($(window).height());
    
    $(window).resize(function(){
       
         $('header').height($(window).height());
        
    });
    
// scroll features
    
     $('.arow i').click(function(){
        
        $('html , body').animate({
            
           scrollTop : $('.features').offset().top
            
        }, 1000);
    });
    
    $('.show-More').click(function(){
        
        $('.Our-works .hidden').fadeIn(2000);
    })
    
    // niceScroll
    
    $('.navbar-nav li a').click(function(){
        
        $('html , body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        },1000);
    });
 
});

