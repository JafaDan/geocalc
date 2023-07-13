
document.addEventListener('DOMContentLoaded', function() {
	var btn1 = document.getElementById('button1');
	var btn2 = document.getElementById('button2');
	var btn3 = document.getElementById('button3');
	var btn31 = document.getElementById('button31');
	var btn4 = document.getElementById('button4');
	
	var btnd1 = document.getElementById('buttond1');
	var btnd2 = document.getElementById('buttond2');
	var waySV = document.getElementById('SV');
	var wayUV = document.getElementById('UV');
	var wayUZ = document.getElementById('UZ');
	var waySZ = document.getElementById('SZ');
	
	
	//Вычисление дирекционного угла
	btnd1.addEventListener('click', function() {
		var cntd1 = document.getElementById('numberd1').value;
		
		var numberPartOne = String(cntd1.split(".", 1));
		var numberPartTwo = String(cntd1.substring(numberPartOne.length + 1).split(".", 1));
		var numberPartThr = String(cntd1.substring(numberPartOne.length + numberPartTwo.length + 2).split(".", 1));
		var numberDecim = (Number(numberPartOne) + (Number(numberPartTwo) / 60) + (Number(numberPartThr) / 3600));
		
		var numberPartOne = Number(cntd1.split(".", 1));
		if (numberPartOne < 90) {
			var wayd = "СВ";
			var chetv = 1;
			document.getElementById("answerd1").innerHTML = "Четверть: " + chetv + ", " + wayd + ": " + numberDecim;
		}
		
		else if (numberPartOne >= 90 && numberPartOne < 180) {
			var wayd = "ЮВ";
			var chetv = 2;
			
			var firstCounter = String(180 - numberDecim);
			var numberPartGrad = String(firstCounter.split(".", 1))
			var gradLength = numberPartGrad.length + 1;
			var numberPartOne = "0." + firstCounter.substring(gradLength);                             
			var numberPartMins = String(String(Number(numberPartOne * 60)).split(".", 1));
			var minsLength = numberPartMins.length + 1;
			var numberPartTwo = "0." + String(Number(numberPartOne * 60)).substring(minsLength);
			var numberPartSec = String(String(Number(numberPartTwo * 60)).substring(0, 5));
			
			document.getElementById("answerd1").innerHTML = "Четверть: " + chetv + ", " + wayd + ": " + numberPartGrad + "°" + numberPartMins + "'" + numberPartSec + "''";
		}
		
		else if (numberPartOne >= 180 && numberPartOne < 270) {
			var wayd = "ЮЗ";
			var chetv = 3;
			
			var firstCounter = String(numberDecim - 180);
			var numberPartGrad = String(firstCounter.split(".", 1));
			var gradLength = numberPartGrad.length + 1;
			var numberPartOne = "0." + firstCounter.substring(gradLength);                             
			var numberPartMins = String(String(Number(numberPartOne * 60)).split(".", 1));
			var minsLength = numberPartMins.length + 1;
			var numberPartTwo = "0." + String(Number(numberPartOne * 60)).substring(minsLength);
			var numberPartSec = String(String(Number(numberPartTwo * 60)).substring(0, 5));
			
			document.getElementById("answerd1").innerHTML = "Четверть: " + chetv + ", " + wayd + ": " + numberPartGrad + "°" + numberPartMins + "'" + numberPartSec + "''";			
		}
		
		else if (numberPartOne >= 270 && numberPartOne < 360) {
			var wayd = "СЗ";
			var chetv = 4;
			
			var firstCounter = String(360 - numberDecim);
			var numberPartGrad = String(firstCounter.split(".", 1));
			var gradLength = numberPartGrad.length + 1;
			var numberPartOne = "0." + firstCounter.substring(gradLength);                             
			var numberPartMins = String(String(Number(numberPartOne * 60)).split(".", 1));
			var minsLength = numberPartMins.length + 1;
			var numberPartTwo = "0." + String(Number(numberPartOne * 60)).substring(minsLength);
			var numberPartSec = String(String(Number(numberPartTwo * 60)).substring(0, 5));
			
			document.getElementById("answerd1").innerHTML = "Четверть: " + chetv + ", " + wayd + ": " + numberPartGrad + "°" + numberPartMins + "'" + numberPartSec + "''";			
		}
    });
	
	//Вычисление румба
	btnd2.addEventListener('click', function() {
		var cntd2 = document.getElementById('numberd2').value;
		
		var numberPartOne = String(cntd2.split(".", 1));
		var numberPartTwo = String(cntd2.substring(numberPartOne.length + 1).split(".", 1));
		var numberPartThr = String(cntd2.substring(numberPartOne.length + numberPartTwo.length + 2).split(".", 1));
		var numberDecim = (Number(numberPartOne) + (Number(numberPartTwo) / 60) + (Number(numberPartThr) / 3600));
		
		if(document.getElementById('waySV').checked) {
			var way2 = "SV";
		}
		if(document.getElementById('wayUV').checked) {
			var way2 = "UV";
		}
		if(document.getElementById('wayUZ').checked) {
			var way2 = "UZ";
		}
		if(document.getElementById('waySZ').checked) {
			var way2 = "SZ";
		}
		
		if (way2 == "SV") {
			document.getElementById("answerd2").innerHTML = numberDecim;
		}
		
		else if (way2 == "UV") {
			var firstCounter = String(180 - numberDecim);
			var numberPartGrad = String(firstCounter.split(".", 1))
			var gradLength = numberPartGrad.length + 1;
			var numberPartOne = "0." + firstCounter.substring(gradLength);                             
			var numberPartMins = String(String(Number(numberPartOne * 60)).split(".", 1));
			var minsLength = numberPartMins.length + 1;
			var numberPartTwo = "0." + String(Number(numberPartOne * 60)).substring(minsLength);
			var numberPartSec = String(String(Number(numberPartTwo * 60)).substring(0, 5));
			
			document.getElementById("answerd2").innerHTML = numberPartGrad + "°" + numberPartMins + "'" + numberPartSec + "''";
		}
		
		else if (way2 == "UZ") {
			var firstCounter = String(180 + numberDecim);
			var numberPartGrad = String(firstCounter.split(".", 1));
			var gradLength = numberPartGrad.length + 1;
			var numberPartOne = "0." + firstCounter.substring(gradLength);                             
			var numberPartMins = String(String(Number(numberPartOne * 60)).split(".", 1));
			var minsLength = numberPartMins.length + 1;
			var numberPartTwo = "0." + String(Number(numberPartOne * 60)).substring(minsLength);
			var numberPartSec = String(String(Number(numberPartTwo * 60)).substring(0, 5));
			
			document.getElementById("answerd2").innerHTML = numberPartGrad + "°" + numberPartMins + "'" + numberPartSec + "''";			
		}
		
		else if (way2 == "SZ") {
			var firstCounter = String(360 - numberDecim);
			var numberPartGrad = String(firstCounter.split(".", 1));
			var gradLength = numberPartGrad.length + 1;
			var numberPartOne = "0." + firstCounter.substring(gradLength);                             
			var numberPartMins = String(String(Number(numberPartOne * 60)).split(".", 1));
			var minsLength = numberPartMins.length + 1;
			var numberPartTwo = "0." + String(Number(numberPartOne * 60)).substring(minsLength);
			var numberPartSec = String(String(Number(numberPartTwo * 60)).substring(0, 5));
			
			document.getElementById("answerd2").innerHTML = numberPartGrad + "°" + numberPartMins + "'" + numberPartSec + "''";			
		}
    });
	
	//Перевод из десятичных градусов
	btn1.addEventListener('click', function() {
		var cnt1 = document.getElementById('number1').value;
		var numberPartGrad = String(cnt1.split(".", 1));

		var gradLength = numberPartGrad.length + 1;
		var numberPartOne = "0." + cnt1.substring(gradLength);                             
		var numberPartMins = String(String(Number(numberPartOne * 60)).split(".", 1));
		var minsLength = numberPartMins.length + 1;
		var numberPartTwo = "0." + String(Number(numberPartOne * 60)).substring(minsLength);                             
		var numberPartSec = String(String(Number(numberPartTwo * 60)).substring(0, 5));
    document.getElementById("answer1").innerHTML = numberPartGrad + "°" + numberPartMins + "'" + numberPartSec + "''";
    });
	
	//Перевод в десятичные градусы
	btn2.addEventListener('click', function() {
		var cnt2 = document.getElementById('number2').value;
		var numberPartOne = String(cnt2.split(".", 1));
		var numberPartTwo = String(cnt2.substring(numberPartOne.length + 1).split(".", 1));
		var numberPartThr = String(cnt2.substring(numberPartOne.length + numberPartTwo.length + 2).split(".", 1));
		var numberDecim = String(Number(numberPartOne) + (Number(numberPartTwo) / 60) + (Number(numberPartThr) / 3600)).substr(0, 9);
	
	document.getElementById("answer2").innerHTML = numberDecim;
    });
	
	//Перевод в радианы
	btn3.addEventListener('click', function() {
		var cnt3 = document.getElementById('number3').value;
		var numberPartOne = String(cnt3.split(".", 1));
		var numberPartTwo = String(cnt3.substring(numberPartOne.length + 1).split(".", 1));
		var numberPartThr = String(cnt3.substring(numberPartOne.length + numberPartTwo.length + 2).split(".", 1));
		var numberDecim = Number(numberPartOne) + (Number(numberPartTwo) / 60) + (Number(numberPartThr) / 3600);
		var numberRadOne = String(numberDecim * (3.1415/180)).substr(0, 10);
	
	document.getElementById("answer3").innerHTML = numberRadOne;
    });
	
	btn31.addEventListener('click', function() {
		var cnt31 = document.getElementById('number31').value;
		var numberRadTwo = String(cnt31 * (3.1415/180)).substr(0, 10);
	
	document.getElementById("answer31").innerHTML = numberRadTwo;
    });	
	
	//Перевод из радиан
	btn4.addEventListener('click', function() {
		var cnt4 = document.getElementById('number4').value;
		var numberGradOne = String(cnt4 * (180/3.1415)).substr(0, 5);

		var numberPartGrad = String(numberGradOne.split(".", 1));
		var gradLength = numberPartGrad.length + 1;
		var numberPartOne = "0." + numberGradOne.substring(gradLength);                             
		var numberPartMins = String(String(Number(numberPartOne * 60)).split(".", 1));
		var minsLength = numberPartMins.length + 1;
		var numberPartTwo = "0." + String(Number(numberPartOne * 60)).substring(minsLength);                     
		var numberPartSec = String(String(Number(numberPartTwo * 60)).substring(0, 5));

		var numberGradTwo = String(numberPartGrad + "°" + numberPartMins + "'" + numberPartSec + "''");
		var answerGrad = numberGradOne + " или " + numberGradTwo;
		
	document.getElementById("answer4").innerHTML = answerGrad;
    });	
	
}, false);
