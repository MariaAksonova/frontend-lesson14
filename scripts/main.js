$(document).ready(function(){
    $('.our-work .container').masonry({
        itemSelector: '.grid-item',
        columnWidth: 260,
        singleMode: false,
        isResizable: true,
        isAnimated: true,
        animationOptions: {
            queue: false,
            duration: 500
        }
    });
});