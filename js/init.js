(function($) {
        $(document).ready(function() {
                $('#bird')
                .sprite({fps: 9, no_of_frames: 3})
                .spRandom({top: 50, bottom: 200, left: 900, right: 320})
                .isDraggable()
                .activeOnClick()
                .active();
		$('#contactForm').submit(function(event){
			event.preventDefault();
			var data = 'nombre='+$('#nombre').val()+'&mail='+$('#mail').val()+'&comentario='+$('#comentario').val();
			$.ajax({
       			 data: data,
        		 type: "POST",
		         url: "form.php",
		         success: function (data) {
           		 	$('#contact').fadeOut(1000,function(){  
           		 	  $('#contact').html("<center><H2> Formulario enviado, muchas gracias <br> Form submitted, thanks :) </H2></center>");
           		 	});
				$('#contact').fadeIn(1000);  
			  
        		 }
    			});	
		});
        });
})(jQuery);
