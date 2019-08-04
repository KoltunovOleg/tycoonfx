jQuery(function() {
});

jQuery(document).ready(function(){
	jQuery('select').formSelect();
	initBurgerMenu();
	initFormValidation();
});

;function initBurgerMenu() {

	var holder = jQuery('body');

	$('.sidenav-trigger').on('click', function(e){
		e.preventDefault();
		if(!holder.hasClass('nav-active')) {
			holder.addClass('nav-active')
		} else {
			holder.removeClass('nav-active')
		}
	})
}

;function initFormValidation () {

		$(document).on('submit', 'form',function(event) {
		event.preventDefault();
		if ( validateForm() ) { 
			return false;
		}
		
		var form = $(this);
    var url = form.attr('action');
		$.ajax({
           type: "POST",
           url: url,
           data: form.serialize(),
           success: function(data)
           {
               alert(data);
           }
         });
	});
		
	function validateForm() {
			$("input").removeClass('invalid');
			$("textarea").removeClass('invalid');
			var v_first_name = false,
					v_last_name = false,
					v_comment = false;
    
    var reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    var el_e = $("#email");
    var v_email = el_e.val()?false:true;
    $("#email").toggleClass('invalid', v_email );

    if( $('#first_name').val().length === 0 ) {
    	$("#first_name").addClass('invalid');
    } else {
    	$("#first_name").removeClass('invalid');
    	v_first_name = true;
    }

    if( $('#last_name').val().length === 0 ) {
    	$("#last_name").addClass('invalid');
    } else {
    	$("#last_name").removeClass('invalid');
    	v_last_name = true;
    }

    if (($('#comment').val().trim().length === 0)) {
    	$("#comment").addClass('invalid');
    } else {
    	$("#comment").removeClass('invalid');
    	v_comment = true;
    }

    return ( v_first_name || v_last_name || v_email || v_comment );
  };
}



