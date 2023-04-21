var images=new Array('img/background-1.png','img/background-2.png','img/background-3.png');
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.global-header')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(500,function(){
        setTimeout(doSlideshow,1000);
    });
}