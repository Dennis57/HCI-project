$(document).ready(function () {
    var slideCount = $('#slider div.slides div.slide').length;
    var slideWidth = $('#slider div.slides div.slide').width();
    var slideHeight = $('#slider div.slides div.slide').height();
    var totalWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    $('#slider div.slides').css({ width: totalWidth, marginLeft: - slideWidth });   
    $('#slider div.slides div.slide:last-child').prependTo('#slider div.slides');
    
    $('#laquo').click(function () {
       $('#slider div.slides').animate({
            left: + slideWidth
        }, 1000, function () {
            $('#slider div.slides div.slide:last-child').prependTo('#slider div.slides');
            $('#slider div.slides').css('left', '');
        });
    });
    $('#raquo').click(function () {
        $('#slider div.slides').animate({
            left: - slideWidth
        }, 1000, function () {
            $('#slider div.slides div.slide:first-child').appendTo('#slider div.slides');
            $('#slider div.slides').css('left', '');
        });
    });

    $('.icon').click(function () {
        var x = document.getElementById("all-header");
        if (x.className === "header") {
          x.className = "responsive";
          $('.responsive').slideLeft(1000);
        } 
        else 
        {
          x.className = "header";
          $('#all-header').slideDown(1000);
        }
      });

    $('#box1').hover(
        function()
        {
            $('#box1 img').css('display', 'none');
            $('#box1 p').css('display', 'inline-block');
        },
        function()
        {
            $('#box1 img').css('display', 'inline-block');
            $('#box1 p').css('display', 'none');
        }
    )
    $('#box2').hover(
        function()
        {
            $('#box2 img').css('display', 'none');
            $('#box2 p').css('display', 'inline-block');
        },
        function()
        {
            $('#box2 img').css('display', 'inline-block');
            $('#box2 p').css('display', 'none');
        }
    )
    $('#box3').hover(
        function()
        {
            $('#box3 img').css('display', 'none');
            $('#box3 p').css('display', 'inline-block');
        },
        function()
        {
            $('#box3 img').css('display', 'inline-block');
            $('#box3 p').css('display', 'none');
        }
    )
    $('#box4').hover(
        function()
        {
            $('#box4 img').css('display', 'none');
            $('#box4 p').css('display', 'inline-block');
        },
        function()
        {
            $('#box4 img').css('display', 'inline-block');
            $('#box4 p').css('display', 'none');
        }
    )
    $('#box5').hover(
        function()
        {
            $('#box5 img').css('display', 'none');
            $('#box5 p').css('display', 'inline-block');
        },
        function()
        {
            $('#box5 img').css('display', 'inline-block');
            $('#box5 p').css('display', 'none');
        }
    )
    $('#box6').hover(
        function()
        {
            $('#box6 img').css('display', 'none');
            $('#box6 p').css('display', 'inline-block');
        },
        function()
        {
            $('#box6 img').css('display', 'inline-block');
            $('#box6 p').css('display', 'none');
        }
    )
    $('#box7').hover(
        function()
        {
            $('#box7 img').css('display', 'none');
            $('#box7 p').css('display', 'inline-block');
        },
        function()
        {
            $('#box7 img').css('display', 'inline-block');
            $('#box7 p').css('display', 'none');
        }
    )
    $('#box8').hover(
        function()
        {
            $('#box8 img').css('display', 'none');
            $('#box8 p').css('display', 'inline-block');
        },
        function()
        {
            $('#box8 img').css('display', 'inline-block');
            $('#box8 p').css('display', 'none');
        }
    )
            
});