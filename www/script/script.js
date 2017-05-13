document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use the PhoneGap API
}
$(document).ready(function() {    
   
	var contBtn = $('a.button.continue');
   

    contBtn.click(pressContinue);
   	
	function pressContinue(){
		animContDown();
	}
	function animContDown(){
		contBtn.velocity( 
			{bottom: "-=8px"}, 
			100, 
			function(){ 
				setTimeout(function(){ animContUp() }, 200);
			}
		)
	}
	function animContUp(){
		contBtn.velocity( 
			{bottom: "+=8px"}, 
			100, 
			function(){ 
				setTimeout(function(){ hideIntro() }, 100);
			}
		)
	}
    function hideIntro(){
		slideAwayContBtn();
		slideAwayVideo();
    }

    function slideAwayContBtn(){
		contBtn.velocity(
			{ opacity: 0 }, 
		100, 
		function(){
			contBtn.hide();
		});

    }
    function slideAwayVideo(){
    	$('video').velocity(
    		{ opacity: 0 }, 
    	100,
       	function(){
    		$('video').hide();
    	});    	
    }

  //   function slideAwayContBtn(){
		// contBtn.velocity(
		// 	{right: "-=300px" }, 
		// 700, 
		// [0.69, -0.32, 0.5, 0.78],
		// function(){
		// 	contBtn.hide();
		// });

  //   }
  //   function slideAwayVideo(){
  //   	$('video').velocity(
  //   		{ left: "-=1300px" }, 
  //   	700,
  //   	[0.69, -0.32, 0.5, 0.78],
  //      	function(){
  //   		$('video').hide();
  //   	});    	
  //   }

});

