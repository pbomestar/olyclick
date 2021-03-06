document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use the PhoneGap API

	$('a.button.start, a.button.newgame, a.button.continue, a.button.help, a.button.quit, a.button.yesquit, a.button.noquit').click(btnClick);



//////////// Click event handlers for buttons //////////

	function btnClick(){
		$(this).addClass('clicked');
		animBtnDown($(this));
	}

	function animBtnDown(btn){
		btn.velocity( 
			{bottom: "-=8px"}, 
			50, 
			function(){ 
				setTimeout(function(){ animBtnUp(btn) }, 70);
			}
		)
	}
	function animBtnUp(btn){
		btn.velocity( 
			{bottom: "+=8px"}, 
			50, 
			function(){ 
				btn.removeClass('clicked');
				setTimeout( doBtnAction(btn), 50);
			}
		)
	}
	function doBtnAction(btn){
		switch( btn.html() ) {
			case 'Start': 					// if (btn.html() == $("a.button.start").html()) {
				hideIntro(btn);
				break;
			case 'New Game':
				loadNewGame();
				break;
			case 'Continue':
				selectGame();
				break;
			case 'Help':
				getSomeHelp();
				break;
			case 'Quit':
				wannaQuit();
				break;
			case 'Yes':
				yesQuit();
				break;
			case 'No':
				noQuit();
				break;
						
			default:
				console.log('Nista');
		}

	}

///////////////////////////////////////////////////////////

	function loadNewGame(){
		hideBtnGroup();
	}
	function selectGame(){
		hideBtnGroup();
	}
	function getSomeHelp(){
		hideBtnGroup();
	}
	function wannaQuit(){
		hideBtnGroup();
		showYesNoBtns();
	}
	function yesQuit(){
		navigator.app.exitApp();
	}
	function noQuit(){
		hideYesNoBtns();
		showBtnGroup();
	}


///////////// Hide the intro section /////////////////////

    function hideIntro(btn){
		hideStartBtn(btn);
		hideVideo();
    }
    function hideStartBtn(btn){
		btn.velocity(
			{ opacity: 0 }, 
		100, 
		function(){
			btn.hide();
			setTimeout(function(){ showBtnGroup() }, 100);
		});
    }
			
    function hideVideo(){
    	$('video').velocity(
    		{ opacity: 0 }, 
    	100,
       	function(){
    		$('video').hide();
    	});    	
    }

/////////////////////////////////////////////////

	function showBtnGroup(){
		$('a.button.newgame').velocity({ opacity: 1 }, { display: "block" });
		setTimeout(function(){ $('a.button.continue').velocity({ opacity: 1 }, { display: "block" }); }, 25);
		setTimeout(function(){ $('a.button.help').velocity({ opacity: 1 }, { display: "block" }); }, 50);
		setTimeout(function(){ $('a.button.quit').velocity({ opacity: 1 }, { display: "block" }); }, 75);
	}

	function hideBtnGroup(){
		$('a.button.quit, a.button.help, a.button.continue, a.button.newgame').velocity({ opacity: 0 }, 100, { display: "none" });
	}

	function showYesNoBtns() {
		$('a.button.yesquit, a.button.noquit').velocity({ opacity: 1 }, { display: "inline-block" });;
	}
	function hideYesNoBtns() {
		$('a.button.yesquit, a.button.noquit').velocity({ opacity: 0 }, 100, { display: "none" });;
	}

}
