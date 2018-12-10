$(document).ready(function() {
	$('.bravo').on('click', function() {
		$('.bravo__img').toggle();
	});
 
    
$('.menu__link').each(function () {
        var location = window.location.href;
        var link = this.href; 
        if(location == link) {
            $(this).addClass('active');
        }
    });

$('.categories__link').each(function () {
        var location = window.location.href;
        var link = this.href; 
        if(location == link) {
            $(this).addClass('now_here');
        }
    });

});