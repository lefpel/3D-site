// обращаемся к первому элементу с классом rain, тоже самое можно сделать через querySelector('.rain')
let canvas = document.getElementsByClassName("rain")[0];
//задаем ширину и высоту блока canvas равной ширине и высоте экрана
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Создаем переменную, в которой будем хранить 2д объект из канвы
let c = canvas.getContext("2d");

// Отдельная функция для вычисления рандомного числа
function randomNum(max, min) {
	return Math.floor(Math.random() * max) + min;
}

// Создаем функцию, которая будет делать падающие капли
// В качестве параметров у нас будет положение по X, по Y, конечная высота падения endY, скорость Velocity, Прозрачность капли Opacity
function RainDrops(x, y, endy, velocity, opacity) {
	// Здесь говорим, чтобы текущий вызов функции указывал на определенную каплю и все параметры передавались ей
	this.x = x;
	this.y = y;
	this.endy = endy;
	this.velocity = velocity;
	this.opacity = opacity;

	// рисуем каплю
	this.draw = function () {
		// Начать путь рисования
		c.beginPath();
		// двигать перо в точки X, Y
		c.moveTo(this.x, this.y);
		// Нарисовать линию от текущей точки до x, y-endY
		c.lineTo(this.x, this.y - this.endy);
		// Толщина линии 1 пиксель
		c.lineWidth = 1;
		// Цвет линии и добавление непрозрачности в конце
		c.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
		c.stroke();
	};
	// Здесь происходит обновление нарисованной капли
	this.update = function () {
		let rainEnd = window.innerHeight + 100;
		if (this.y >= rainEnd) {
			this.y = this.endy - 100;
		} else {
			this.y = this.y + this.velocity;
		}

		this.draw();
	};
}

let rainArray = [];
// С помощью цикла for рисуем 1000 капель
for (let i = 0; i < 1000; i++) {
	let rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
	let rainYLocation = Math.random() * -500;
	let randomRainHeight = randomNum(10, 2);
	let randomSpeed = randomNum(20, 0.2);
	let randomOpacity = Math.random() * 0.55;
	rainArray.push(
		new RainDrops(
			rainXLocation,
			rainYLocation,
			randomRainHeight,
			randomSpeed,
			randomOpacity
		)
	);
}
// анимация падения капли
function animateRain() {
	requestAnimationFrame(animateRain);
	c.clearRect(0, 0, window.innerWidth, window.innerHeight);

	for (let i = 0; i < rainArray.length; i++) {
		rainArray[i].update();
	}
}
// Вызов основной функции
animateRain();
