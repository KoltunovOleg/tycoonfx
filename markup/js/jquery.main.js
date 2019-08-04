jQuery(function() {
	initMaterialize();
});

function initMaterialize() {

	var holder = jQuery('body');

	$('.sidenav-trigger').on('click', function(e){
		e.preventDefault();
		console.log(holder)
		if(!holder.hasClass('nav-active')) {
			holder.addClass('nav-active')
		} else {
			holder.removeClass('nav-active')
		}
	})

	$('.sidenav-trigger').sidenav('show');
}

$(document).ready(function(){
	 // $('.sidenav').sidenav();
    $('select').formSelect();
  });