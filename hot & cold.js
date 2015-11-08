$('#start').on('click', function beginGame() {						//Start Javascript
	var $hider = $('#hider');												
	var $hiderbutton = $('#hiderbutton');
	var $feedback = $('#feedback');
	var randomnumberX = Math.floor(Math.random()* 1355) + 1;						//Random position
	var randomnumberY = Math.floor(Math.random()* 610) + 1;
	
	$('#details').hide();
	
	event.target.textContent = 'Reset';
	
	$feedback.html('');
	$hiderbutton.css('opacity', 0.0);									    //Hide Button
	$hider.offset({ top: randomnumberY, left: randomnumberX });              //Change button position
	
	$hider.on('click', function() {                                         //When button is found
		$hiderbutton.css('opacity', 1.0);
		$feedback.html('You got me!');										//Display Message
		event.stopPropagation();
	});
	$(document).on('mousemove', function() {
		
	var mousedistanceX = event.clientX - $hiderbutton.offset().left;       //How close cursor is
	var mousedistanceY = event.clientY - $hiderbutton.offset().top;     
	var $detector = $('#detector');
	
	if ((mousedistanceX < 10 && mousedistanceX > -10) && (mousedistanceY < 10 && mousedistanceY > -10)) {         //Hints
		$detector.html('Just wiggle your wrist and click <br /> 1').css('color', '#FF440A');
	} else if ((mousedistanceX < 50 && mousedistanceX > -50) && (mousedistanceY < 50 && mousedistanceY > -50)) {
		$detector.html('The cursor is getting 1st degree burns <br /> 2').css('color', '#FF780A');
	} else if ((mousedistanceX < 110 && mousedistanceX > -110) && (mousedistanceY < 110 && mousedistanceY > -110)) {
		$detector.html('Reaching Boiling Point <br /> 3').css('color', '#FF9C0A');
	} else if ((mousedistanceX < 150 && mousedistanceX > -150) && (mousedistanceY < 150 && mousedistanceY > -150)) {
		$detector.html('Hot <br /> 4').css('color', '#FF9C0A');
	} else if((mousedistanceX < 200 && mousedistanceX > -200) && (mousedistanceY < 200 && mousedistanceY > -200)) {
		$detector.html('Steaming <br /> 5').css('color', '#F6FF0A');
	} else if((mousedistanceX < 300 && mousedistanceX > -300) && (mousedistanceY < 300 && mousedistanceY > -300)) {
		$detector.html('Warm <br /> 6').css('color', 'yellow');
	} else if((mousedistanceX < 400 && mousedistanceX > -400) && (mousedistanceY < 400 && mousedistanceY > -400)) {
		$detector.html('Warm Fall Day <br /> 7').css('color', '#E1F722');
	} else if((mousedistanceX < 500 && mousedistanceX > -500) && (mousedistanceY < 500 && mousedistanceY > -500)) {
		$detector.html('Put a jacket on <br /> 8').css('color', '#22F7B4');
	}else if((mousedistanceX < 550 && mousedistanceX > -550) && (mousedistanceY < 550 && mousedistanceY > -550)) {
		$detector.html('No Shorts in sight <br /> 9').css('color', '#22F7F3');
	}else if((mousedistanceX < 675 && mousedistanceX > -675) && (mousedistanceY < 675 && mousedistanceY > -675)) {
		$detector.html('A coat is needed <br /> 10').css('color', '#2B22F7');
	}else if((mousedistanceX < 810 && mousedistanceX > -810) && (mousedistanceY < 810 && mousedistanceY > -810)) {
		$detector.html('Frigid <br /> 11').css('color', '#2254F7');
	}else if((mousedistanceX < 1000 && mousedistanceX > -1000) && (mousedistanceY < 1000 && mousedistanceY > -1000)) {
		$detector.html('School is cancelled <br /> 12').css('color', '#2287F7');
	}else if((mousedistanceX < 1500 && mousedistanceX > -1500) && (mousedistanceY < 1500 && mousedistanceY > -1500)) {
		$detector.html('Surface of Pluto <br /> 13').css('color', '#1D0FB6');
	}else if((mousedistanceX < 2000 && mousedistanceX > -2000) && (mousedistanceY < 2000 && mousedistanceY > -2000)) {
		$detector.html('This screen is huge <br /> Way too far').css('color', '#1D0CB6');
	}
		
		
		
		//Devtools
		$('#devtools').html('Mouse X: ' + event.clientX + '<br />' + 
							'Mouse Y: ' + event.clientY + '<br />' + 
							'Hidden Button X: ' + $hiderbutton.offset().left + '<br />' +
							'Hidden Button Y: ' + $hiderbutton.offset().top + '<br />'
							);
	});
	}
);
