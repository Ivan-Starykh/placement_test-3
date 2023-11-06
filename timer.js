// setTimeout(function () {
//   document.getElementById('message').style.display = 'none';
// 	alert("Время истекло!");
// }, 10000);
 //2000000 Миллисекунд = 33.3333 Минут

// задаем начальное значение времни 
// let message = 10000; //90000 = 15 минут = 900 сек

// Функция обратного отсчета
// function tick() {
// 	if (message > 0) {
// 		message -=1000;
// 		const counter = document.getElementById("message");
// 		counter.innerHTML = Math.floor(message / 60) + ":" + ("0" + Math.floor(timeLeft % 60)).slice(-2);
// 		setTimeout(tick, 1000);
// 	} else {
// 		alert("Время истекло!");
// 		document.getElementById('message').style.display = 'none';

// 	}
// }

let startTime = Date.now();
let duration = 20000;

function updateCountdown() {
	let now = Date.now();
	let difference = now - startTime;

	if (difference < duration) {
		let minutes = Math.floor(difference / 1000 / 60);
		let seconds = Math.floor((difference / 1000) % 60);

		document.getElementById("countdown-timer").innerHTML = minutes + " минут " + seconds + " секунд ";
		setTimeout(updateCountdown, 1000);
	} else{
alert("Время истекло!");
document.getElementById("yandex__form").style.display = 'none';
	}
}

updateCountdown();