$(document).ready(function(){
	var breakTime = 500;
	var workTime = 1500,
		currentTime = workTime,
		testPom = currentTime;
	var onDeck = "Break";
	var id = true;

	$("#testClock").text(secToTimeString(workTime));

	$("#decPom").click(function(){
		if (testPom == workTime && $("#testPom").text()>1){
			var pom = $("#testPom").text();
			pom--;
			$("#testPom").text(pom);
			testPom =
				currentTime =
				workTime = eval(minToSec($("#testPom").text()));
				$("#testClock").text(secToTimeString(workTime));
		}
	});

	$("#incPom").click(function(){
		if (testPom == workTime){
			var pom = $("#testPom").text();
			pom++;
			$("#testPom").text(pom);
			testPom =
				currentTime =
				workTime = eval(minToSec($("#testPom").text()));
				$("#testClock").text(secToTimeString(workTime));
		}
	});

	$("#decBreak").click(function(){
		if (testPom == workTime && $("#testBreak").text()>1){
			var brk = $("#testBreak").text();
			brk--;
			$("#testBreak").text(brk);
			breakTime = eval(minToSec($("#testBreak").text()));
		}
	});

	$("#incBreak").click(function(){
		if (testPom == workTime) {
			var brk = $("#testBreak").text();
			brk++;
			$("#testBreak").text(brk);
			breakTime = eval(minToSec($("#testBreak").text()));
		}
	});

	$("#start").click(countdown);
	$("#pause").click(pauseCountdown);
	$("#reset").click(resetCountdown);

	function minToSec(min) {
		return min * 60;
	} 

	function secToTimeString(second) {
		var hour = 0,
			minute = 0;

		hour = Math.floor(second / 3600);
		second = second - (3600 * hour);
		minute = Math.floor(second / 60);
		second = second - (60 * minute);

		if (hour < 10 && hour > 0) {hour = "0"+hour+":";}
		if (minute < 10) {minute = "0"+minute;}
		if (second < 10) {second = "0"+second;}

		return hour + minute + ":" + second;

	}

	function countdown() {
		if (id === true) {
			testPom = currentTime;
			id = setInterval(decrement, 1000);
		}
	}

	function decrement() {
		if (testPom == 0) {
			$("#activity").text(onDeck);
			switch (onDeck) {
				case "Break":
					testPom = breakTime;
					onDeck = "Session";
					break;
				case "Session":
				testPom = workTime;
				onDeck = "Break";
				break;
			}
			$("#testClock").text(secToTimeString(testPom));
		}
		else {
			testPom--;
			$("#testClock").text(secToTimeString(testPom));
		}
	}

	function pauseCountdown(){
		clearInterval(id);
		id = true;
		currentTime = testPom;
	}

	function resetCountdown(){
		clearInterval(id)
		id = true;
		testPom = currentTime = workTime = minToSec(25);
		breakTime = minToSec(5);
		$("#testPom").text(25);
		$("#testbreak").text(5);
		$("#testClock").text(secToTimeString(testPom));
		$("#activity").text('Session');
		onDeck = "Break";
	}

});